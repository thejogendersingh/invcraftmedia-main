/**
 * INVITATION SCRIPT: Rohit & Priya
 * Strictly Scoped – No Global Variables
 */
(function() {
  'use strict';

  // 1. Audio Control
  const audioBtn = document.getElementById('audioBtn');
  const bgSong = document.getElementById('bgSong');
  const waveIcon = document.getElementById('waveIcon');
  const audioStateText = document.getElementById('audioStateText');

  let isAudioPlaying = false;

  function toggleMusic() {
    if (!bgSong) return;

    if (isAudioPlaying) {
      bgSong.pause();
      isAudioPlaying = false;
      waveIcon.classList.remove('playing');
      audioStateText.textContent = 'Music';
    } else {
      bgSong.play().then(() => {
        isAudioPlaying = true;
        waveIcon.classList.add('playing');
        audioStateText.textContent = 'Pause';
      }).catch(err => {
        console.warn('Audio playback suspended by browser policy:', err);
      });
    }
  }

  if (audioBtn && bgSong) {
    audioBtn.addEventListener('click', toggleMusic);
    audioBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMusic();
      }
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && isAudioPlaying) {
        bgSong.pause();
        isAudioPlaying = false;
        waveIcon.classList.remove('playing');
        audioStateText.textContent = 'Music';
      }
    });
  }

  // 2. Countdown Timer
  const timerContainer = document.getElementById('timerContainer');
  const tDays = document.getElementById('tDays');
  const tHours = document.getElementById('tHours');
  const tMins = document.getElementById('tMins');
  const tSecs = document.getElementById('tSecs');

  if (timerContainer && tDays && tHours && tMins && tSecs) {
    const targetDateStr = timerContainer.getAttribute('data-target-date');
    const targetTime = new Date(targetDateStr).getTime();

    function refreshTimer() {
      const now = new Date().getTime();
      const diff = targetTime - now;

      if (diff <= 0) {
        tDays.textContent = '00';
        tHours.textContent = '00';
        tMins.textContent = '00';
        tSecs.textContent = '00';
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      tDays.textContent = String(d).padStart(2, '0');
      tHours.textContent = String(h).padStart(2, '0');
      tMins.textContent = String(m).padStart(2, '0');
      tSecs.textContent = String(s).padStart(2, '0');
    }

    refreshTimer();
    setInterval(refreshTimer, 1000);
  }
})();
