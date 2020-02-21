const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('.papan-skor');

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];

    if (tRandom == tanahSebelumnya) {
        randomTanah(tanah)
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function showRatEasy() {
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(500, 1500);
    tRandom.classList.add('muncul');
    setTimeout(() => {
        tRandom.classList.remove('muncul')
        if (!selesai) {
            showRatEasy();
        }
    }, wRandom);
}

function showRatMedium() {
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(500, 1000);
    tRandom.classList.add('muncul');
    setTimeout(() => {
        tRandom.classList.remove('muncul')
        if (!selesai) {
            showRatMedium();
        }
    }, wRandom);
}

function showRatExtreme() {
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(200, 800);
    tRandom.classList.add('muncul');
    setTimeout(() => {
        tRandom.classList.remove('muncul')
        if (!selesai) {
            showRatExtreme();
        }
    }, wRandom);
}

function easy() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    showRatEasy();
    setTimeout(() => {
        selesai = true;
    }, 20000);
}

function medium() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    showRatMedium();
    setTimeout(() => {
        selesai = true;
    }, 20000);
}

function extreme() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    showRatExtreme();
    setTimeout(() => {
        selesai = true;
    }, 20000);
}

function pukul() {
    skor++;
    papanSkor.textContent = skor;
    this.parentNode.classList.remove('muncul')
}

tikus.forEach(t => {
    t.addEventListener('click', pukul)
});