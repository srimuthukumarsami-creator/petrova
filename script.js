function startSimulation() {
    document.getElementById("quiz").style.display = "block";
}

function checkAnswer(ans) {
    let result = document.getElementById("result");

    if(ans === 'a') {
        result.innerHTML = "You have strong logical thinking! Suggested career: Software Engineer 💻";
    } else {
        result.innerHTML = "You may explore creative fields 🎨";
    }
}