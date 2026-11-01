const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

// Parse _redirects rules
function loadRedirectRules() {
  const redirectsPath = path.join(ROOT, '_redirects');
  const rules = [];
  if (fs.existsSync(redirectsPath)) {
    const lines = fs.readFileSync(redirectsPath, 'utf8').split('\n');
    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) continue;
      const parts = line.split(/\s+/);
      if (parts.length >= 3) {
        rules.push({
          from: parts[0],
          to: parts[1],
          status: parseInt(parts[2], 10)
        });
      }
    }
  }
  return rules;
}

function applyRedirects(requestPath) {
  const redirectRules = loadRedirectRules();
  for (const rule of redirectRules) {
    if (rule.from.endsWith('/*')) {
      const prefix = rule.from.slice(0, -2);
      if (requestPath.startsWith(prefix + '/')) {
        const splat = requestPath.slice(prefix.length + 1);
        const target = rule.to.replace(':splat', splat);
        return { path: target, status: rule.status };
      }
    } else if (rule.from === requestPath) {
      return { path: rule.to, status: rule.status };
    }
  }
  return null;
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Check redirects / rewrites from _redirects
  const matched = applyRedirects(pathname);
  if (matched) {
    if (matched.status === 301 || matched.status === 302) {
      res.writeHead(matched.status, { 'Location': matched.path + (parsedUrl.search || '') });
      res.end();
      return;
    } else if (matched.status === 200) {
      pathname = matched.path;
    }
  }

  let filePath = path.join(ROOT, pathname);

  // If path is directory, serve index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  } else if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
    filePath = filePath + '.html';
  }

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    // 404
    const notFoundPath = path.join(ROOT, '404.html');
    if (fs.existsSync(notFoundPath)) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(fs.readFileSync(notFoundPath));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  res.writeHead(200, {
    'Content-Type': contentType,
    'Access-Control-Allow-Origin': '*'
  });

  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Local dev server running at:`);
  console.log(`- Main site:       http://localhost:${PORT}/`);
  console.log(`- Real Invitation: http://localhost:${PORT}/krishna-weds-shreya/`);
});

