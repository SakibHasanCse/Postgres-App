module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('TodoItems', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            text: {
                type: Sequelize.STRING,
                allowNull: false
            },
            todoId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Todos',
                    as: 'id'
                }
            },
            isCompleted: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('TodoItems');
    }
};