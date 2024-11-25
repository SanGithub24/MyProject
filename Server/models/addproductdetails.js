module.exports = (sequelize, DataTypes) =>{
    const addproductdetails = sequelize.define("ProductDetails",{
       
        productimg:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        pname:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        category:{
            type: DataTypes.STRING,
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

    return addproductdetails
}