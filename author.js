import { gql } from 'graphql-tag'

export const typeDefs = gql`

    extend type Query {
        author(id: ID!): Author
    }

    extend type Mutation {
        createAuthor(firstName: String): String
    }


    type Author {
        id: ID!
        firstName: String
        lastName: String
        books: [Book]
    }


`

export const resolvers = {

    Query: {
        author: (_, {id}) => {
            return {
                id,
                firstName: "JHON",
                lastName: "Ryen",
                books: []
            }
        }
    },

    Mutation: {
        createAuthor: () => "Create Author"
    }
}