import { Model, QueryInterface, DataTypes } from 'sequelize'; 

import { Book } from '../../types/Book';

export default { 
  up(queryInterface: QueryInterface) { 
    return queryInterface.createTable<Model<Book>>('books', { 
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        allowNull: false,
        type: DataTypes.DECIMAL(10,2),
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isbn: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    }) 
  }, 
  
  down(queryInterface: QueryInterface) { 
    return queryInterface.dropTable('books') 
  } 
};