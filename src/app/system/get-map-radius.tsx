export function getMapRadius(map: google.maps.Map) {
  const bounds = map.getBounds();
  if (!bounds) return null;

  // computeDistanceBetween returns meters
  const nsRadius = google.maps.geometry.spherical.computeDistanceBetween(
    bounds.getCenter(),
    new google.maps.LatLng(
      bounds.getNorthEast().lat(),
      bounds.getCenter().lng()
    )
  );
  const ewRadius = google.maps.geometry.spherical.computeDistanceBetween(
    bounds.getCenter(),
    new google.maps.LatLng(
      bounds.getCenter().lat(),
      bounds.getNorthEast().lng()
    )
  );

  const radius = nsRadius <= ewRadius ? nsRadius : ewRadius;
  return Number(radius.toFixed(2));
}
