import { Model, DataTypes } from "sequelize";
import sequelize from "../instances/sequelize";

class Instrument extends Model {
    public id!: number;
    public name!: string;
    public type!: string;
}

Instrument.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Instrument",
        tableName: "ac_instruments",
        timestamps: true,
        underscored: true,
    }
);

export default Instrument;
