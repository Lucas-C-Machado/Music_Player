# 🎵 Music Player Didático

## 📝 Visão Geral

Este projeto é um **Reprodutor de Música** simples e didático, desenvolvido com **HTML5**, **CSS3** e **JavaScript Puro**. Seu propósito é demonstrar a implementação de um player de áudio interativo, cobrindo desde a estrutura semântica até a lógica de controle de reprodução e a aplicação de temas dinâmicos.

É um excelente recurso para aprender sobre:
*   A API `HTMLMediaElement` (`<audio>`).
*   Manipulação do DOM para controle de UI.
*   Uso de **Variáveis CSS** para temas e personalização.
*   Gerenciamento de playlist e reprodução automática.

---

## 📂 Estrutura do Projeto

A organização do projeto é clara e modular, facilitando a manutenção e o estudo:

```
Music_Player/
├── assets/
│   ├── audio/      → Arquivos de áudio (.mp3) de exemplo.
│   └── images/     → Capas dos álbuns (.png).
├── css/
│   ├── base.css    → Estilos de reset e base.
│   ├── player.css  → Estilos do componente player.
│   ├── styles.css  → Estilos globais e de layout.
│   └── variables.css → Variáveis CSS e temas dinâmicos.
├── js/
│   ├── data.js     → Metadados da playlist (título, artista, URL, capa).
│   ├── script.js   → Lógica principal do player (controles, eventos de áudio).
│   └── ui.js       → Funções de manipulação da interface (renderização, atualização de display).
└── index.html      → Arquivo principal da interface.
```

---

## 🌐 1. HTML – Estrutura Semântica

O arquivo `index.html` define a estrutura do player, utilizando elementos para garantir a acessibilidade e a clareza do código.

### **Principais Componentes:**

*   **`<div class="container">`**: Contém todo o player e a playlist.
*   **`<div class="song-info">`**: Exibe a capa do álbum e os detalhes da música.
*   **`<audio id="audioPlayer">`**: O elemento central que utiliza a API `HTMLMediaElement` para reprodução.
*   **`<div class="controls">`**: Agrupa os botões de controle (Play/Pause, Próxima, Anterior).
*   **`<div class="playlist-section">`**: Contém a lista de músicas interativa.

### **Exemplo de Estrutura (index.html):**

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
    <!-- ... Controles e Barras ... -->
</div>
```

---

## 🎨 2. CSS – Estilização e Temas Dinâmicos

A estilização é feita com CSS puro, com destaque para o uso de **Variáveis CSS** (`--cor-primaria`, `--cor-fundo`, etc.) definidas em `css/variables.css`.

### **Funcionalidade de Temas:**

O projeto implementa temas dinâmicos que mudam automaticamente com a música. A função `atualizarTema` em `js/script.js` adiciona classes (`theme-musica2`, `theme-musica3`, etc.) ao `<body>`, e o `variables.css` redefine as cores para cada tema.

### **Exemplo de Variáveis CSS (variables.css):**

```css
/* CORES PADRÃO */
:root {
    --cor-primaria: #6366f1;
    --cor-fundo: #ffffff;
    /* ... */
}

/* TEMA PARA MÚSICA 2 */
body.theme-musica2 {
    --cor-primaria: #f59e0b; /* Amarelo/Laranja */
    --cor-fundo: #fffbeb;
    /* ... */
}
```

---

## ⚙️ 3. JavaScript – Lógica do Player e Interatividade

A lógica do player é dividida em três arquivos para melhor organização:

### **`js/data.js` (Metadados)**

Contém o array `songs` com todos os dados da playlist.

```javascript
const songs = [
    {
        id: 1,
        title: "Le Nozze di Figaro (Abertura)",
        artist: "Wolfgang Amadeus Mozart",
        url: "assets/audio/mozard-figaro.mp3",
        cover: "assets/images/mozard.png"
    },
    // ... outras músicas
];
```

### **`js/script.js` (Controle Principal)**

Gerencia a reprodução, os eventos de áudio e a navegação entre as músicas.

*   **`AudioControl.toggle()`**: Alterna entre reproduzir e pausar.
*   **`loadSong(index)`**: Carrega uma nova música, atualiza a UI e aplica o tema.
*   **Eventos de Áudio**: Lida com `timeupdate` (barra de progresso), `loadedmetadata` (duração) e `ended` (próxima música automática).

### **`js/ui.js` (Interface do Usuário)**

(Presumido, pois `script.js` chama `UI.updateSongDisplay` e `UI.renderPlaylist`). Este arquivo contém as funções para renderizar a playlist e atualizar os elementos visuais (título, artista, capa, tempo).

---

## 🛠️ Como Executar

Não é necessário servidor web. Para rodar o projeto:

1.  **Baixe** ou **clone** este repositório.
2.  Abra o arquivo `index.html` diretamente no seu navegador web (Chrome, Firefox, Edge, etc.).

---

## 🔧 Personalização

### Adicionar Novas Músicas

1.  Adicione o arquivo de áudio (`.mp3`) em `assets/audio/`.
2.  Adicione a capa do álbum (`.png` ou `.jpg`) em `assets/images/`.
3.  Edite `js/data.js` e adicione um novo objeto ao array `songs`.

### Criar Novos Temas

1.  Edite `css/variables.css` e crie um novo seletor `body.theme-musicaN` (onde `N` é o ID da nova música).
2.  Defina as novas variáveis de cor dentro deste seletor.
3.  Atualize a função `atualizarTema` em `js/script.js` para aplicar a nova classe de tema.

---

## 📚 Conclusão

Este projeto é uma base sólida para quem deseja explorar a manipulação de áudio e a criação de interfaces dinâmicas com tecnologias web puras. A estrutura modular e o uso de variáveis CSS o tornam um excelente ponto de partida para personalização e expansão.
