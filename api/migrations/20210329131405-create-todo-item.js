module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('TodoItems', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            test: {
                type: Sequelize.STRING
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