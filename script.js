let zoomLevel = 1;

function zoomIn() {
  zoomLevel += 0.2;
  document.getElementById("campus-map").style.transform = `scale(${zoomLevel})`;
}
function zoomOut() {
  zoomLevel = Math.max(0.5, zoomLevel - 0.2);
  document.getElementById("campus-map").style.transform = `scale(${zoomLevel})`;
}

function showInfo(buildingName) {
  const infoBox = document.getElementById("info-box");
  document.getElementById("info-title").innerText = buildingName;
  document.getElementById("info-desc").innerText = "Description for " + buildingName;
  document.getElementById("info-img").src = "school.jpg"; 
  infoBox.style.display = "block";
}

function toggleChat() {
  const box = document.getElementById("chatbot-box");
  box.style.display = (box.style.display === "block") ? "none" : "block";
}

function filterMarkers(category) {
  alert("Filtering markers for " + category);
}

function openGallery() {
  alert("Open photo gallery here!");
}
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaHRhbjJrMDMiLCJhIjoiY21lazc5bmxlMDJyYTJscXZzMnZlcXV6YyJ9.uyF2wIya3o59CHzeG32KEw';

var map = new mapboxgl.Map({
  container: 'map', 
  style: 'mapbox://styles/mapbox/streets-v11', 
  center: [120.9842, 14.5995], 
  zoom: 16
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
  .setLngLat([120.9850, 14.6000]) 
  .setPopup(new mapboxgl.Popup().setHTML("<b>Library</b><br>The main library for students."))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([120.9835, 14.5985])
  .setPopup(new mapboxgl.Popup().setHTML("<b>Gymnasium</b><br>Sports and events facility."))
  .addTo(map);

const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.getElementById("toggleSidebar");
const openBtn = document.getElementById("openSidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("hidden");
  openBtn.style.display = "grid";
});

openBtn.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
  openBtn.style.display = "none";
});


