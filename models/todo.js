"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        Todo.hasMany(models.TodoItem, {
        foreignKey: 'todoId',
        });
    }
  }
  Todo.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );
  return Todo;
};

// We enter the following command to create the model: $ node_modules/.bin/sequelize model:create --name Todo --attributes title:string
// — name refers to the name of the model
// — attribute refers to the attributes the model should have
//We do the same thing for todoItem.js


//in the above code we modified our todo.js file, first we included an extra attribute to the title field allowNull: false what this attribute does is that it made the title field not nullable, meaning that the database is going to throw an error if we attempt to add an empty or null value to the title field, the DataTypes.string means that we only expect a string value in this field, anything other than that the database is going to throw an error

// Also, we created a relationship between out Todo and TodoItem, like we said earlier, every single Todo has many todoItem, that relationship is defined with the hasMany many method of the Todo Model. The foreignKey: ‘todoId’, means that todoId is going to be the foreign key column in todoItem, you can read more about foreign keys here.