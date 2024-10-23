// consts
const comment = document.getElementById("comment");
const mainPokePanelPic = document.querySelector("img.pokeimgFrontPic");
const likePoke = document.getElementById('likePoke');

// the panel switch
const infoDetail = document.getElementById('infoDetail');
function on_off(){
    infoDetail.classList.toggle('d-none');
    mainPokePanelPic.classList.toggle('d-none');
}

function likeThePoke(){
    const createI = document.createElement('i');
    createI.classList.add('nes-icon', 'heart', 'c-like__i', 'animate__animated', 'animate__bounce', 'animate__repeat-2');
    likePoke.appendChild(createI);
}