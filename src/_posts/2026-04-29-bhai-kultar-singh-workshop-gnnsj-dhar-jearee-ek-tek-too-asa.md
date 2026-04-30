---
layout: default
section: music
---

## 2026-04-29 Bhai Kultar Singh Workshop — GNNSJ — Dhar Jearee Ek Tek Too Asa

Shabad: [Dhar Jearee Ek Tek Too Asa on iGurbani](https://www.igurbani.com/shabad/lwqf?verse=ewqb)

<div id="audio-player" style="max-width: 500px; margin: 2em 0; padding: 1.5em; border: 1px solid #ddd; border-radius: 8px; background: #fafafa;">
  <audio id="audio" preload="metadata">
    <source src="https://static.jujhar.com/music/2026-04-29-bhai-kultar-singh-workshop-gnnsj-dhar-jearee-ek-tek-too-asa.mp3" type="audio/mpeg">
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
      <a href="https://static.jujhar.com/music/2026-04-29-bhai-kultar-singh-workshop-gnnsj-dhar-jearee-ek-tek-too-asa.mp3" download style="text-decoration: none;">⬇ Download MP3</a>
    </span>
  </div>
</div>

<script>
  const audio = document.getElementById('audio');
  const playBtn = document.getElementById('playBtn');
  const seekBar = document.getElementById('seekBar');
  const PLAY = '▶';
  const PAUSE = '❚❚';

  function togglePlay() {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = PAUSE;
    } else {
      audio.pause();
      playBtn.textContent = PLAY;
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
    playBtn.textContent = PLAY;
    seekBar.value = 0;
  });
</script>

### Notes from the workshop

<figure style="margin: 1.5em 0;">
  <img src="/images/posts/2026-04-29-bhai-kultar-singh-workshop-gnnsj/00_bhai_kultar_singh.jpg" alt="Classification" loading="lazy" style="max-width: 100%; height: auto;">
  <figcaption style="font-size: 0.9em; color: #666;">Bhai Kultar Singh</figcaption>
</figure>

<figure style="margin: 1.5em 0;">
  <img src="/images/posts/2026-04-29-bhai-kultar-singh-workshop-gnnsj/01_dhamar.jpg" alt="Dhamar" loading="lazy" style="max-width: 100%; height: auto;">
  <figcaption style="font-size: 0.9em; color: #666;">Taal Dhamar</figcaption>
</figure>

<figure style="margin: 1.5em 0;">
  <img src="/images/posts/2026-04-29-bhai-kultar-singh-workshop-gnnsj/02_raag_info.jpg" alt="Raag info" loading="lazy" style="max-width: 100%; height: auto;">
  <figcaption style="font-size: 0.9em; color: #666;">Raag info</figcaption>
</figure>

<figure style="margin: 1.5em 0;">
  <img src="/images/posts/2026-04-29-bhai-kultar-singh-workshop-gnnsj/03_antra.jpg" alt="Antra" loading="lazy" style="max-width: 100%; height: auto;">
  <figcaption style="font-size: 0.9em; color: #666;">Antra</figcaption>
</figure>

<figure style="margin: 1.5em 0;">
  <img src="/images/posts/2026-04-29-bhai-kultar-singh-workshop-gnnsj/04_asthayee.jpg" alt="Asthayee" loading="lazy" style="max-width: 100%; height: auto;">
  <figcaption style="font-size: 0.9em; color: #666;">Asthayee</figcaption>
</figure>
