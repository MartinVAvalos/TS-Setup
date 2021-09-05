import {Model, UUIDV4} from 'sequelize';


interface UserAttributes {
  userId: string;
  name: string;
  email: string;
  password: string;
}


module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> 
  implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    userId!: string;
    name!: string;
    email!: string;
    password!: string;
    static associate(models: any) {
      // define association here
      
      //EXAMPLE BELOW
      // User.belongsToMany(models.Project, {
      //   through: 'ProjectAssignments'
      // })
      User.hasMany(models.Video,{
        as: 'videoId', foreignKey: 'userId'
      })
    }
  };
  User.init({
    userId: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }, 
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
