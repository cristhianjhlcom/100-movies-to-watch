interface MovieItem {
  id: number;
  name: string;
  score: string;
  status: boolean;
}

interface IMovie {
  items: Array<MovieItem>;
  all(): Array<MovieItem>;
  higherScore(): MovieItem | null;
  completed(movie: MovieItem): void;
  render(): void;
}

class Movie implements IMovie {
  items: Array<MovieItem> = [];

  constructor() {
    this.items = LocalStorage.init("movies100", moviesJSONData);
  }

  public all(): Array<MovieItem> {
    return this.items;
  }

  public store(items: Array<MovieItem>): void {
    this.items = [...items];
  }

  public completed(movie: MovieItem) {
    const datas: Array<MovieItem> = this.items.map((item: MovieItem) => {
      if (item.id === movie.id) return { ...item, status: !movie.status };
      return item;
    });

    LocalStorage.remove("movies100");
    LocalStorage.set("movies100", datas);
    this.store(datas);
    this.render();
  }

  public render() {
    const container = DOM.$("#list-of-movies");
    container.innerHTML = "";

    this.items.forEach((item) => {
      const { id, name, score, status } = item;
      const article = DOM.createHTMLElement("article", { class: "movie-card" });
      const title = DOM.createHTMLElement("h3", {}, name);
      const points = DOM.createHTMLElement("span", {}, score);
      const statu = DOM.createHTMLElement("input", {
        type: "checkbox",
      }) as HTMLInputElement;

      statu.checked = status;
      statu.addEventListener("click", () => this.completed(item));

      DOM.appendChildToParent(article, title);
      DOM.appendChildToParent(article, points);
      DOM.appendChildToParent(article, statu);
      DOM.appendChildToParent(container, article);
    });
  }

  public showHigherScore() {
    const { name, score, status }: MovieItem = this.higherScore()!;
    const higherScoreContainer = DOM.$("#largest-movie");
    const article = DOM.createHTMLElement("article", { class: "movie-card" });
    const title = DOM.createHTMLElement("h3", {}, name);
    const points = DOM.createHTMLElement("span", {}, score);
    const statu = DOM.createHTMLElement(
      "p",
      { class: `movie-status ${status ? "viewed" : ""}` },
      `viewed`
    );

    DOM.appendChildToParent(article, title);
    DOM.appendChildToParent(article, points);
    DOM.appendChildToParent(article, statu);
    DOM.appendChildToParent(higherScoreContainer, article);
  }

  public getScoreAsNumber(item: MovieItem): number {
    const score: string = item.score.split(" ")[0];
    return Number(score);
  }

  public higherScore(): MovieItem | null {
    const scores: Array<number> = this.items.map(this.getScoreAsNumber);
    const largestScore = Math.max(...scores);
    const largestScoreIndex = scores.indexOf(largestScore);
    if (largestScoreIndex > 0) {
      return this.items[largestScoreIndex];
    }

    return null;
  }
}
