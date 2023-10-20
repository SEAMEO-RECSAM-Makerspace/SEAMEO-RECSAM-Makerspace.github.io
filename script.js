// Modal Image Gallery
function onClick(element, event) {
  document.getElementById("modal01").style.display = "block";
  // var captionText = document.getElementById("caption");
  // captionText.innerHTML = element.alt;
  fetch(`include/projects/${event}.html`)
      .then(response => {
          if (!response.ok) {
              throw new Error(`Looks like there was a problem. Status Code: ${response.status}`);
          }
          return response.text();
      })
      .then(data => {
          document.getElementById('caption').innerHTML = data;
      })
      .catch(error => {
          console.log('Looks like we hit a snag:', error);
      });
}

  
// Toggle between showing and hiding the sidebar when clicking the menu icon
function w3_open() {
  var mySidebar = document.getElementById("mySidebar");
  mySidebar.style.display = 'block';
}
  
// Close the sidebar with the close button
function w3_close() {
  var mySidebar = document.getElementById("mySidebar");
  mySidebar.style.display = "none";
}

