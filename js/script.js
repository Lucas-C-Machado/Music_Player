const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const volumeSlider = document.getElementById('volumeSlider');

let currentSongIndex = 0;
let isPlaying = false;

// Lógica de Controle
const AudioControl = {
    play() {
        isPlaying = true;
        playBtn.textContent = "⏸️ Pausar";
        audio.play();
    },
    pause() {
        isPlaying = false;
        playBtn.textContent = "▶️ Reproduzir";
        audio.pause();
    },
    toggle() {
        isPlaying ? this.pause() : this.play();
    }
};

function loadSong(index) {
    currentSongIndex = (index + songs.length) % songs.length;
    const song = songs[currentSongIndex];
    audio.src = song.url;
    
    UI.updateSongDisplay(song);
    UI.renderPlaylist(songs, currentSongIndex, loadSong);
    
    // ESTA LINHA É O GATILHO:
    atualizarTema(currentSongIndex);
    
    if (isPlaying) AudioControl.play();
}

function initEventListeners() {
    // Cliques nos botões
    playBtn.addEventListener('click', () => AudioControl.toggle());
    nextBtn.addEventListener('click', () => loadSong(currentSongIndex + 1));
    prevBtn.addEventListener('click', () => loadSong(currentSongIndex - 1));

    // Correção: Mudar trecho da música (Seek)
    progressBar.addEventListener('input', () => {
        const time = (progressBar.value / 100) * audio.duration;
        audio.currentTime = time;
    });

    // Correção: Controle de Volume
    volumeSlider.addEventListener('input', () => {
        audio.volume = volumeSlider.value / 100;
        UI.updateVolumeLabel(volumeSlider.value);
    });

    // Correção: Atualizar tempo e barra enquanto toca
    audio.addEventListener('timeupdate', () => {
        UI.updateProgress(audio.currentTime, audio.duration);
    });

    // Correção: Carregar duração total assim que o arquivo for lido
    audio.addEventListener('loadedmetadata', () => {
        UI.updateProgress(audio.currentTime, audio.duration);
    });

    // Próxima automática ao acabar
    audio.addEventListener('ended', () => loadSong(currentSongIndex + 1));
}

// Inicialização total
window.addEventListener('DOMContentLoaded', () => {
    initEventListeners();
    loadSong(0);
});

function atualizarTema(index) {
    // 1. Identifica todas as classes de tema que começam com 'theme-'
    const classesParaRemover = Array.from(document.body.classList).filter(c => c.startsWith('theme-'));
    
    // 2. Remove todas elas de uma vez
    classesParaRemover.forEach(c => document.body.classList.remove(c));
    
    // 3. Aplica o novo tema baseado no índice (Índice 0 é a Música 1)
    if (index === 1) document.body.classList.add('theme-musica2');
    else if (index === 2) document.body.classList.add('theme-musica3');
    else if (index === 3) document.body.classList.add('theme-musica4');
    else if (index === 4) document.body.classList.add('theme-musica5');
    
    // Se index for 0 (Música 1), nenhuma classe será adicionada e voltará ao roxo padrão
}