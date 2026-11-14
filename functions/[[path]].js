export async function onRequest(context) {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // 1. Direct aliases mapping for high-traffic variations
  const aliasRedirects = {
    '/sanchita-weds-dharmendra': '/sanchita-weds-dharmendhra/',
    '/sanchita-weds-dharmendra/': '/sanchita-weds-dharmendhra/',
    '/dharmendra-weds-sanchita': '/sanchita-weds-dharmendhra/',
    '/dharmendra-weds-sanchita/': '/sanchita-weds-dharmendhra/',
    '/dharmendhra-weds-sanchita': '/sanchita-weds-dharmendhra/',
    '/dharmendhra-weds-sanchita/': '/sanchita-weds-dharmendhra/',
    '/kirti-weds-arpan': '/arpan-weds-kirti/',
    '/kirti-weds-arpan/': '/arpan-weds-kirti/',
    '/sneha-weds-shouvik': '/shouvik-weds-sneha/',
    '/sneha-weds-shouvik/': '/shouvik-weds-sneha/',
    '/kiran-weds-sameeksha': '/sameeksha-weds-kiran/',
    '/kiran-weds-sameeksha/': '/sameeksha-weds-kiran/',
    '/suman-weds-nitin': '/nitin-weds-suman/',
    '/suman-weds-nitin/': '/nitin-weds-suman/',
    '/priyanka-weds-aniket': '/aniket-weds-priyanka/',
    '/priyanka-weds-aniket/': '/aniket-weds-priyanka/'
  };

  if (aliasRedirects[pathname]) {
    return Response.redirect(new URL(aliasRedirects[pathname], url.origin).toString(), 302);
  }

  // Handle alias assets (e.g. /dharmendra-weds-sanchita/assets/xyz -> /invitations/sanchita-weds-dharmendhra/assets/xyz)
  for (const [aliasPrefix, targetPrefix] of [
    ['/sanchita-weds-dharmendra/', '/invitations/sanchita-weds-dharmendhra/'],
    ['/dharmendra-weds-sanchita/', '/invitations/sanchita-weds-dharmendhra/'],
    ['/dharmendhra-weds-sanchita/', '/invitations/sanchita-weds-dharmendhra/']
  ]) {
    if (pathname.startsWith(aliasPrefix)) {
      const subpath = pathname.slice(aliasPrefix.length);
      return context.env.ASSETS.fetch(new URL(targetPrefix + subpath, url.origin));
    }
  }

  // 2. Canonical trailing-slash redirect: /<slug> -> /<slug>/
  // Matches top-level slug with no dot (not a file) and no trailing slash
  const bareSlugMatch = pathname.match(/^\/([a-zA-Z0-9_-]+)$/);
  if (bareSlugMatch) {
    const slug = bareSlugMatch[1];
    // Check if invitations/<slug> exists
    const checkRes = await context.env.ASSETS.fetch(new URL(`/invitations/${slug}/index.html`, url.origin));
    if (checkRes.status === 200 || checkRes.status === 308) {
      return Response.redirect(new URL(`/${slug}/`, url.origin).toString(), 302);
    }
  }

  // 3. Directory rewrite: /<slug>/ -> /invitations/<slug>/index.html
  const dirMatch = pathname.match(/^\/([a-zA-Z0-9_-]+)\/$/);
  if (dirMatch) {
    const slug = dirMatch[1];
    const assetRes = await context.env.ASSETS.fetch(new URL(`/invitations/${slug}/index.html`, url.origin));
    if (assetRes.status === 200) {
      const newHeaders = new Headers(assetRes.headers);
      newHeaders.set('Cache-Control', 'no-cache, no-store, must-revalidate');
      newHeaders.set('X-Content-Type-Options', 'nosniff');
      return new Response(assetRes.body, {
        status: 200,
        headers: newHeaders
      });
    }
  }

  // 4. Sub-assets rewrite: /<slug>/<subpath> -> /invitations/<slug>/<subpath>
  const assetMatch = pathname.match(/^\/([a-zA-Z0-9_-]+)\/(.+)$/);
  if (assetMatch && !pathname.startsWith('/invitations/')) {
    const slug = assetMatch[1];
    const subpath = assetMatch[2];
    const assetRes = await context.env.ASSETS.fetch(new URL(`/invitations/${slug}/${subpath}`, url.origin));
    if (assetRes.status === 200) {
      return assetRes;
    }
  }

  // Fallback to static asset serving or default 404
  return context.next();
}
