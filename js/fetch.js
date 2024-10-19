// main poke global consts
const pokeimgFrontPic = document.querySelectorAll(".pokeimgFrontPic");
const mainPokeName = document.querySelectorAll(".mainPokeName");
const mainPokeId = document.getElementById("mainPokeId");
const mainPokeWeight = document.getElementById("mainPokeWeight");
const mainPokeType = document.getElementById("mainPokeType");

// 20 poke class global settings
let poke20ImgUrl;
let poke20NameUrl;
const poke20Show = document.getElementById("poke20Show");
let pokeList = [];
let pokeListHTML = [];

// poke catch
const pokeCatch = document.getElementById("pokeCatch");

// poke id random
let pokePop = Math.round(Math.random() * 200) + 1;


/* ------functions------ */

// default
async function fetchPokeDefault(pokeId) {
    try {
        // use ditto for default
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
        if (!res.ok) {
            throw new Error('oh no!');
        };
        console.log('works!');
        const data = await res.json();
        // push org files
        let mainPokeImgUrl = data.sprites.front_default;
        let mainPokeNameUrl = data.name;
        let mainPokeIdUrl = data.id;
        let mainPokeweightUrl = data.weight;
        let mainPokeTypeUrl = data.types[0].type.name;

        // push hooks
        pokeimgFrontPic.forEach(img => {
            img.src = mainPokeImgUrl;
        });
        mainPokeName.forEach(p => {
            p.textContent = mainPokeNameUrl;
        });
        mainPokeId.textContent = mainPokeIdUrl;
        mainPokeWeight.textContent = mainPokeweightUrl;
        mainPokeType.textContent = mainPokeTypeUrl;

        // poke catch preset
        pokeCatch.innerHTML = `
        <svg class="o-svg animate__animated animate__bounceIn" viewBox="0 0 771.8 771">
        <circle cx="385.9" cy="385.5" r="375" style="fill: #fff; stroke: #060807; stroke-miterlimit: 10; stroke-width: 20px;"/>
        <line id="catch-line" x1="0" y1="384.7" x2="771" y2="384.7" style="fill: none; stroke: #060807; stroke-miterlimit: 10; stroke-width: 21px;"/>
        <circle cx="385.9" cy="385.5" r="210" style="fill: #edcc1d; stroke: #060807; stroke-miterlimit: 10; stroke-width: 20px;"/>
        <image id="catch-img" width="475" height="475" transform="translate(245.8 244.9) scale(.6)" href="${mainPokeImgUrl}"/>
        <text transform="translate(220.9 116.2)" class="c-catch__text"><tspan x="0" y="0">You catched</tspan></text>
        <text transform="translate(220.4 678.2)" class="c-catch__text"><tspan x="0" y="0">${mainPokeNameUrl} !</tspan></text>
        </svg>
        `;

    } catch (error) {
        console.log(error);
    }
};
fetchPokeDefault(pokePop);

// pre & next poke function
function randomPoke() {
    let pokePop = Math.round(Math.random() * 200) + 1;
    fetchPokeDefault(pokePop);
};

// catch poke function
async function catchPoke() {
    pokeCatch.classList.toggle('d-none');
    setTimeout(
        function () {
            location.reload();
        }, 2000
    );
};

// 20 poke function
async function eachPoke_20Pokes(pokeId) {
    try {
        // use ditto for default
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
        if (!res.ok) {
            throw new Error('oh no!');
        };
        console.log('works!');
        const data = await res.json();
        // set url
        poke20ImgUrl = data.sprites.front_default;
        poke20NameUrl = data.name;

        // push into array
        pokeList.push([poke20ImgUrl, poke20NameUrl]);

    } catch (error) {
        console.log('error in each poke' + error);
    }
};

async function poke20Join() {
    try {
        for (i = 0; i < 20; i++) {
            pokePop = pokePop + 1;
            await eachPoke_20Pokes(pokePop);
            // make div
            const createDiv = document.createElement('div');
            const createP = document.createElement('p');
            const createImg = document.createElement('img');
            // text for P
            const textnode = document.createTextNode(poke20NameUrl);
            // url for img
            createImg.setAttribute('src', poke20ImgUrl);
            // set div class
            createDiv.classList.add('col-md-2', 'col-6', 'nes-container', 'is-rounded', 'd-flex', 'flex-column', 'align-items-center', 'm-2');
            // append elements
            createP.appendChild(textnode);
            createDiv.appendChild(createImg);
            createDiv.appendChild(createP);
            // final push to front
            poke20Show.appendChild(createDiv);
        }
        console.log(pokeList);

    } catch (error) {
        console.log('error in poke20Join' + error);
    }
}