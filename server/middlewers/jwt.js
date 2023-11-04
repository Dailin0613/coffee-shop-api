import jwt from 'jsonwebtoken'
import { secret, ttl, refresh_token } from '../helpers/jwtConfig.js'

function jwtTokens({
    name,
    lastname,
    username,
    email,
}) {
    const user = {
        name,
        lastname,
        username,
        email,
    }
    const accessToken = jwt.sign(user, secret, { expireIn: ttl })
    const refreshToken = jwt.sign(user, refresh_token, { expireIn: '5m' })

    return ({ accessToken, refreshToken })
}

export { jwtTokens }

//export const verifyToken = (token) => jwt.verify(token, secret)
//export const createToken = (user) => jwt.sign(user, secret, { expireIn: ttl }) 
