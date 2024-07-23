document.getElementById('generate-button').addEventListener('click', function() {
    const container = document.getElementById('grid-container');
    const difficulty = document.getElementById('difficoltà').value;

// Pulisce il contenitore prima di aggiungere nuove celle

    container.innerHTML = '';

     let quadratitot;
    let livello;
    let gameover = false; // Variabile di stato per il gioco
    let punteggio = 0; // Variabile per tenere traccia del punteggio
    const totBombs = 16; // Numero totale di bombe

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
        while (bombs.length < totBombs) {
            const bomb = Math.floor(Math.random() * totalCells) + 1;
            if (!bombs.includes(bomb)) {
                bombs.push(bomb);
            }
        }
        return bombs;
    }
        const maxScore = quadratitot - totBombs; // Punteggio massimo possibile

        for (let i = 1; i <= quadratitot; i++) {
        const cell = document.createElement('div');
        cell.classList.add('quadrati', livello);
        cell.textContent = i;
        cell.addEventListener('click', function() {
            if (!gameover) { // Controlla se il gioco è ancora in corso
                if (bombs.includes(i)) {
                    cell.style.backgroundColor = 'red';
                    console.log(`Hai cliccato su una bomba: ${i}`);
                    gameover = true; // Termina il gioco
                    alert(`Hai calpestato una bomba! Game Over. Il tuo punteggio è: ${punteggio}`);
                } 
                // Controlla se l'utente ha raggiunto il punteggio massimo
                else if (cell.style.backgroundColor !== 'lightblue') {
                        cell.style.backgroundColor = 'lightblue';
                        punteggio++; // Incrementa il punteggio
                        console.log(`Cella cliccata: ${i}. Punteggio attuale: ${punteggio}`);
                }
                        // Controlla se l'utente ha raggiunto il punteggio massimo
                else if (punteggio == maxScore) {
                            gameover = true;
                            alert(`Congratulazioni! Hai perso tempo. Il tuo punteggio è: ${punteggio}`);
                        }
                    }
        });
        container.append(cell);
    }
});