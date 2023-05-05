//button functionality
let bioDiv = document.getElementById("bio");

document.getElementById('bio-btn').addEventListener('click', function(){
    console.log('clicked')
    if (bioDiv.style.display === "none") {
      bioDiv.style.display = "block";
    } else {
      bioDiv.style.display = "none";
    }
})

