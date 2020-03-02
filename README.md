# WWCode Bucketlist Application

Slides for the workshop can be [found here](https://docs.google.com/presentation/d/1Iu9bwR1EF9slK7iyhp5ZzqgmkbPx4aUUBR9B24L0Z5M/edit?usp=sharing).

The focus of this workshop is introducing folks to GraphQL and building a simple GraphQL API with NodeJS.

## Technologies Used

* NodeJS
* [ApolloGraphQL](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server)
* [Knex](https://knexjs.org/) (Query Builder)
* SQLite (Database)

### Prerequisites

Ensure you have the following installed on your PC. This project works on MacOS/Windows/Linux.

* NodeJS (v8 and above)
* Git
* NPM (or yarn if you prefer)
* VSCode (or any editor of your choice)
* [TablePlus](https://tableplus.com/) or any database management tool that supports SQLite

#### Setup / Installation

* Clone the repository from github with the command

```sh
git clone https://github.com/BolajiOlajide/WWCode-Bucketlist.git
```

* Navigate into the project directory

```sh
cd WWCode-Bucketlist
```

* Install the project dependencies using your package manager (either NPM/Yarn)

```sh
yarn install
```

* Prepare the database by running the migrations and seed script with the command

```sh
yarn db:prepare
```

* Start the project with the command

```sh
yarn dev
```

Thanksss.

### Project Information

This project is a bucketlist API used for creating, retrieving, updating and deleting bucketlists.

The project contains the following mutations and queries:

#### Queries

* Retrieve Bucketlists
* Retrieve bucketlist items

#### Mutations

* User sign up
* User sign in
* Update bucketlist
* Delete bucketlist
* Add Item to Bucketlist
* Remove Item from Bucketlist
