
function Provincia(id, name, full_name, latitude, longitude, display_order) {
  this.id = id;
  this.name = name;
  this.full_name = full_name;
  this.latitude = latitude;
  this.longitude = longitude;
  this.display_order = display_order;
}

let provincias = [
  new Provincia(1, "Chaco Provincia", "Provincia de Chaco", -24.895086288452148, -59.93218994140625, 100),
  new Provincia(2, "Buenos Aires Provincia", "Provincia de Buenos Aires", -36.6769, -60.5586, 101),
  new Provincia(3, "Córdoba Provincia", "Provincia de Córdoba", -32.1429, -63.8018, 102),
  new Provincia(4, "Santa Fe Provincia", "Provincia de Santa Fe", -31.6107, -60.6973, 103),
  new Provincia(5, "Mendoza Provincia", "Provincia de Mendoza", -32.8895, -68.8458, 104)
];

export { provincias };