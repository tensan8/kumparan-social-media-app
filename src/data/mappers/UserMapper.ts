import { UserModel } from './../../domain/models/User'
import { UserDTO } from './../sources/dtos/UserDTO'

export const mapUserModel = (userDTO: UserDTO): UserModel => {
  return (new UserModel({
    name: userDTO.name,
    username: userDTO.username,
    email: userDTO.email,
    address: userDTO.address,
    phone: userDTO.phone,
    website: userDTO.website,
    company: new Map<string, string>([
      ['name', userDTO.company.name],
      ['catchPhrase', userDTO.company.catchPhrase],
      ['bs', userDTO.company.bs]
    ])
  }, userDTO.id))
}
