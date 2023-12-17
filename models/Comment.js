module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return User;
  };

  module.exports = function (sequelize, DataTypes) {
    const Post = sequelize.define('Post', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });
  
    Post.associate = (models) => {
      Post.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
      Post.hasMany(models.Comment, {
        foreignKey: 'postId',
        onDelete: 'CASCADE',
      });
    };
  
    return Post;
  };
  
  