module.exports = (sequelize, DataTypes) =>{
    const addproduct = sequelize.define("AddProduct",{
       
        productimg:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        pname:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        category:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        price:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    })
    return addproduct
}