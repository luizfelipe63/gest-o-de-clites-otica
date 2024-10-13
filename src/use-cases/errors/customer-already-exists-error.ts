export class CustomerAlreadyExistsError extends Error {
    constructor() {
      super('cpf already registered')
    }
  }