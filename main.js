document.addEventListener("DOMContentLoaded", function() {
    const message = document.createElement("h1");
    message.textContent = "Привет, мир!";
    document.body.appendChild(message);

    const time = document.createElement("p");
    time.textContent = "Текущее время: " + new Date().toLocaleTimeString();
    document.body.appendChild(time);

    setInterval(() => {
        time.textContent = "Текущее время: " + new Date().toLocaleTimeString();
    }, 1000);
});
