# 🎵 Didactic Music Player

## 🌍 Live Demo

Access the full project running online:

🔗 [https://8080-it7ahwp1espf2ftc1flko-b6ed10a8.manusvm.computer](https://music-player-five-phi.vercel.app/)

This link allows visitors to explore the music player exactly as intended, including playback controls, dynamic theming, and the interactive playlist.

---

## 📝 Overview

This project is a simple and didactic **Music Player**, developed using **Pure HTML5**, **CSS3**, and **Pure JavaScript**. Its purpose is to demonstrate the implementation of an interactive audio player, covering everything from the semantic structure to the playback control logic and the application of dynamic themes.

It is an excellent resource for learning about:
*   The `HTMLMediaElement` API (`<audio>`).
*   DOM manipulation for UI control.
*   The use of **CSS Variables** for theming and customization.
*   Playlist management and automatic playback.

---

## 📂 Project Structure

The project organization is clear and modular, facilitating maintenance and study:

```
Music_Player/
├── assets/
│   ├── audio/      → Example audio files (.mp3).
│   └── images/     → Album covers (.png).
├── css/
│   ├── base.css    → Reset and base styles.
│   ├── player.css  → Player component styles.
│   ├── styles.css  → Global and layout styles.
│   └── variables.css → CSS Variables and dynamic themes.
├── js/
│   ├── data.js     → Playlist metadata (title, artist, URL, cover).
│   ├── script.js   → Main player logic (controls, audio events).
│   └── ui.js       → Interface manipulation functions (rendering, display update).
└── index.html      → Main interface file.
```

---

## 🌐 1. HTML – Semantic Structure

The `index.html` file defines the player's structure, using elements to ensure accessibility and code clarity.

### **Main Components:**

*   **`<div class="container">`**: Contains the entire player and playlist.
*   **`<div class="song-info">`**: Displays the album cover and song details.
*   **`<audio id="audioPlayer">`**: The central element that uses the `HTMLMediaElement` API for playback.
*   **`<div class="controls">`**: Groups the control buttons (Play/Pause, Next, Previous).
*   **`<div class="playlist-section">`**: Contains the interactive music list.

### **Structure Example (index.html):**

```html
<div class="player">
    <div class="song-info">
        <div class="album-cover">
            <img id="albumCover" src="...">
        </div>
        <div class="song-details">
            <h2 id="songTitle">...</h2>
            <p id="artistName">...</p>
        </div>
    </div>
    <audio id="audioPlayer"></audio>
    <!-- ... Controls and Bars ... -->
</div>
```

---

## 🎨 2. CSS – Styling and Dynamic Themes

Styling is done with pure CSS, with emphasis on the use of **CSS Variables** (`--cor-primaria`, `--cor-fundo`, etc.) defined in `css/variables.css`.

### **Theming Feature:**

The project implements dynamic themes that change automatically with the song. The `atualizarTema` function in `js/script.js` adds classes (`theme-musica2`, `theme-musica3`, etc.) to the `<body>`, and `variables.css` redefines the colors for each theme.

### **CSS Variables Example (variables.css):**

```css
/* DEFAULT COLORS */
:root {
    --cor-primaria: #6366f1;
    --cor-fundo: #ffffff;
    /* ... */
}

/* THEME FOR SONG 2 */
body.theme-musica2 {
    --cor-primaria: #f59e0b; /* Yellow/Orange */
    --cor-fundo: #fffbeb;
    /* ... */
}
```

---

## ⚙️ 3. JavaScript – Player Logic and Interactivity

The player logic is divided into three files for better organization:

### **`js/data.js` (Metadata)**

Contains the `songs` array with all the playlist data.

```javascript
const songs = [
    {
        id: 1,
        title: "Le Nozze di Figaro (Overture)",
        artist: "Wolfgang Amadeus Mozart",
        url: "assets/audio/mozard-figaro.mp3",
        cover: "assets/images/mozard.png"
    },
    // ... other songs
];
```

### **`js/script.js` (Main Control)**

Manages playback, audio events, and navigation between songs.

*   **`AudioControl.toggle()`**: Toggles between playing and pausing.
*   **`loadSong(index)`**: Loads a new song, updates the UI, and applies the theme.
*   **Audio Events**: Handles `timeupdate` (progress bar), `loadedmetadata` (duration), and `ended` (automatic next song).

### **`js/ui.js` (User Interface)**

(Presumed, as `script.js` calls `UI.updateSongDisplay` and `UI.renderPlaylist`). This file contains the functions to render the playlist and update the visual elements (title, artist, cover, time).

---

## 🛠️ How to Run

No web server is required. To run the project:

1.  **Download** or **clone** this repository.
2.  Open the `index.html` file directly in your preferred web browser (Chrome, Firefox, Edge, etc.).

---

## 🔧 Customization

### Adding New Songs

1.  Add the audio file (`.mp3`) to the `assets/audio/` folder.
2.  Add the album cover (`.png` or `.jpg`) to the `assets/images/` folder.
3.  Edit `js/data.js` and add a new object to the `songs` array.

### Creating New Themes

1.  Edit `css/variables.css` and create a new selector `body.theme-musicaN` (where `N` is the ID of the new song).
2.  Define the new color variables within this selector.
3.  Update the `atualizarTema` function in `js/script.js` to apply the new theme class.

---

## 📚 Conclusion

This project is a solid foundation for anyone looking to explore audio manipulation and the creation of dynamic interfaces with pure web technologies. The modular structure and the use of CSS variables make it an excellent starting point for customization and expansion.
