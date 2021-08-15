document.querySelector("#head").innerHTML += `<link rel="stylesheet" type="text/css" href="css/root.css">`;
document.querySelector("#head").innerHTML += `<link rel="stylesheet" type="text/css" href="css/header.css">`;
document.querySelector("#head").innerHTML += `<link rel="stylesheet" type="text/css" href="css/softkey.css">`;

//document.querySelector("#body").innerHTML += `<header><span>FrameworkJS r3</span></header>`;
document.querySelector("#body").innerHTML += `<style>.fm-header p{line-height: var(--header-height);background: var(--header-background);color: var(--color-gs00);font-weight: 300;padding: 0 1rem;text-align: center;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;margin: 0;text-transform: none;}</style>`;
document.querySelector("#body").innerHTML += `<div class="statusbar-placeholder"></div><header class="fm-header h1"><span>FrameworkJS r3</span></header>`;
document.querySelector("#body").innerHTML += `<footer class="softkey"><div id="softkey-left">Back</div><div id="softkey-center">RELOAD</div><div id="softkey-right">More</div></footer>`;
