const track = document.getElementById("image-track");

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX; // Store the X position of mouse down
};

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0"; // Reset mouse down position
    track.dataset.prevPercentage = track.dataset.percentage; // Store the last percentage
};

window.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return; // Exit if mouse is not down

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

    // Clamp nextPercentage between -100 and 0
    nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);

    track.dataset.percentage = nextPercentage;

    // Move the track based on percentage
    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, {duration: 1200, fill: "forwards" });

    // Adjust each image's position
    for (const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, {duration: 12000, fill: "forwards"});
    }
};
