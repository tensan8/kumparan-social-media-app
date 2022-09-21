import { UserModel } from './../../../domain/models/User'

export const MapUserInfoDetail = (user: UserModel): Map<string, string> => {
  return (
    new Map<string, string>([
      ['Full Name', user.name],
      ['Company', user.company.get('name') ?? ''],
      ['Email', user.email],
      ['Phone', user.phone],
      ['Website', user.website],
      ['Address', [user.address.get('suite'),
        user.address.get('street'),
        user.address.get('city'),
        user.address.get('zipcode')].join(', ')]
    ])
  )
}
