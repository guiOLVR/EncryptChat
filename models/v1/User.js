module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        hash: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        nickname: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        status: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        cityId: {
            field: 'city_id',
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        createdAt:{
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt:{
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: true
        },
        deletedAt:{
            field: 'deleted_at',
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
            tableName: 'user',
            timestamps: false
        });
    User.associate = function (models) {
    }
    return User;
};