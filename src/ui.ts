class DOM {
  public static $(selector: string): HTMLElement {
    const element = document.querySelector(selector);
    return element as HTMLElement;
  }

  public static $$(selector: string): NodeListOf<Element> {
    const elements = document.querySelectorAll(selector);
    return elements as NodeListOf<Element>;
  }

  public static createElement(html: string) {
    const element = document.createElement(html);
    return element;
  }

  public static createHTMLElement(
    selector: string,
    options?: any,
    content?: string
  ): HTMLElement {
    const element = DOM.createElement(selector);
    if (content) element.textContent = content!;

    for (const option in options) {
      element.setAttribute(option, options[option]);
    }

    return element;
  }

  public static appendChildToParent(
    parent: HTMLElement,
    child: HTMLElement
  ): void {
    if (!parent || !child) throw new Error("[parent], [child] is required.");
    parent.appendChild(child);
  }
}
