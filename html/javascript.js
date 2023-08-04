// JavaScript for handling the sidebar and content visibility

function op() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.display === "block") {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "block";
  }
}
function op10() {
  var sidebar = document.getElementById("nbar");
  if (sidebar.style.height === "max-content") {
    sidebar.style.height = "40px";
  document.getElementById("nav").style.display = "none";

  } else {
    sidebar.style.height = "max-content";
  document.getElementById("nav").style.display = "block";

  }
}
function op11() {
  var sidebar = document.getElementById("nbar");
  if (sidebar.style.height === "max-content") {
    sidebar.style.height = "40px";
  document.getElementById("nav").style.display = "none";
  document.getElementById("video").style.marginTop="110px";
  } else {
    sidebar.style.height = "max-content";
    document.getElementById("video").style.marginTop="350px";

  document.getElementById("nav").style.display = "block";

  }
}
function foodOpen() {
  document.getElementById("top_bar_food").style.display = "block";
  document.getElementById("top_bar_toy").style.display = "none";
  document.getElementById("top_bar_items").style.display = "none";
  document.getElementById("dog_food").style.display = "block";
  document.getElementById("dog_toy").style.display = "none";
  document.getElementById("dog_items").style.display = "none";
  var sidebar = document.getElementById("sidebar");
  sidebar.style.display = "none";

}

function toyOpen() {
  document.getElementById("top_bar_food").style.display = "none";
  document.getElementById("top_bar_toy").style.display = "block";
  document.getElementById("top_bar_items").style.display = "none";
  document.getElementById("dog_food").style.display = "none";
  document.getElementById("dog_toy").style.display = "block";
  document.getElementById("dog_items").style.display = "none";
  var sidebar = document.getElementById("sidebar");
  sidebar.style.display = "none";
}

