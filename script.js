// know more about me
function myAbout(x) {
    location.href = "#about_me";
}

function onHover(x) {
    x.style.backgroundColor = "#5b5858";
    x.style.borderColor = "#5b5858";
    x.style.color = "#ff8800";
    x.style.fontFamily = "'Times New Roman', Times, serif";
    x.style.fontSize = "27.5px";
}

function notHover(x) {
    x.style.fontSize = "25px";
    x.style.fontFamily = "monospace";
    x.style.backgroundColor = "#014638";
    x.style.border = "1px solid #014638;"
    x.style.borderRadius = "25px";
    x.style.textDecoration = "none";
    x.style.color = "#fff";
    x.style.padding = "7px 20px";
}


// justify content
let justifyContent = document.querySelectorAll(".justifyContent");
for (let i = 0; i < justifyContent.length; i++) {
    justifyContent[i].style.textAlign = "justify";
}