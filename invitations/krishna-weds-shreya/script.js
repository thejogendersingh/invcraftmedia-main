/**
 * INVITATION SCRIPT: Krishna & Shreya
 * Strictly Scoped – No Global Variables
 */
(function() {
  'use strict';

  // 1. Audio Controller with Autoplay Policy Compliance
  const musicController = document.getElementById('musicController');
  const invitationAudio = document.getElementById('invitationAudio');
  const musicDisc = document.getElementById('musicDisc');
  const musicLabel = document.getElementById('musicLabel');

  let isPlaying = false;

  function toggleAudio() {
    if (!invitationAudio) return;

    if (isPlaying) {
      invitationAudio.pause();
      isPlaying = false;
      musicDisc.classList.remove('playing');
      musicLabel.textContent = 'Play Music';
    } else {
      invitationAudio.play().then(() => {
        isPlaying = true;
        musicDisc.classList.add('playing');
        musicLabel.textContent = 'Pause Music';
      }).catch(err => {
        console.warn('Audio playback prevented by browser policy:', err);
      });
    }
  }

  if (musicController && invitationAudio) {
    musicController.addEventListener('click', toggleAudio);
    musicController.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleAudio();
      }
    });

    // Pause audio when browser tab is inactive / backgrounded
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && isPlaying) {
        invitationAudio.pause();
        isPlaying = false;
        musicDisc.classList.remove('playing');
        musicLabel.textContent = 'Play Music';
      }
    });
  }

  // 2. Countdown Timer
  const countdownGrid = document.getElementById('countdownGrid');
  const cdDays = document.getElementById('cdDays');
  const cdHours = document.getElementById('cdHours');
  const cdMinutes = document.getElementById('cdMinutes');
  const cdSeconds = document.getElementById('cdSeconds');

  if (countdownGrid && cdDays && cdHours && cdMinutes && cdSeconds) {
    const targetDateStr = countdownGrid.getAttribute('data-event-date');
    const targetDate = new Date(targetDateStr).getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        cdDays.textContent = '00';
        cdHours.textContent = '00';
        cdMinutes.textContent = '00';
        cdSeconds.textContent = '00';
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      cdDays.textContent = String(days).padStart(2, '0');
      cdHours.textContent = String(hours).padStart(2, '0');
      cdMinutes.textContent = String(minutes).padStart(2, '0');
      cdSeconds.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
})();
