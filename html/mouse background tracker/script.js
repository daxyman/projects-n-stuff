const blob = document.getElementById("blob");

window.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 6000, fill: "forwards"});
}
document.addEventListener('mousemove', e => console.log(`X: ${e.clientX}, Y: ${e.clientY}`));

