console.log('pojacaj zvuk');
// uzima logo
// ako je logo na toj stranici, program uzima njegov izvor koji je isti kao u json file-u
let logo = document.querySelector('.lnXdpd');
if(logo !== null) {
    logo.src = chrome.runtime.getURL('icons/logo128.png');
    logo.srcset = chrome.runtime.getURL('icons/logo128.png');
}

let logo_novi = document.querySelector("#logo > img");
if(logo_novi !== null) {
    logo_novi.src = chrome.runtime.getURL('images/logo1.png');
    logo_novi.srcset = chrome.runtime.getURL('images/logo1.png');
}

document.title = 'Healthy Google';

window.addEventListener("keydown", () => {
    var audio = new Audio(chrome.runtime.getURL("audio/audio.mp3"));
    audio.play();
})