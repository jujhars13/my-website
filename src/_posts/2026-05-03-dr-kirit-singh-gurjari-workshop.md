---
layout: default
section: music
---

## 2026-05-03 Dr Kirit Singh Gurjari Workshop

<div id="audio-player" style="max-width: 500px; margin: 2em 0; padding: 1.5em; border: 1px solid #ddd; border-radius: 8px; background: #fafafa;">
  <audio id="audio" preload="metadata">
    <source src="https://static.jujhar.com/music/2026-05-03-keerat-singh-gujari-workshop/2026-05-03-keerat-singh-gujari-workshop.mp3" type="audio/mpeg">
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
      <a href="https://static.jujhar.com/music/2026-05-03-keerat-singh-gujari-workshop/2026-05-03-keerat-singh-gujari-workshop.mp3" download style="text-decoration: none;">⬇ Download MP3</a>
    </span>
  </div>

### Broken Down

Thanks to Shromini 108 Bhai Sahib Bhai Hardeep Singh West-Brom Vale for the recording.

- [01 Intro and Sa Abhyaas](https://static.jujhar.com/music/2026-05-03-keerat-singh-gujari-workshop/260503%2001%20Intro%20and%20Sa%20Abhyaas.m4a)
- [02 Ang vs Thaath](https://static.jujhar.com/music/2026-05-03-keerat-singh-gujari-workshop/260503%2002%20Ang%20vs%20Thaath.m4a)
- [03 Goojri structure](https://static.jujhar.com/music/2026-05-03-keerat-singh-gujari-workshop/260503%2003%20Goojri%20structure.m4a)
- [04 Todi ang](https://static.jujhar.com/music/2026-05-03-keerat-singh-gujari-workshop/260503%2004%20Todi%20ang.m4a)
- [05 Goojri alaap](https://static.jujhar.com/music/2026-05-03-keerat-singh-gujari-workshop/260503%2005%20Goojri%20alaap.m4a)
- [06 Goojri aakaar](https://static.jujhar.com/music/2026-05-03-keerat-singh-gujari-workshop/260503%2006%20Goojri%20aakaar.m4a)
- [07 Goojri - Kab Laagae Mastaki Charnan Raj](https://static.jujhar.com/music/2026-05-03-keerat-singh-gujari-workshop/260503%2007%20Goojri%20-%20Kab%20Laagae%20Mastaki%20Charnan%20Raj.m4a)
- [08 Kabit features](https://static.jujhar.com/music/2026-05-03-keerat-singh-gujari-workshop/260503%2008%20Kabit%20features.m4a)
- [09 Dhrupad features](https://static.jujhar.com/music/2026-05-03-keerat-singh-gujari-workshop/260503%2009%20Dhrupad%20features.m4a)
- [10 Learning styles](https://static.jujhar.com/music/2026-05-03-keerat-singh-gujari-workshop/260503%2010%20Learning%20styles.m4a)

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
  <img src="/images/posts/2026-05-03-dr-kirit-singh-gurjari-workshop/01_notes.jpg" alt="Workshop notes" loading="lazy" style="max-width: 100%; height: auto;">
  <figcaption style="font-size: 0.9em; color: #666;">Workshop notes</figcaption>
</figure>
