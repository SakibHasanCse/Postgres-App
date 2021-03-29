import { Model } from 'sequelize'
export default (sequelize, DataTypes) => {
    class TodoItem extends Model {

        static associate(models) {
            TodoItem.belongsTo(models.Item, {
                as: 'todo',
                foreignKey: 'todoId'
            })
        }
    };
    TodoItem.init({
        test: DataTypes.STRING,
        todoId: DataTypes.INTEGER,
        isCompledted: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'TodoItem',
    });
    return TodoItem;
};