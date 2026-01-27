const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreDisplay = document.getElementById("score");

let score = 0;

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");

        // add points after jump
        score++;
        scoreDisplay.textContent = "Score: " + score;

        setTimeout(() => {
            dino.classList.remove("jump");
        }, 300);
    }
}

let checkAlive = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft > 0 && cactusLeft < 70 && dinoTop >= 143) {
        dino.style.animationPlayState = "paused";
        cactus.style.animationPlayState = "paused";
        alert("Whoops! Game Over :(  Final Score: " + score);
        window.location.reload();
    }
}, 10);

document.addEventListener("keydown", jump);
