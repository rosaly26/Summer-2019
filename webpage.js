function openImage() {
  // window.alert("ABCDEF");
  var img= document.getElementById('lol');
  var img1= document.getElementById('lol1');
  img.style.display="block";
  img1.style.display="block";
  document.getElementById("lol2").innerHTML = "Hide this image.";
}

function hide() {
  window.alert("hide");
  var img= document.getElementById('lol');
  var img1= document.getElementById('lol1');
  img.style.display="none";
  img1.style.display="none";
  document.getElementById("lol2").innerHTML = "Show this image.";
}

function toggleImg() {
  if(document.getElementById("lol2").innerHTML == "Show this image.") {
    openImage();
  }
  else {
      hide();
  }
}

function expand() {
  var zoom= document.ElementbyId("zoom");
  zoom("lol") height="300px"
}

function unexpand() {
  var zoom= document.ElementbyId("zoom");
  zoom("lol") height="200px"
}
