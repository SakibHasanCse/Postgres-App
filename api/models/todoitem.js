import { Model } from 'sequelize'
module.exports = (sequelize, DataTypes) => {
    class TodoItem extends Model {

        static associate(models) {
            TodoItem.belongsTo(models.Todo, {
                as: 'todo',
                foreignKey: 'todoId'
            })
        }
    };
    TodoItem.init({
        test: DataTypes.STRING,
        todoId: DataTypes.INTEGER,
        isCompleted: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'TodoItem',
    });
    return TodoItem;
};