class LocalStorageService {
  private storage = localStorage;

  setItem<T>(key: string, value: any): void {
    this.storage.setItem(key, value);
  }

  getItem<T>(key: string): T | null {
    const item = this.storage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }
}

const localStorageService = new LocalStorageService();
export default localStorageService;
