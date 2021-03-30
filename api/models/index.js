import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import envVars from '../config/config';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

const config = envVars[env];
const db = {};

console.log(config)
console.log(env)

let sequelize;
if (config.use_env_variable) {
    console.log('hello1');
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
    console.log(process.env);
} else {
    console.log('hello');
    sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config);
}

console.log('hello world')
fs
    .readdirSync(__dirname)
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize,
            Sequelize);
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;