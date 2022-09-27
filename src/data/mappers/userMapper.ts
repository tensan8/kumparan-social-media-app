import { UserModel } from '../../domain/models/user'
import { UserDTO } from '../sources/dtos/userDTO'

export const mapUserModel = (userDTO: UserDTO): UserModel => {
  return (new UserModel({
    name: userDTO.name,
    username: userDTO.username,
    email: userDTO.email,
    address: new Map<string, any>([
      ['street', userDTO.address.street],
      ['suite', userDTO.address.suite],
      ['city', userDTO.address.city],
      ['zipcode', userDTO.address.zipcode],
      ['geo', new Map<string, string>([
        ['lat', userDTO.address.geo.lat],
        ['lng', userDTO.address.geo.lng]
      ])]
    ]),
    phone: userDTO.phone,
    website: userDTO.website,
    company: new Map<string, string>([
      ['name', userDTO.company.name],
      ['catchPhrase', userDTO.company.catchPhrase],
      ['bs', userDTO.company.bs]
    ])
  }, userDTO.id))
}
