const map = L.map('map')
  .setView({
    lat: 59.96827205073081,
    lng: 30.317363348303356,
  }, 30);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const pinIcon = L.icon({
  iconUrl: 'img/map/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  {
    lat: 59.96827205073081,
    lng: 30.317363348303356,
  },
  {
    icon: pinIcon,
  },
);

marker.addTo(map);
