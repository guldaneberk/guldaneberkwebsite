// Telefonda menüyü açıp kapatır.
(function () {
  var dugme = document.querySelector(".menu-dugme");
  var menu = document.getElementById("menu");
  if (!dugme || !menu) return;
  dugme.addEventListener("click", function () {
    var acik = menu.classList.toggle("acik");
    dugme.setAttribute("aria-expanded", acik ? "true" : "false");
  });
  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      menu.classList.remove("acik");
      dugme.setAttribute("aria-expanded", "false");
    }
  });
})();
