
// const
const handCursor = document.getElementById('cursor');
const bg = document.getElementById('bg');
const panel = document.getElementById('panel');
const pokeShadow = document.getElementById('pokeShadow');


// svgs
bg.innerHTML = `
<svg class="o-svg animate__animated animate__zoomIn">
  <circle class="o-svg__bgCircleG" cx="100vw" cy="0" r="288"/>
  <circle class="o-svg__bgCircleR" cx="0" cy="150vh" r="730"/>
</svg>
`;

panel.innerHTML = `
<svg class="o-svg" viewBox="0 0 1056.3 820.7">
  <g>
    <rect x="-7.3" y="730.2" width="207.9" height="181.8" rx="4.8" ry="4.8" transform="translate(369.1 40.5) rotate(26)" style="fill: #ffc995; stroke-width: 0px;"/>
    <path d="M99.8,814.7c31.8,15.5,59,35.6,80.2,58,2.3,2.4,6.3,1.8,7.7-1.2l39.5-81.1c1.1-2.4.2-5.2-2.2-6.4l-178.4-86.8c-2.4-1.1-5.2-.2-6.4,2.2L.8,780.6c-1.5,3,.5,6.5,3.9,6.8,30.7,2.9,63.3,11.8,95.1,27.3Z" style="fill: #faa992; stroke-width: 0px;"/>
  </g>
  <rect x="264.8" y="413.3" width="79.7" height="179.2" rx="12" ry="12" transform="translate(805.8 195.5) rotate(89.7)" style="fill: #ffc995; stroke-width: 0px;"/>
  <rect x="274.6" y="493.3" width="79.7" height="179.2" rx="12" ry="12" transform="translate(895.5 265.2) rotate(89.7)" style="fill: #ffc995; stroke-width: 0px;"/>
  <rect x="254.4" y="573.1" width="79.7" height="179.2" rx="12" ry="12" transform="translate(955.2 364.7) rotate(89.7)" style="fill: #ffc995; stroke-width: 0px;"/>
  <rect x="233.2" y="652.8" width="79.7" height="179.2" rx="12" ry="12" transform="translate(1013.9 465.2) rotate(89.7)" style="fill: #ffc995; stroke-width: 0px;"/>
  <path d="M124.4,445.6c-3.7-2.8-14.9-4.6-22.2-5-2.5-.1-4.7,1.7-5,4.3-4.9,52.3-27.5,99.6-43.1,149.4-.7,2.4-1.5,4.8-2.1,7.2-.6,2.3.4,4.6,2.5,5.6,15.9,7.5,34.3,12.1,54.1,12.8,63.1,2.1,115.7-36.4,117.3-86,1.7-49.7-43.9-44-101.6-88.2Z" style="fill: #faa992; stroke-width: 0px;"/>
  <path d="M20.8,485.5h292.3c7.3,0,13.3,6,13.3,13.3v235.8c0,14.8-12,26.9-26.9,26.9H79.4c-39.7,0-72-32.2-72-72v-190.7c0-7.3,6-13.3,13.3-13.3Z" transform="translate(789.4 453.1) rotate(89.7)" style="fill: #faa992; stroke-width: 0px;"/>
  <rect x="153.3" y="31" width="903" height="699" rx="30" ry="30" style="fill: #21401f; stroke-width: 0px;"/>
  <rect x="125.3" width="903" height="699" rx="30" ry="30" style="fill: #87be5b; stroke-width: 0px;"/>
  <rect id="panel_screen" x="152.4" y="31" width="848.8" height="600" rx="34" ry="34" style="fill: #fff; stroke-width: 0px;"/>
  <rect x="984.3" y="120" width="59" height="237" style="fill: #d8ef09; stroke-width: 0px;"/>
  <ellipse cx="1013.8" cy="356.5" rx="29.5" ry="8.5" style="fill: #adc3c8; stroke-width: 0px;"/>
  <ellipse cx="1013.8" cy="119.5" rx="29.5" ry="8.5" style="fill: #d8ef09; stroke-width: 0px;"/>
  <g id="onOff" onclick="on_off()">
    <rect x="912.3" y="648" width="75" height="38" rx="5" ry="5" style="fill: #faa992; stroke-width: 0px;"/>
    <rect x="909.3" y="645" width="75" height="38" rx="5" ry="5" style="fill: #fdf0e5; stroke-width: 0px;"/>
    <path d="M946.3,655c5,0,9,4,9,9s-4,9-9,9-9-4-9-9,4-9,9-9M946.3,651c-7.2,0-13,5.8-13,13s5.8,13,13,13,13-5.8,13-13-5.8-13-13-13h0Z" style="fill: #21401f; stroke-width: 0px;"/>
  </g>
  <g id="next" onclick="randomPoke()">
    <rect x="788.3" y="648" width="75" height="38" rx="5" ry="5" style="fill: #faa992; stroke-width: 0px;"/>
    <rect x="785.3" y="645.3" width="75" height="38" rx="5" ry="5" style="fill: #fdf0e5; stroke-width: 0px;"/>
    <polygon points="833.2 663.8 815.4 653.5 815.4 674 833.2 663.8" style="fill: #21401f; stroke-width: 0px;"/>
  </g>
  <g id="previous" onclick="randomPoke()">
    <rect x="186.3" y="648" width="75" height="38" rx="5" ry="5" transform="translate(447.6 1334) rotate(180)" style="fill: #faa992; stroke-width: 0px;"/>
    <rect x="183.3" y="645.3" width="75" height="38" rx="5" ry="5" transform="translate(441.6 1328.5) rotate(180)" style="fill: #fdf0e5; stroke-width: 0px;"/>
    <polygon points="210.4 664.8 228.2 675 228.2 654.5 210.4 664.8" style="fill: #21401f; stroke-width: 0px;"/>
  </g>
  <g id="catch" onclick="catchPoke()">
    <rect x="473" y="648.3" width="136.3" height="38" rx="5" ry="5" style="fill: #faa992; stroke-width: 0px;"/>
    <rect x="470" y="645.3" width="136.3" height="38" rx="5" ry="5" style="fill: #fdf0e5; stroke-width: 0px;"/>
    <text transform="translate(482.8 674.2)" style="fill: #21401f; font-family: PressStart2P-Regular, &apos;Press Start 2P&apos;; font-size: 19.1px;"><tspan x="0" y="0">Catch!</tspan></text>
  </g>
  <g id="other" onclick="poke20Join()">
    <rect x="630" y="648.3" width="136.3" height="38" rx="5" ry="5" style="fill: #faa992; stroke-width: 0px;"/>
    <rect x="627" y="645.3" width="136.3" height="38" rx="5" ry="5" style="fill: #fdf0e5; stroke-width: 0px;"/>
    <text transform="translate(639.8 674.2)" style="fill: #21401f; font-family: PressStart2P-Regular, &apos;Press Start 2P&apos;; font-size: 19.1px;"><tspan x="0" y="0">Other!</tspan></text>
  </g>
  <g id="like" onclick="likeThePoke()">
    <rect x="314.3" y="648.3" width="136.3" height="38" rx="5" ry="5" style="fill: #faa992; stroke-width: 0px;"/>
    <rect x="311.3" y="645.3" width="136.3" height="38" rx="5" ry="5" style="fill: #fdf0e5; stroke-width: 0px;"/>
    <text transform="translate(324.1 674.2)" style="fill: #21401f; font-family: PressStart2P-Regular, &apos;Press Start 2P&apos;; font-size: 19.1px;"><tspan x="0" y="0">Like!</tspan></text>
  </g>
  <g>
    <path d="M93.2,314.2h0c-13.5-2.6-26.8,6.3-29.4,19.9l-33.3,171.7c-3.7,19.1,8.9,37.8,28,41.5l9.7,1.9c19.1,3.7,37.8-8.9,41.5-28l27.5-141.7c5.8-30-14-59.4-44-65.2Z" style="fill: #ffc995; stroke-width: 0px;"/>
    <g>
      <path d="M79,376.5c1.5-.6,2.6-1.9,2.9-3.5l1.9-9.6c2.3-12-3.6-23.6-13.6-29.3-2.8-1.6-6.4,0-7,3.1,0,0,0,0,0,0l-7.2,37.2c-.6,2.9,1.7,5.7,4.7,5.7,8,0,14.9-2.3,18.4-3.7Z" style="fill: #ffebd9; stroke-width: 0px;"/>
      <path d="M60.6,380.1c.2,0,.4,0,.6,0,4.7,0,6.4-6.4,2.3-8.8-.2-.1-.4-.2-.6-.3-2.8-1.6-6.3.1-6.9,3.3v.2c-.6,2.9,1.6,5.7,4.6,5.7Z" style="fill: #ffd9b6; stroke-width: 0px;"/>
    </g>
  </g>
</svg>
`;

pokeShadow.innerHTML = `
<svg class="o-svg">
  <ellipse class="o-svg__shadow" cx="50%" cy="50%" rx="50%" ry="25%"/>
</svg>
`;