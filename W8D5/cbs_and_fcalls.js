window.setTimeout(function cb() {
    alert('Hammertime');
}, 5000);

function hammerTime (time) {
    window.setTimeout( function cb() {
        alert(`${time} is hammertime!`)
    }, 5000);
}