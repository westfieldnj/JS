import { getVenue, showVenue } from "https://d1p5cqqchvbqmy.cloudfront.net/websdk/v4.0.8/esm/renderer/index.js";

async function init() {
  const venue = await getVenue({
    venue: "mappedin-demo-mall",
    clientId: "5eab30aa91b055001a68e996",
    clientSecret: "RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1",
  });
  const mapView = await showVenue(
    document.getElementById("mappedin-map"),
    venue
  );
}
document.addEventListener("DOMContentLoaded", init);