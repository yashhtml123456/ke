let map = L.map("map");
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
let n = document.getElementById("x");
n.addEventListener("click", () => {
  navigator.geolocation.watchPosition(
    (position) => {
      let x = position.coords.latitude;
      let y = position.coords.longitude;
      let ac = position.coords.accuracy;
      //   map work heree...................

      map.setView([x, y], 18);
      //   L.marker([x, y]).addTo(map).bindPopup("My Location");
      let m = L.marker([x, y]);
      m.addTo(map).bindPopup("point a");
      let c = L.circle([x, y], {
        radius: ac,
      });
      c.addTo(map);

      //   map code end heree.......
    },
    (error) => {
      let d = document.getElementById("k");
      d.innerText = error;
    },
  );
});

// let map = L.map("map");
// map.setView(
//  [28.9845,77.7064],
//  10
// );
// L.tileLayer(
// 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
// ).addTo(map);
