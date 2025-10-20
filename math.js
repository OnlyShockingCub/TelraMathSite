const correctAnswer = 97;

function checkAnswer(event) {
    event.preventDefault();

    const userAnswer = parseInt(document.getElementById("answer").value);
    const feedbackElement = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! 👍👍👍";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Wrong 😂😂😂";
        feedbackElement.style.color = "red";
    }
    document.getElementById("answer").value = "";
}

document.getElementById("math-form").addEventListener("submit", checkAnswer);
