function btn(){
  window.open("https://g.co/kgs/bWKZZb");
}
function btn2(){
  window.open("https://instagram.com/jb_wall_paintings?igshid=YmMyMTA2M2Y=");
}
function validateForm() {
  let x = document.forms["sheetdb-form"].value;
  if (x == "") {
    alert("Form must be filled out");
    return false;
  }else{
    window.location.href="thx.html";
  }
}
