function scaleDiv() {
    const div = document.querySelector('.scalable-div');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Get the dimensions of the div
    const divRect = div.getBoundingClientRect();
    const divWidth = divRect.width;
    const divHeight = divRect.height;

    // Calculate the maximum scale factor that keeps the div within the window bounds
    const maxScaleWidth = windowWidth / divWidth;
    const maxScaleHeight = windowHeight / divHeight;
    const maxScale = Math.min(maxScaleWidth, maxScaleHeight, 1); // Ensure we don't scale above 1

    // Apply the scale transform
    div.style.transform = `scale(${maxScale})`;
}

// Run the function on load and resize
window.addEventListener('load', scaleDiv);
window.addEventListener('resize', scaleDiv);
