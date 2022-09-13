interface IBaseModel {
  id: number
}

export abstract class BaseModel implements IBaseModel {
  id

  constructor (id: number) {
    this.id = id
  }
}
