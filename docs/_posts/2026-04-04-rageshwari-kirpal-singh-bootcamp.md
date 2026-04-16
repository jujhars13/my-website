---
layout: default
---

### 2026-04-04 Rageshwari Kirpal Singh Bootcamp

<div id="audio-player" style="max-width: 500px; margin: 2em 0; padding: 1.5em; border: 1px solid #ddd; border-radius: 8px; background: #fafafa;">
  <audio id="audio" preload="metadata">
    <source src="https://static.jujhar.com/2026-04-04-rageshwari-kirpal-singh-bootcamp.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>

  <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
    <button id="playBtn" onclick="togglePlay()" style="width: 48px; height: 48px; border-radius: 50%; border: none; background: #333; color: #fff; font-size: 20px; cursor: pointer; display: flex; align-items: center; justify-content: center;">&#9654;</button>
    <div style="flex: 1;">
      <div style="display: flex; justify-content: space-between; font-size: 0.85em; color: #666;">
        <span id="currentTime">0:00</span>
        <span id="duration">0:00</span>
      </div>
      <input id="seekBar" type="range" min="0" max="100" value="0" style="width: 100%; cursor: pointer; margin: 4px 0;" oninput="seek(this.value)">
    </div>
  </div>

  <div style="display: flex; align-items: center; gap: 8px; font-size: 0.85em;">
    <label for="volume">Vol</label>
    <input id="volume" type="range" min="0" max="1" step="0.05" value="1" style="width: 80px;" oninput="document.getElementById('audio').volume = this.value">
    <span style="margin-left: auto;">
      <a href="https://static.jujhar.com/2026-04-04-rageshwari-kirpal-singh-bootcamp.mp3" download style="text-decoration: none;">⬇ Download MP3</a>
    </span>
  </div>
</div>

<script>
  const audio = document.getElementById('audio');
  const playBtn = document.getElementById('playBtn');
  const seekBar = document.getElementById('seekBar');

  function togglePlay() {
    if (audio.paused) {
      audio.play();
      playBtn.innerHTML = '&#10074;&#10074;';
    } else {
      audio.pause();
      playBtn.innerHTML = '&#9654;';
    }
  }

  function seek(val) {
    audio.currentTime = (val / 100) * audio.duration;
  }

  function fmt(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ':' + (sec < 10 ? '0' : '') + sec;
  }

  audio.addEventListener('loadedmetadata', function() {
    document.getElementById('duration').textContent = fmt(audio.duration);
  });

  audio.addEventListener('timeupdate', function() {
    document.getElementById('currentTime').textContent = fmt(audio.currentTime);
    seekBar.value = (audio.currentTime / audio.duration) * 100;
  });

  audio.addEventListener('ended', function() {
    playBtn.innerHTML = '&#9654;';
    seekBar.value = 0;
  });
</script>
