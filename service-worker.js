self.addEventListener("install", function(event) {
  console.log("Service worker instalado.");
});

self.addEventListener("fetch", function(event) {
  // Dejar que todo vaya a la red sin cache
});
