var height = document.getElementById('wrap-month-story');
var heightCS = window.getComputedStyle(height).height;

if (heightCS != "406px") {
document.getElementById("home-cards").style.marginTop = heightCS
}