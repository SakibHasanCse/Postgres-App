// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }


require('dotenv').config();
module.exports = {
    development: {
        database: 'tododev',
        use_env_variable: 'DB_DEV_URL',
        dialect: 'postgres'
    },
    test: {
        database: 'todotest',
        use_env_variable: 'DB_TEST_URL',
        dialect: 'postgres'
    },
    production: {
        database: 'todoprod',
        use_env_variable: 'DB_PROD_URL',
        dialect: 'postgres'
    }
}