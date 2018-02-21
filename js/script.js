const brakeChain = () => {
  const chain = document.getElementById('chain');
  chain.innerHTML = "&#xf0c1;"

  setTimeout(() => chain.innerHTML = "&#xf127;", 1000);
}

brakeChain();
setInterval(brakeChain, 2000);

const changeIcon = (icon, type, time) => setTimeout(() => icon.innerHTML = type, time);

const chargeBattery = () => {
  const battery = document.getElementById('battery');
  battery.innerHTML = "&#xf244;"

  changeIcon(battery, "&#xf243;", 1000);
  changeIcon(battery, "&#xf242;", 2000);
  changeIcon(battery, "&#xf241;", 3000);
  changeIcon(battery, "&#xf240;", 4000);
}

chargeBattery();
setInterval(chargeBattery, 5000);

const hourglassTip = () => {
  const hourglass = document.getElementById('hourglass');
  hourglass.innerHTML = "&#xf251;"

  changeIcon(hourglass, "&#xf252;", 1000);
  changeIcon(hourglass, "&#xf253;", 2000);
}

hourglassTip();
setInterval(hourglassTip, 3000);
