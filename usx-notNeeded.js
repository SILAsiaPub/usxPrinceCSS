
var chaptcount = document.querySelectorAll("chapter").length;
for (i = 0; i < chaptcount; i++) {
  document.getElementsByTagName("chapter")[i].innerHTML = document.getElementsByTagName("chapter")[i].getAttribute("number");
}