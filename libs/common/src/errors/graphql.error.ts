import { ApolloError } from 'apollo-server-express'

export class NotFoundError extends ApolloError {
    constructor(message: string, properties?: { [key: string]: any }) {
        super(message, 'NOT_FOUND_ERROR', properties)
        Object.defineProperty(this, 'name', { value: this.constructor.name })
    }

}

export class ValidationError extends ApolloError {
    constructor(message: string, properties?: { [key: string]: any }) {
        super(message, 'VALIDATION_ERROR', properties)
        Object.defineProperty(this, 'name', { value: this.constructor.name })
    }
}