document.getElementById('generate-button').addEventListener('click', function() {
    const container = document.getElementById('grid-container');
    const difficulty = document.getElementById('difficoltà').value;

// Pulisce il contenitore prima di aggiungere nuove celle

    container.innerHTML = '';

    let quadratitot;
    let livello;

    if (difficulty == 'difficile') {
        quadratitot = 100;
        livello = 'difficile';
    } 
    else if (difficulty == 'medio') {
        quadratitot = 81;
        livello = 'medio';
    } 
    else if (difficulty == 'facile') {
        quadratitot = 49;
        livello = 'facile';
    }

    for (let i = 1; i <= quadratitot; i++) {
        const cell = document.createElement('div');
        cell.classList.add('quadrati', livello);
        cell.textContent = i;
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = 'lightcoral';
            console.log(`Cella cliccata: ${i}`);
        });
        container.append(cell);
    }
});