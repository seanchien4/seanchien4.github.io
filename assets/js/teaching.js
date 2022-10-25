function filterContent() {
  var user = document.getElementById("myDropdown").value;
  var contentA = document.getElementById("contentA");
  var contentB = document.getElementById("contentB");
  var contentC = document.getElementById("contentC");
  if(user=="A") {
      contentA.style.display="block";
      contentB.style.display="block";
      contentC.style.display="block";
  } else if (user=="B") {
      contentA.style.display="none";
      contentB.style.display="block";
      contentC.style.display="none";
  } else if (user=="C") {
      contentA.style.display="none";
      contentB.style.display="none";
      contentC.style.display="block";
  }
}