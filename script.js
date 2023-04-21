/* Toggle the 'show' class when the button is clicked */
document.querySelector('.dropbtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the button
    document.querySelector('.dropdown').classList.toggle('show');
});

/* Close the dropdown menu if the user clicks outside of it */
window.addEventListener('click',function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.querySelectorAll('.dropdown');
        for (var i = 0; i < dropdowns.length; i++) {
            var dropdown = dropdowns[i];
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        }
    }
});

window.addEventListener('load', function() {
  var profilePic = document.getElementById('profile-pic');
  profilePic.classList.add('zoom-in');
});

window.addEventListener('load', function() {
  var profilePic = document.getElementById('profile-pic');
  profilePic.classList.add('zoom-in');
  setTimeout(function() {
    profilePic.classList.remove('zoom-in');
  }, 2000);
});

const text = "Vince Gio Acedillo";
let index = 0;
let animationInterval;

function type() {
  const element = document.getElementById("typing-text");
  element.innerHTML = text.slice(0, index++);
  if (index > text.length) {
    clearInterval(animationInterval); // Stop the animation
  }
}

// Start the animation
animationInterval = setInterval(type, 100);