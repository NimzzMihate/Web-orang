function munculkanSurprise() {
    document.getElementById("customPopup").style.display = "flex";
    document.getElementById("GATAU").innerHTML = "CUMAN BISA NGASI INI NJIR SORRY YAK :)";
    document.getElementById("GATAU").style.color = "#ffb347";
}

function playMusic() {
    var musik = document.getElementById("music");
    musik.play();
}

function pauseMusic() {
    var musik = document.getElementById("music");
    musik.pause();
}

function tutupPopup() {
    document.getElementById("customPopup").style.display = "none";
}

function gantiLagu() {
    var select = document.getElementById("pilihLagu");
    var musik = document.getElementById("music");
    musik.src = select.value;
    musik.load();
}