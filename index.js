const segPonteiro = document.querySelector('.seg-ponteiro');
const minPonteiro = document.querySelector('.min-ponteiro');
const horaPonteiro = document.querySelector('.hora-ponteiro');

function setDate() {
  const now = new Date();

  const segs = now.getSeconds();
  const segsDegrees = ((segs / 60) * 360) + 90;
  segPonteiro.style.transform = `rotate(${segsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((segs / 60) * 6) + 90;
  minPonteiro.style.transform = `rotate(${minsDegrees}deg)`;

  const hora = now.getHours();
  const horaDegrees = ((hora / 12) * 360) + ((mins / 60) * 30) + 90;
  horaPonteiro.style.transform = `rotate(${horaDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();
