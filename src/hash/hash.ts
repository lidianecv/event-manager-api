import { User } from "src/typeorm/User"

export function fakeHash (password:string):string{
    return `hashed_${Buffer.from(password).toString('base64')}`
}



