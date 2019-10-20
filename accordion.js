console.log(2);
var list = document.getElementsByClassName('listEl');
var all = document.getElementsByClassName('newL');
var i;

for (i = 0; i < list.length; i++) {
    list[i].innerHTML.addEventListener("click", function() {
      
      this.classList.toggle("active");

      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    })
}