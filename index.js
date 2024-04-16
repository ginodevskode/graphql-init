import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { movies, authors } from "./db.js";

const resolvers = {
  Query: {
    movies() {
      return movies;
    },
    authors() {
      return authors;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log("Server ready at server", 4000);

