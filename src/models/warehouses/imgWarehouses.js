'use strict';
const landImagesModel = (sequelize, DataTypes) => 
sequelize.define('landImages', {
    landId: {
        type: DataTypes.INTEGER,
        required: true
    },
    imgId: {
        type: DataTypes.INTEGER,
        required: true
    },
    type: {
        type: DataTypes.STRING,
        required: true
    },
    name: {
        type: DataTypes.STRING,
        required: true

    },
    data: {
        type: DataTypes.STRING,
        required: true
    }
});
module.exports =landImagesModel;