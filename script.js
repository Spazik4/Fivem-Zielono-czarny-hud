const healthFill = document.getElementById('healthFill');
const micBox = document.getElementById('micBox');
const healthBox = document.getElementById('healthBox');

window.addEventListener('message', function (event) {
    const data = event.data;

    if (data.action === 'update') {
        let health = Number(data.health) || 0;
        let talking = !!data.talking;

        if (health < 0) health = 0;
        if (health > 100) health = 100;

        const missing = 100 - health;
        const scale = health / 100;

        healthFill.style.transform = `scaleY(${scale})`;

        if (health <= 25) {
            healthBox.classList.add('low');
        } else {
            healthBox.classList.remove('low');
        }

        if (talking) {
            micBox.classList.add('talking');
        } else {
            micBox.classList.remove('talking');
        }
    }
});
