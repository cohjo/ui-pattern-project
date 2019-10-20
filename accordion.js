console.log(2);
var list = document.getElementsByClassName('listEl');
var all = document.getElementsByClassName('newL');
var i;

for (i = 0; i < list.length; i++) {
    list[i].innerHTML.addEventListener("click", function() {
      
      this.classList.toggle("active");

      var panel = all[i];
      if (panel.style.display === "none") {
        panel.style.display = "block";
      } else {
        panel.style.display = "none";
      }
    })
}