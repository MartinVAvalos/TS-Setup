'use strict';
import {Model} from 'sequelize';


interface UserAttributes{
  id:string;
  name:string;
  email:string;
  password:string;
}

module.exports = (sequelize:any, DataTypes:any) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  };
  User.init(
    {
    name: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'User',
  });
  return User;
};