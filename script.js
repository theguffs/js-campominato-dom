document.getElementById('generate-button').addEventListener('click', function() {
    const container = document.getElementById('grid-container');
    const difficulty = document.getElementById('difficoltà').value;

// Pulisce il contenitore prima di aggiungere nuove celle

    container.innerHTML = '';

    let quadratitot;
    let livello;
    let gameover = true; 

    if (difficulty == 'facile') {
        quadratitot = 100;
        livello = 'facile';
    } 
    else if (difficulty == 'medio') {
        quadratitot = 81;
        livello = 'medio';
    } 
    else if (difficulty == 'difficile') {
        quadratitot = 49;
        livello = 'difficile';
    }
        // Genera 16 bombe 

    const bombs = generateBombs(quadratitot);
    console.log("Bombe: ", bombs);
    
    function generateBombs(totalCells) {
        const bombs = [];
        while (bombs.length < 16) {
            const bomb = Math.floor(Math.random() * totalCells) + 1;
            if (!bombs.includes(bomb)) {
                bombs.push(bomb);
            }
        }
        return bombs;
    }

        for (let i = 1; i <= quadratitot; i++) {
        const cell = document.createElement('div');
        cell.classList.add('quadrati', livello);
        cell.textContent = i;
        cell.addEventListener('click', function() {
            if (gameover) {
                if (bombs.includes(i)) {
                    cell.style.backgroundColor = 'red';
                    console.log(`Hai cliccato su una bomba: ${i}`);
                    gameover = false; // termina il gioco
                    alert('Hai calpestato una bomba! Game Over.');
                } else {
                    cell.style.backgroundColor = 'lightblue';
                    console.log(`Cella cliccata: ${i}`);
                }
            }
        });
        container.append(cell);
    }
});