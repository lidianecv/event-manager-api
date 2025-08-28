import { User } from "src/users/entity/User"

export function fakeHash (password:string):string{
    return `hashed_${Buffer.from(password).toString('base64')}`
}



