const squares = document.querySelectorAll('.square');
let currentAudio = null;
let lastPlayedSquare = null;

squares.forEach(square => {
    square.addEventListener('click', () => {
        const audioNumber = square.getAttribute('data-audio');
        
        // Check if the same square is clicked again
        if (lastPlayedSquare === square && currentAudio && !currentAudio.paused) {
            currentAudio.pause();
        } else {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }

            currentAudio = new Audio(`audio/${audioNumber}.mp3`);
            currentAudio.play();
        }

        lastPlayedSquare = square;
    });
});