function itemsOpen() {
  document.getElementById("top_bar_food").style.display = "none";
  document.getElementById("top_bar_toy").style.display = "none";
  document.getElementById("top_bar_items").style.display = "block";
  document.getElementById("dog_food").style.display = "none";
  document.getElementById("dog_toy").style.display = "none";
  document.getElementById("dog_items").style.display = "block";
  var sidebar = document.getElementById("sidebar");
  sidebar.style.display = "none";
}
/*------------------------------------------------------------------------------------------------------- */
function dogFood(){
  document.getElementById("dog_food").style.display = "block";
  document.getElementById("dog_toy").style.display = "none";
  document.getElementById("dog_items").style.display = "none";
  document.getElementById("cat_food").style.display = "none";
  document.getElementById("cat_toy").style.display = "none";
  document.getElementById("cat_items").style.display = "none";
  document.getElementById("brid_food").style.display = "none";
  document.getElementById("brid_toy").style.display = "none";
  document.getElementById("brid_items").style.display = "none";
  document.getElementById("fish_food").style.display = "none";
  document.getElementById("fish_toy").style.display = "none";
  document.getElementById("fish_items").style.display = "none";
  document.getElementById("rabbit_food").style.display = "none";
  document.getElementById("rabbit_toy").style.display = "none";
  document.getElementById("rabbit_items").style.display = "none";
}
function dogToy(){
  document.getElementById("dog_food").style.display = "none";
  document.getElementById("dog_toy").style.display = "block";
  document.getElementById("dog_items").style.display = "none";
  document.getElementById("cat_food").style.display = "none";
  document.getElementById("cat_toy").style.display = "none";
  document.getElementById("cat_items").style.display = "none";
  document.getElementById("brid_food").style.display = "none";
  document.getElementById("brid_toy").style.display = "none";
  document.getElementById("brid_items").style.display = "none";
  document.getElementById("fish_food").style.display = "none";
  document.getElementById("fish_toy").style.display = "none";
  document.getElementById("fish_items").style.display = "none";
  document.getElementById("rabbit_food").style.display = "none";
  document.getElementById("rabbit_toy").style.display = "none";
  document.getElementById("rabbit_items").style.display = "none";
}
function dogItems(){
  document.getElementById("dog_food").style.display = "none";
  document.getElementById("dog_toy").style.display = "none";
  document.getElementById("dog_items").style.display = "block";
  document.getElementById("cat_food").style.display = "none";
  document.getElementById("cat_toy").style.display = "none";
  document.getElementById("cat_items").style.display = "none";
  document.getElementById("brid_food").style.display = "none";
  document.getElementById("brid_toy").style.display = "none";
  document.getElementById("brid_items").style.display = "none";
  document.getElementById("fish_food").style.display = "none";
  document.getElementById("fish_toy").style.display = "none";
  document.getElementById("fish_items").style.display = "none";
  document.getElementById("rabbit_food").style.display = "none";
  document.getElementById("rabbit_toy").style.display = "none";
  document.getElementById("rabbit_items").style.display = "none";
}
function catFood(){
  document.getElementById("dog_food").style.display = "none";
  document.getElementById("dog_toy").style.display = "none";
  document.getElementById("dog_items").style.display = "none";
  document.getElementById("cat_food").style.display = "block";
  document.getElementById("cat_toy").style.display = "none";
  document.getElementById("cat_items").style.display = "none";
  document.getElementById("brid_food").style.display = "none";
  document.getElementById("brid_toy").style.display = "none";
  document.getElementById("brid_items").style.display = "none";
  document.getElementById("fish_food").style.display = "none";
  document.getElementById("fish_toy").style.display = "none";
  document.getElementById("fish_items").style.display = "none";
  document.getElementById("rabbit_food").style.display = "none";
  document.getElementById("rabbit_toy").style.display = "none";
  document.getElementById("rabbit_items").style.display = "none";
}
function catToy(){
  document.getElementById("dog_food").style.display = "none";
  document.getElementById("dog_toy").style.display = "none";
  document.getElementById("dog_items").style.display = "none";
  document.getElementById("cat_food").style.display = "none";
  document.getElementById("cat_toy").style.display = "block";
  document.getElementById("cat_items").style.display = "none";
  document.getElementById("brid_food").style.display = "none";
  document.getElementById("brid_toy").style.display = "none";
  document.getElementById("brid_items").style.display = "none";
  document.getElementById("fish_food").style.display = "none";
  document.getElementById("fish_toy").style.display = "none";
  document.getElementById("fish_items").style.display = "none";
  document.getElementById("rabbit_food").style.display = "none";
  document.getElementById("rabbit_toy").style.display = "none";
  document.getElementById("rabbit_items").style.display = "none";
}
function catItems(){
  document.getElementById("dog_food").style.display = "none";
  document.getElementById("dog_toy").style.display = "none";
  document.getElementById("dog_items").style.display = "none";
  document.getElementById("cat_food").style.display = "none";
  document.getElementById("cat_toy").style.display = "none";
  document.getElementById("cat_items").style.display = "block";
  document.getElementById("brid_food").style.display = "none";
  document.getElementById("brid_toy").style.display = "none";
  document.getElementById("brid_items").style.display = "none";
  document.getElementById("fish_food").style.display = "none";
  document.getElementById("fish_toy").style.display = "none";
  document.getElementById("fish_items").style.display = "none";
  document.getElementById("rabbit_food").style.display = "none";
  document.getElementById("rabbit_toy").style.display = "none";
  document.getElementById("rabbit_items").style.display = "none";
}
function birdFood(){
  document.getElementById("dog_food").style.display = "none";
  document.getElementById("dog_toy").style.display = "none";
  document.getElementById("dog_items").style.display = "none";
  document.getElementById("cat_food").style.display = "none";
  document.getElementById("cat_toy").style.display = "none";
  document.getElementById("cat_items").style.display = "none";
  document.getElementById("brid_food").style.display = "block";
  document.getElementById("brid_toy").style.display = "none";
  document.getElementById("brid_items").style.display = "none";
  document.getElementById("fish_food").style.display = "none";
  document.getElementById("fish_toy").style.display = "none";
  document.getElementById("fish_items").style.display = "none";
  document.getElementById("rabbit_food").style.display = "none";
  document.getElementById("rabbit_toy").style.display = "none";
  document.getElementById("rabbit_items").style.display = "none";
}
function birdToy(){
  document.getElementById("dog_food").style.display = "none";
  document.getElementById("dog_toy").style.display = "none";
  document.getElementById("dog_items").style.display = "none";
  document.getElementById("cat_food").style.display = "none";
  document.getElementById("cat_toy").style.display = "none";
  document.getElementById("cat_items").style.display = "none";
  document.getElementById("brid_food").style.display = "none";
  document.getElementById("brid_toy").style.display = "block";
  document.getElementById("brid_items").style.display = "none";
  document.getElementById("fish_food").style.display = "none";
  document.getElementById("fish_toy").style.display = "none";
  document.getElementById("fish_items").style.display = "none";
  document.getElementById("rabbit_food").style.display = "none";
  document.getElementById("rabbit_toy").style.display = "none";
  document.getElementById("rabbit_items").style.display = "none";
}
function birdItems(){
  document.getElementById("dog_food").style.display = "none";
  document.getElementById("dog_toy").style.display = "none";
  document.getElementById("dog_items").style.display = "none";
  document.getElementById("cat_food").style.display = "none";
  document.getElementById("cat_toy").style.display = "none";
  document.getElementById("cat_items").style.display = "none";
  document.getElementById("brid_food").style.display = "none";
  document.getElementById("brid_toy").style.display = "none";
  document.getElementById("brid_items").style.display = "block";
  document.getElementById("fish_food").style.display = "none";
  document.getElementById("fish_toy").style.display = "none";
  document.getElementById("fish_items").style.display = "none";
  document.getElementById("rabbit_food").style.display = "none";
  document.getElementById("rabbit_toy").style.display = "none";
  document.getElementById("rabbit_items").style.display = "none";
}
function fishFood(){
  document.getElementById("dog_food").style.display = "none";
  document.getElementById("dog_toy").style.display = "none";
  document.getElementById("dog_items").style.display = "none";
  document.getElementById("cat_food").style.display = "none";
  document.getElementById("cat_toy").style.display = "none";
  document.getElementById("cat_items").style.display = "none";
  document.getElementById("brid_food").style.display = "none";
  document.getElementById("brid_toy").style.display = "none";
  document.getElementById("brid_items").style.display = "none";
  document.getElementById("fish_food").style.display = "block";
  document.getElementById("fish_toy").style.display = "none";
  document.getElementById("fish_items").style.display = "none";
  document.getElementById("rabbit_food").style.display = "none";
  document.getElementById("rabbit_toy").style.display = "none";
  document.getElementById("rabbit_items").style.display = "none";
}
function fishToy(){
  document.getElementById("dog_food").style.display = "none";
  document.getElementById("dog_toy").style.display = "none";
  document.getElementById("dog_items").style.display = "none";
  document.getElementById("cat_food").style.display = "none";
  document.getElementById("cat_toy").style.display = "none";
  document.getElementById("cat_items").style.display = "none";
  document.getElementById("brid_food").style.display = "none";
  document.getElementById("brid_toy").style.display = "none";
  document.getElementById("brid_items").style.display = "none";
  document.getElementById("fish_food").style.display = "none";
  document.getElementById("fish_toy").style.display = "block";
  document.getElementById("fish_items").style.display = "none";
  document.getElementById("rabbit_food").style.display = "none";
  document.getElementById("rabbit_toy").style.display = "none";
  document.getElementById("rabbit_items").style.display = "none";
}
function fishItems(){
  document.getElementById("dog_food").style.display = "none";
  document.getElementById("dog_toy").style.display = "none";
  document.getElementById("dog_items").style.display = "none";
  document.getElementById("cat_food").style.display = "none";
  document.getElementById("cat_toy").style.display = "none";
  document.getElementById("cat_items").style.display = "none";
  document.getElementById("brid_food").style.display = "none";
  document.getElementById("brid_toy").style.display = "none";
  document.getElementById("brid_items").style.display = "none";
  document.getElementById("fish_food").style.display = "none";
  document.getElementById("fish_toy").style.display = "none";
  document.getElementById("fish_items").style.display = "block";
  document.getElementById("rabbit_food").style.display = "none";
  document.getElementById("rabbit_toy").style.display = "none";
  document.getElementById("rabbit_items").style.display = "none";
}
function rabbitFood(){
  document.getElementById("dog_food").style.display = "none";
  document.getElementById("dog_toy").style.display = "none";
  document.getElementById("dog_items").style.display = "none";
  document.getElementById("cat_food").style.display = "none";
  document.getElementById("cat_toy").style.display = "none";
  document.getElementById("cat_items").style.display = "none";
  document.getElementById("brid_food").style.display = "none";
  document.getElementById("brid_toy").style.display = "none";
  document.getElementById("brid_items").style.display = "none";
  document.getElementById("fish_food").style.display = "none";
  document.getElementById("fish_toy").style.display = "none";
  document.getElementById("fish_items").style.display = "none";
  document.getElementById("rabbit_food").style.display = "block";
  document.getElementById("rabbit_toy").style.display = "none";
  document.getElementById("rabbit_items").style.display = "none";
}
function rabbitToy(){
  document.getElementById("dog_food").style.display = "none";
  document.getElementById("dog_toy").style.display = "none";
  document.getElementById("dog_items").style.display = "none";
  document.getElementById("cat_food").style.display = "none";
  document.getElementById("cat_toy").style.display = "none";
  document.getElementById("cat_items").style.display = "none";
  document.getElementById("brid_food").style.display = "none";
  document.getElementById("brid_toy").style.display = "none";
  document.getElementById("brid_items").style.display = "none";
  document.getElementById("fish_food").style.display = "none";
  document.getElementById("fish_toy").style.display = "none";
  document.getElementById("fish_items").style.display = "none";
  document.getElementById("rabbit_food").style.display = "none";
  document.getElementById("rabbit_toy").style.display = "block";
  document.getElementById("rabbit_items").style.display = "none";
}
function rabbitItems(){
  document.getElementById("dog_food").style.display = "none";
  document.getElementById("dog_toy").style.display = "none";
  document.getElementById("dog_items").style.display = "none";
  document.getElementById("cat_food").style.display = "none";
  document.getElementById("cat_toy").style.display = "none";
  document.getElementById("cat_items").style.display = "none";
  document.getElementById("brid_food").style.display = "none";
  document.getElementById("brid_toy").style.display = "none";
  document.getElementById("brid_items").style.display = "none";
  document.getElementById("fish_food").style.display = "none";
  document.getElementById("fish_toy").style.display = "none";
  document.getElementById("fish_items").style.display = "none";
  document.getElementById("rabbit_food").style.display = "none";
  document.getElementById("rabbit_toy").style.display = "none";
  document.getElementById("rabbit_items").style.display = "block";
}