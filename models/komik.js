module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define("Komik", {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        judul : {
            type : DataTypes.STRING,
            allownull : false
        },
        penulis : {
            type : DataTypes.STRING,
            allownull : false
        },
        deskripsi : {
            type : DataTypes.TEXT,
            allownull : false
        },
        imageType : DataTypes.STRING,
        imageName : DataTypes.STRING,
        imageData : DataTypes.BLOB('long')
    }, 
    {
        tableName : "komik"
    });
    return Komik;
}