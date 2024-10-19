// const 
const socialIcon = document.getElementById('socialIcon');
const contactInfo = document.getElementById('contactInfo');
// social icon object
let socialIconObject = {
    facebook: '<a href="https://www.facebook.com/BroccoliDesigner"><i class="nes-icon facebook is-large"></i></a>',
    instagram: '<a href="https://www.instagram.com/ycdottawa/"><i class="nes-icon instagram is-large"></i></a>',
    gmail: '<a href="mailto:canadabroccoli@gmail.com"><i class="nes-icon gmail is-large"></i></a>',
    linkedin: '<a href="https://www.linkedin.com/in/broccolidesign/"><i class="nes-icon linkedin is-large"></i></a>'
}

let contactObject = {
    Email: '<a href="mailto:chen0969@algonquinlive.com">chen0969@algonquinlive.com</a>',
    Phone: '<a href="tel:+13439884869">343-988-4869</a>',
    Portfolio: '<a href="https://broccoli-design.great-site.net">https://broccoli-design.great-site.net</a>'
}
// function
function deployIcons() {
    for (let value in socialIconObject) {
        const createDiv = document.createElement('div');
        createDiv.classList.add('col-2');
        createDiv.innerHTML += socialIconObject[value];

        socialIcon.appendChild(createDiv);
    }
}

function depolyContact(){
    Object.entries(contactObject).forEach(([key, value]) => {
        contactInfo.innerHTML += `<div class="col-12 nes-balloon from-left nes-pointer">${key}: ${value}</div>`;
    });
}

deployIcons();
depolyContact();


// bg functions
const bg = document.getElementById('bg');
// svgs
bg.innerHTML = `
<svg class="o-svg animate__animated animate__zoomIn">
  <circle class="o-svg__bgCircleG" cx="100vw" cy="0" r="288"/>
  <circle class="o-svg__bgCircleR" cx="0" cy="150vh" r="730"/>
</svg>
`;