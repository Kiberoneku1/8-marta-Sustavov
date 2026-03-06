let compliments = [
    "Ты самая добрая!",
    "Ты невероятная!",
    "Ты вдохновляешь!",
    "Ты делаешь каждый день лучше!"
];

function generate() {
    let name = document.getElementById("name").value.trim();
    let role = document.getElementById("role").value;

    // Если имя не введено, используем обращение "дорогая"
    if (name === "") {
        name = "дорогая";
    }

    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomText = compliments[randomIndex];
    let message = `С 8 марта, ${role} ${name}! 💐 ${randomText}`;
    document.getElementById('output').innerText = message;

    createConfetti();
}

function createConfetti() {
    // Удаляем старые конфетти
    let oldConfetti = document.querySelectorAll('.confetti');
    oldConfetti.forEach(el => el.remove());

    // Создаём новые
    for (let i = 0; i < 30; i++) {
        let conf = document.createElement("div");
        conf.className = "confetti";
        conf.style.left = Math.random() * window.innerWidth + "px";
        conf.style.animationDuration = (Math.random() * 3 + 2) + "s";
        // Добавляем случайный цвет
        let hue = Math.random() * 360;
        conf.style.backgroundColor = `hsl(${hue}, 80%, 70%)`;
        document.body.appendChild(conf);

        // Удаляем элемент после завершения анимации (чтобы не засорять DOM)
        conf.addEventListener('animationend', function() {
            conf.remove();
        });
    }
}