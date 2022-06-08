function getHigherScore() {
  const movieCard = document.querySelectorAll(".movie-card");
  const moviesScore = [];
  movieCard.forEach((card) => {
    const scoreSpan = card.querySelector("span");
    const score = Number(scoreSpan.textContent.split(" ")[0]);
    moviesScore.push(score);
  });
  const higherScore = Math.max(...moviesScore);
  const higherScoreIndex = moviesScore.indexOf(higherScore);
  if (higherScoreIndex > 0) {
    const higherCard = movieCard[higherScoreIndex];
    const movieTitle = higherCard.querySelector("h3").textContent;
    const movieScore = higherCard.querySelector("span").textContent;
    const titleElement = document.createElement("h3");
    const scoreElement = document.createElement("span");
    titleElement.textContent = movieTitle;
    scoreElement.textContent = movieScore;
    const bestRatedContainer = document.querySelector("#largest-movie");
    bestRatedContainer.appendChild(titleElement);
    bestRatedContainer.appendChild(scoreElement);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  getHigherScore();
});
