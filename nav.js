function mobile_nav() {
    var x = document.getElementById("mobile-view");
    var y = document.getElementById("desktop-nav");
    if (screen.width < 848) {
      x.style.display = "flex";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "flex";
    }
  }