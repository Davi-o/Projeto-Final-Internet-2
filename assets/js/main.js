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
  function shop1(){
    let shop1 = document.getElementById("shop1");
    let shop2 = document.getElementById("shop2");
    let shop3 = document.getElementById("shop3");

    shop2.style.display = "none";
    shop3.style.display = "none";
  }