const btn = document.querySelector(".btn");
const frameIP = document.querySelector(".IP-address");
const frameLocation = document.querySelector(".location");
const frameTimezone = document.querySelector(".timezone");
const frameIsp = document.querySelector(".isp");

async function getValue(event) {
  const inputCheck = document.querySelector("input");
  const valueIP = inputCheck.value;
  const url =
    "https://geo.ipify.org/api/v2/country?apiKey=at_mZbc9vfNxUQSFX1U9kEU2BdiGFaSH&ipAddress={}".replace(
      "{}",
      valueIP
    );
  const dataResponse = await fetch(url);
  const dataJson = await dataResponse.json();
  frameIP.innerText = dataJson.ip;
  frameLocation.innerText = dataJson.location.region;
  frameTimezone.innerText = dataJson.location.timezone;
  frameIsp.innerText = dataJson.isp;

  console.log(dataJson);
}
btn.addEventListener("click", getValue);

var map = L.map("map").setView([31.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup("A pretty CSS popup.<br> Easily customizable.")
  .openPopup();
