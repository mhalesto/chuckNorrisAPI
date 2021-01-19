import categories from './categories.js';
import joke from './joke.js';

const resolvers = {
  Query: {
    ...categories.Query,
    ...joke.Query
  }
}

export default resolvers;