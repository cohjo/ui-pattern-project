console.log(2);
var list = document.getElementsByClassName('listEl');
var all = document.getElementsByClassName('newL');
var i;
var panel;

for (i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function(e) {
    e.preventDefault();

    list[i].children.classList.toggle("show");
    // panel = list.children;
    // if (all.style.display === "none") {
    //   all.style.display = "block";
    //   all.style.overflow = "visible";
    // } else {
    //   all.style.display = "none";
    // }
  })
}