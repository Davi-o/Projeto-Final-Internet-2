$(document).ready(function () {
    $('.modal').modal();
    $('.carousel').carousel();
    $('.sidenav').sidenav();
  });

  function smoothScrollBegin() {
    var element = document.getElementById("inicio");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function smoothScrollRegion() {
    var element = document.getElementById("regioes");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function smoothScrollContact() {
    var element = document.getElementById("contato");
    element.scrollIntoView({ behavior: "smooth", block: "end" });
  }