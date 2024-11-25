module.exports = (sequelize, DataTypes) =>{
    const addcategory = sequelize.define("AddCategory",{

        category:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    })

    return addcategory
}