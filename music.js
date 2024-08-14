const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

const songs = [
    { title: 'Song 1', artist: 'Artist 1', src: 'song1.mp3' },
    { title: 'Song 2', artist: 'Artist 2', src: 'song2.mp3' },
    { title: 'Song 3', artist: 'Artist 3', src: 'song3.mp3' }
];

let songIndex = 0;

function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = song.src;
}

function playSong() {
    audio.play();
    playBtn.innerText = 'Pause';
}

function pauseSong() {
    audio.pause();
    playBtn.innerText = 'Play';
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;
});

loadSong(songs[songIndex]);
