'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TodoItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      todoId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Todos',
          key: 'id',
          as: 'todoId',
        },
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TodoItems');
  }
};

//we are going to be modifying our migration scripts since we modified our model files, this is to ensure consistency between our model and migrations

//since we are going to be having a foreingkey: todoId in the TodoItem as we defined in our models, we are going to modify the migration script for TodoItem to include a todoId

//the references contains a property called model, this tells us the model this ForeignKey refers to, in our case it is the Todos, the next attribute is the key attribute which tells us what the todoId in todoItems maps to in Todos models, in this case it is the id of the Todos table, what this means is that the id of the todo table is the same as the todoId in the TodoItem table
