var list = document.getElementsByClassName('.listEl');
var i;

console.log(list);

for (i = 0; i < list.length; i++) {
    list[i].innerHTML.addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
    //   var newL = document.querySelector('.newL')
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      /* Toggle between hiding and showing the active panel */
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    })
}