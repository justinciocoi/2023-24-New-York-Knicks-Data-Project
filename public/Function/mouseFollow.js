// script.js
/*
var follower = document.getElementById('follower');
var timeout;

document.addEventListener('mousemove', function(e) {
    follower.style.left = e.pageX + 'px';
    follower.style.top = e.pageY + 'px';

    // Make the follower visible
    follower.classList.add('visible');

    // Clear the previous timeout to reset the timer
    clearTimeout(timeout);

    // Set a timeout to hide the follower after 1 second of inactivity
    timeout = setTimeout(function() {
        follower.classList.remove('visible');
    }, 250); // Adjust the time as needed
});
*/
document.addEventListener('mousemove', function(e) {
    var colors = ['rgb(206, 111, 58)', 'rgb(255, 255, 255)', 'rgb(0, 0, 255)']; // Example colors
    var circle = document.createElement('div');
    circle.classList.add('circle');
    document.body.appendChild(circle);

    // Set the circle color to a random choice from the colors array
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    circle.style.backgroundColor = randomColor;

    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';

    // Set a timeout to remove the circle after the animation
    setTimeout(function() {
        circle.remove();
    }, 1000); // Match this with the animation duration
});
