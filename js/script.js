const brakeChain = () => {
  const chain = document.getElementById('chain');
  chain.innerHTML = "&#xf0c1;"

  setTimeout(() => chain.innerHTML = "&#xf127;", 1000);
}

brakeChain();
setInterval(brakeChain, 2000);

const chargeBattery = () => {
  const battery = document.getElementById('battery');
  battery.innerHTML = "&#xf244;"

  const changeIcon = (icon, time) => setTimeout(() => battery.innerHTML = icon, time);

  changeIcon("&#xf243;",1000);
  changeIcon("&#xf242;",2000);
  changeIcon("&#xf241;",3000);
  changeIcon("&#xf240;",4000);
}

chargeBattery();
setInterval(chargeBattery, 5000);

const hourglassTip = () => {
  const hourglass = document.getElementById('hourglass');
  hourglass.innerHTML = "&#xf251;"

  const changeIcon = (icon, time) => setTimeout(() => hourglass.innerHTML = icon, time);

  changeIcon("&#xf252;",1000);
  changeIcon("&#xf253;",2000);
}

hourglassTip();
setInterval(hourglassTip, 3000);
