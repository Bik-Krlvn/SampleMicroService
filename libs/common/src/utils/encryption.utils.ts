import { compareSync } from 'bcryptjs'
export const validatePassword = (password: string, hashPassword: string): boolean => {
    return compareSync(password, hashPassword)
}