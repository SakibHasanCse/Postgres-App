import { Model } from 'sequelize'
module.exports = (sequelize, DataTypes) => {

    class Todo extends Model {

        static associate(models) {
            // define association here
            Todo.belongsTo(models.User, {
                    as: 'user',
                    foreignKey: 'userId'
                }),
                Todo.hasMany(models.TodoItem, {
                    as: 'todoItems',
                    foreignKey: 'todoId'
                })


        }
    };
    Todo.init({
        title: DataTypes.STRING,
        userId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Todo',
    });
    return Todo;
};