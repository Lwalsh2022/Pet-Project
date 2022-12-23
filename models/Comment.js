const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {
};

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        comment: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'id',
            },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'post',
            key: 'id',
            },
        },
    },
},
        {
            sequelize,
            timestamps: true,
            freezeTableName: true,
            underscored: true,
            modelName: 'Comment',
        },
);

module.exports = Comment;