// Telefonda menüyü açıp kapatır; sayfa kayınca üst menüye hafif gölge verir.
(function () {
  var dugme = document.querySelector(".menu-dugme");
  var menu = document.getElementById("menu");
  var ust = document.querySelector(".ust");
  if (dugme && menu) {
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
  }
  if (ust) {
    var kontrol = function () { ust.classList.toggle("golgeli", window.scrollY > 8); };
    window.addEventListener("scroll", kontrol, { passive: true });
    kontrol();
  }
})();
