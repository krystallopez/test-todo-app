"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TodoItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TodoItem.belongsTo(models.Todo, {
        foreignKey: "todoId",
        onDelete: "CASCADE",
      });
    }
  }
  TodoItem.init(
    {
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TodoItem",
    }
  );
  return TodoItem;
};

//Every single Todo has many TodoItems and each TodoItem belongs to one Todo, that is why we have the TodoItem.belongsTo define in our model above. The onDelete: ‘Cascade’ means if we delete a todo then the associated todoITem should also be deleted

//Now that we have our models ready we can now run our migrations, in the migration folder we’ll have a set of migration files, The files contain scripts for creating and dropping our database tables, the migration scripts were created to model what we defined in our models, again, the scripts are responsible for creating and dropping our tables every time we run it. The up function is responsible for creating our tables and its columns, the down function is responsible for undoing what the up function runs.