function app() {
  const movies = new Movie();
  movies.render();
  movies.showHigherScore();
}

document.addEventListener("DOMContentLoaded", () => app());
