document.getElementById('load-test').addEventListener('click', () => {
    document.getElementById('status').textContent = 'Load simulation started...';

    const end = Date.now() + 3000;
    while (Date.now() < end) {
        Math.sqrt(Math.random() * 1000);
    }

    document.getElementById('status').textContent = 'Load simulation completed!';
});
