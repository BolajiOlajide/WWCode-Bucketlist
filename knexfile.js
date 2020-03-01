module.exports = {
  debug: true,
  pool: { min: 2, max: 10 },
  migrations: { tableName: 'knex_migrations' },
  seeds: { directory: './seeds' },
  debug: false,
  client: 'sqlite3',
  connection: { filename: './demo.sqlite' },
  useNullAsDefault: true,
  pool: {
    // adding this because sqlite doesn't fully support foregn keys
    // so when you delete a record it doesn't delete it's references in the
    // many-to-many table.
    afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys=ON', cb)
  }
};
