
setInterval(() => {
  const date = new Date();
  let hour = date.getHours();
  if (hour >= 12) {
    hour = hour - 12;
  }
  let minute = date.getMinutes();
  let second = date.getSeconds();

  let hh = document.getElementById("hours");
  let mm = document.getElementById("minutes");
  let ss = document.getElementById("seconds");

  hh.style.transform = `rotate(${hour * 30 + minute / 2}deg)`;
  mm.style.transform = `rotate(${minute * 6 + second / 10}deg)`;
  ss.style.transform = `rotate(${second * 6}deg)`;
}, 1000);
