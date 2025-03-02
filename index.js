/*
const padlOrel = Math.random() < 0.5;
const minceElm = document.querySelector('.mince')

if (padlOrel) {
document.querySelector('.vysledek').textContent = `Padl orel`;
minceElm.classList.add('mince--orel');

} else {
  document.querySelector('.vysledek').textContent = `Padla panna`;
  minceElm.classList.add('mince--panna');
}
*/

const vysledek = document.querySelector('.vysledek');
const mince = document.querySelector('.mince');

const padlOrel = Math.random() < 0.5;

if (padlOrel) {
    vysledek.textContent = 'Padl orel';
    mince.classList.add('mince--orel');
} else {
    vysledek.textContent = 'Padla panna';
    mince.classList.add('mince--panna');
}

