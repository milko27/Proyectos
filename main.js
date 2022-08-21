const WHITE = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK = ['s', 'd', 'g', 'h', 'j'];
const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.white');
const blackKeys = document.querySelectorAll('.black');

function playNote(key){
    const note = document.getElementById(key.dataset.key);
    key.classList.add('pressed');
    note.currentTime = 0;
    note.play();
    note.addEventListener('ended', () => {
        key.classList.remove('pressed');
    });
}

document.addEventListener('keyup', (e) => {
    if(e.repeat) return;

    // Plays white keys
    if(WHITE.includes(e.key)){
        playNote(whiteKeys[WHITE.indexOf(e.key)]);
    }

    //Plays black keys
    if(BLACK.includes(e.key)){
        playNote(blackKeys[BLACK.indexOf(e.key)]);
    }
});

// Clicking triggers the piano sound
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
});
 