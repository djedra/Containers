export default class ErrorRepository {
  constructor() {
    this.repository = new Map([
      [404, 'Страница не найдена'],
      [200, 'Запрос успешно выполнен'],
      [500, 'На сервере произошла ошибка'],
    ]);
  }

  translate(code) {
    if (!this.repository.has(code)) {
      return 'Unknown error'
    }
    return this.repository.get(code)
  }
}