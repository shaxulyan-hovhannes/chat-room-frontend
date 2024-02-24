class SessionStorageService {
  private session = sessionStorage;

  setItem(key: string, value: string): void {
    this.session.setItem(key, value);
  }

  getItem<T>(key: string): T | null {
    const item = this.session.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: string): void {
    this.session.removeItem(key);
  }
}

const sessionStorageService = new SessionStorageService();

export default sessionStorageService;
