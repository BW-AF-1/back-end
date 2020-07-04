// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'Fitness',
      user: 'postgres',
      password: 'Sports12'
    },
    pool: {
      min: 2,
      max: 10
    },
    useNullAsDefault: true,

    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.dev.sqlite3'
    },
    useNullAsDefault: true,

    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    // needed when using foreign keys
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      }
    }
  },
  production: {
    client: 'pg',
    connection: {
      connection: process.env.DATABASE_URL,
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
  },
}


