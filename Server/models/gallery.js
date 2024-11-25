module.exports = (sequelize, DataTypes) => {
    const Gallery = sequelize.define('Gallery', {
      galleryimg: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Gallery;
  };
  