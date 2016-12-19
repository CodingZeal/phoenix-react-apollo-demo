# TodoApp

Example app started with Zeal's [React app
generator](https://github.com/CodingZeal/generator-react-zeal) and a
[Phoenix](http://www.phoenixframework.org/) back end.

[Absinthe](http://absinthe-graphql.org/) is used for the GraphQL server with
[Apollo](http://dev.apollodata.com/) as the GraphQL client

[Live Demo](https://phoenix-react-apollo-demo.herokuapp.com/)


## Setup

  * Install elixir dependencies with `mix deps.get`
  * Install node dependencies with `npm install`
  * Create and migrate your database with `mix ecto.setup`

## Development

  * Start Phoenix endpoint with `mix phoenix.server`
  * Start client dev server in another window with `npm start`

Now you can visit [`localhost:4000`](http://localhost:4000).


### GraphiQL

Visit [`localhost:4000/graphiql`](http://localhost:4000/graphiql).

### Storybook

Start the server with `npm run storybook`
