function getScoreListAsNumber(movies) {
  const moviesScore = [];
  movies.forEach((card) => {
    const scoreSpan = card.querySelector("span");
    const score = Number(scoreSpan.textContent.split(" ")[0]);
    moviesScore.push(score);
  });
  return moviesScore;
}

function createHTMLElement(wrapper, selector) {
  if (!wrapper || !selector) return;
  const content = wrapper.querySelector(selector).textContent;
  const element = document.createElement(selector);
  element.textContent = content;
  return element;
}

function appendElementToParent(parentSelector, childElement) {
  if (!parentSelector || !childElement) return;
  const container = document.querySelector(parentSelector);
  container.appendChild(childElement);
}

function createHigherScoreCard(index, movies) {
  if (!index) return;
  if (index > 0) {
    const higherCard = movies[index];
    const titleElement = createHTMLElement(higherCard, "h3");
    const scoreElement = createHTMLElement(higherCard, "span");
    appendElementToParent("#largest-movie", titleElement);
    appendElementToParent("#largest-movie", scoreElement);
  }
}

function getHigherScore() {
  const moviesCard = document.querySelectorAll(".movie-card");
  const moviesScore = getScoreListAsNumber(moviesCard);
  const higherScore = Math.max(...moviesScore);
  const higherScoreIndex = moviesScore.indexOf(higherScore);
  createHigherScoreCard(higherScoreIndex, moviesCard);
}

document.addEventListener("DOMContentLoaded", () => {
  getHigherScore();
});
