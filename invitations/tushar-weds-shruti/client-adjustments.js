(function () {
  'use strict';

  var root = document.getElementById('root');
  var mapUrl = 'https://maps.app.goo.gl/CzHGz9nCdUWe39Rn8?g_st=iw';
  var videoId = 'ezZIMn4RXbE';
  var player = null;
  var playerStarted = false;
  var playerPaused = true;

  function isOriginalMusic(element) {
    if (!(element instanceof HTMLAudioElement)) return false;
    return element.dataset.youtubeMusic === 'true' || /audio\/background\.mp3(?:\?|$)/.test(element.getAttribute('src') || '');
  }

  function sendPlayerCommand(command, args) {
    if (!player || !player.contentWindow) return;
    player.contentWindow.postMessage(JSON.stringify({ event: 'command', func: command, args: args || [] }), 'https://www.youtube.com');
  }

  function ensurePlayer() {
    playerPaused = false;
    if (!player) {
      player = document.createElement('iframe');
      player.title = 'Tushar and Shruti wedding music';
      player.setAttribute('aria-hidden', 'true');
      player.setAttribute('allow', 'autoplay; encrypted-media');
      player.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      player.style.cssText = 'position:fixed;width:200px;height:200px;left:-10000px;bottom:0;opacity:0;pointer-events:none;border:0;';
      player.addEventListener('load', function () {
        window.setTimeout(function () {
          sendPlayerCommand('setVolume', [45]);
          if (playerPaused) sendPlayerCommand('pauseVideo');
          else sendPlayerCommand('playVideo');
        }, 700);
      });
      player.src = 'https://www.youtube.com/embed/' + videoId + '?enablejsapi=1&autoplay=1&start=8&controls=0&loop=1&playlist=' + videoId + '&playsinline=1&rel=0&origin=' + encodeURIComponent(location.origin);
      document.body.appendChild(player);
      playerStarted = true;
    } else {
      sendPlayerCommand('playVideo');
    }
  }

  function pausePlayer() {
    playerPaused = true;
    sendPlayerCommand('pauseVideo');
  }

  var nativePlay = HTMLMediaElement.prototype.play;
  var nativePause = HTMLMediaElement.prototype.pause;
  HTMLMediaElement.prototype.play = function () {
    if (isOriginalMusic(this)) {
      ensurePlayer();
      return Promise.resolve();
    }
    return nativePlay.apply(this, arguments);
  };
  HTMLMediaElement.prototype.pause = function () {
    if (isOriginalMusic(this)) {
      pausePlayer();
      return;
    }
    return nativePause.apply(this, arguments);
  };

  function removeOriginalAudio() {
    if (!root) return;
    root.querySelectorAll('audio').forEach(function (audio) {
      if (isOriginalMusic(audio)) {
        audio.dataset.youtubeMusic = 'true';
        audio.preload = 'none';
        audio.removeAttribute('src');
        audio.load();
      }
    });
  }

  function updateInvitation() {
    if (!root) return;

    var rsvpHeading = Array.from(root.querySelectorAll('h1,h2,h3,h4')).find(function (heading) {
      return heading.textContent.trim() === 'RSVP & BLESSINGS';
    });
    if (rsvpHeading) {
      var card = rsvpHeading.parentElement;
      while (card && card !== root && !String(card.className || '').includes('bg-white/95')) card = card.parentElement;
      if (card && card !== root) {
        var section = card;
        while (section.parentElement && section.parentElement !== root && section.parentElement.children.length === 1) section = section.parentElement;
        section.remove();
      }
    }

    Array.from(root.querySelectorAll('a')).forEach(function (link) {
      if (link.textContent.includes('Open in Google Maps')) {
        link.href = mapUrl;
        link.target = '_blank';
        link.rel = 'noreferrer';
      }
    });
    removeOriginalAudio();
  }

  if (root) {
    var observer = new MutationObserver(updateInvitation);
    observer.observe(root, { childList: true, subtree: true });
    updateInvitation();

    document.addEventListener('click', function (event) {
      var openLayer = Array.from(root.querySelectorAll('[class]')).find(function (element) {
        return element.classList.contains('fixed') && element.classList.contains('inset-0') && element.classList.contains('z-50');
      });
      if (!playerStarted && openLayer && openLayer.contains(event.target)) ensurePlayer();
    }, true);

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) pausePlayer();
      else if (player && !playerPaused) sendPlayerCommand('playVideo');
    });
  }
})();