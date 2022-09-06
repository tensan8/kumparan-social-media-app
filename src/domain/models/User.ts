import { BaseModel } from './baseModel'

interface User {
  name: string
  username: string
  email: string
  address: Map<string, string>
  phone: string
  website: string
  company: Map<string, string>
}

export class UserModel extends BaseModel {
  name
  username
  email
  address
  phone
  website
  company

  constructor (user: User, id: number) {
    super(id)

    this.name = user.name
    this.username = user.username
    this.email = user.email
    this.address = user.address
    this.phone = user.phone
    this.website = user.website
    this.company = user.company
  }
}
