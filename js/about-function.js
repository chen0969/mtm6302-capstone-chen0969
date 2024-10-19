const webLinks = document.getElementById('webLinks');
// array
const $webLinksArray = [
    'API:Poke API, <a href="https://pokeapi.cov">https://pokeapi.cov</a>',
    'You can also check: <a href="https://www.pokemon.com/">https://www.pokemon.com/</a>',
    'css CDN: <a href="https://nostalgic-css.github.io/NES.css/">https://nostalgic-css.github.io/NES.css/</a>',
    'Freamellork: <a href="https://getbootstrap.com/">https://getbootstrap.com/</a>'
];

// functions
function show_webLinks(){
    const linkArrayLength = $webLinksArray.length;
    for(i=0; i < linkArrayLength; i++){
        const createP = document.createElement('p');
        createP.classList.add('nes-balloon', 'from-left', 'nes-pointer', 'mb-5', 'd-block', 'w-75');
        createP.innerHTML = $webLinksArray[i];
        webLinks.appendChild(createP);
    }
}

show_webLinks();


// bg functions
const bg = document.getElementById('bg');
// svgs
bg.innerHTML = `
<svg class="o-svg animate__animated animate__zoomIn">
  <circle class="o-svg__bgCircleG" cx="100vw" cy="0" r="288"/>
  <circle class="o-svg__bgCircleR" cx="0" cy="150vh" r="730"/>
</svg>
`;