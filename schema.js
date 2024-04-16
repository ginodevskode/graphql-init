export const typeDefs = `#graphql
    type Movie{
        id: ID!
        title: String!
        platforms: [String!]!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query {
        movies: [Movie]
        authors: [Author]
    }
`;
