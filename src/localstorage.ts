class LocalStorage {
  public static init<T>(key: string, items: Array<T>): Array<T> {
    const data = LocalStorage.get(key);
    if (!data) LocalStorage.set(key, items);
    return LocalStorage.get(key)!;
  }

  public static set<T>(key: string, items: T): void {
    if (!key || !items)
      throw new Error(
        "[key], [items] params are required in LocalStorage.set fn."
      );
    const data: string = JSON.stringify(items);
    window.localStorage.setItem(key, data);
  }

  public static remove(key: string): void {
    if (!key)
      throw new Error("[key] param is required in LocalStorage.remove fn.");
    window.localStorage.removeItem(key);
  }

  public static get<T>(key: string): T | null {
    if (!key)
      throw new Error("[key] param is required in LocalStorage.get fn.");
    return JSON.parse(window.localStorage.getItem(key)!);
  }
}
