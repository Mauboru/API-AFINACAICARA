import { Model, DataTypes } from "sequelize";
import sequelize from "../instances/sequelize";
import Instrument from "./Instrument";

class Tuning extends Model {
    public id!: number;
    public instrument_id!: number;
    public name!: string;
    public description!: string;
}

Tuning.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        instrument_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Instrument,
                key: "id",
            },
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: "Tuning",
        tableName: "ac_tunings",
        timestamps: true,
        underscored: true,
    }
);

// Relacionamento
Instrument.hasMany(Tuning, { foreignKey: "instrument_id" });
Tuning.belongsTo(Instrument, { foreignKey: "instrument_id" });

export default Tuning;
