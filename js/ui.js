const UI = {
    // Referências do DOM centralizadas para a UI
    elements: {
        songTitle: document.getElementById('songTitle'),
        artistName: document.getElementById('artistName'),
        albumName: document.getElementById('albumName'),
        albumCover: document.getElementById('albumCover'),
        progressBar: document.getElementById('progressBar'),
        currentTime: document.getElementById('currentTime'),
        duration: document.getElementById('duration'),
        volumeValue: document.getElementById('volumeValue'),
        playlist: document.getElementById('playlist')
    },

    updateSongDisplay(song) {
        this.elements.songTitle.textContent = song.title;
        this.elements.artistName.textContent = song.artist;
        this.elements.albumName.textContent = song.album;
        this.elements.albumCover.src = song.cover;
        document.title = `Tocando: ${song.title}`;
    },

    formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec.toString().padStart(2, '0')}`;
    },

    updateProgress(currentTime, duration) {
        if (!isNaN(duration) && duration > 0) {
            const percent = (currentTime / duration) * 100;
            this.elements.progressBar.value = percent;
            this.elements.currentTime.textContent = this.formatTime(currentTime);
            this.elements.duration.textContent = this.formatTime(duration);
        }
    },

    updateVolumeLabel(value) {
        this.elements.volumeValue.textContent = `${value}%`;
    },

    renderPlaylist(songs, currentIndex, onSelect) {
        this.elements.playlist.innerHTML = '';
        songs.forEach((song, index) => {
            const item = document.createElement('div');
            item.className = `playlist-item ${index === currentIndex ? 'active' : ''}`;
            item.innerHTML = `
                <span class="playlist-item-number">${index + 1}</span>
                <div class="playlist-item-info">
                    <strong>${song.title}</strong>
                    <p>${song.artist}</p>
                </div>
            `;
            item.onclick = () => onSelect(index);
            this.elements.playlist.appendChild(item);
        });
    }
};