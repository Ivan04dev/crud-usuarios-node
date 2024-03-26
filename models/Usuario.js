import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Usuario = db.define('usuarios', {
    nombre: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
})