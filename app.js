const express = require('express');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

express.json();

app.use(
  '/graphql',
  graphqlHttp({
    schema: buildSchema(`
      type RootQuery {
        events: [String!]!
      }

      type RootMutation {
        createEvent(name: String): String
      }

      schema {
        query: RootQuery
        mutation: RootMutation
      }
    `),
    rootValue: {
      events: () => {
        return ['Romantinc Cooking', 'Sailing', 'All-Night Coding'];
      },
      createEvent: args => {
        const eventName = args.name;
        return eventName;
      }
    },
    graphiql: true
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
