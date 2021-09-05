import {Model, UUIDV4} from 'sequelize';


interface VideoAttributes {
  videoId:string,
  title:string,
  url:string
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Video extends Model<VideoAttributes> 
  implements VideoAttributes{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     videoId!:string;
     title!:string;
     url!:string;
    static associate(models: any) {
      // define association here

      Video.belongsTo(models.User,{
        foreignKey: 'userId'
      })
    }
  };
  Video.init({
    videoId:{
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    title:{
      type: DataTypes.STRING,
      allowNull: false

    },
    url:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Video',
  });
  return Video;
};