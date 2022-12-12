function overlayOn(id) {
    let details = document.getElementById(id);
    details.style.display = 'block';

    let overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
}

function overlayOff() {
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'none';

    let allDetailses = document.body.getElementsByClassName('piece-details');
    for (let i = 0; i < allDetailses.length; i++) {
        allDetailses[i].style.display = 'none';
    }
}