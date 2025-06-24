"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
class BaseModel {
    constructor(tableName) {
        this.tableName = tableName;
    }
    async getAll() {
        const [row] = await db_1.db.query(`SELECT * FROM ${this.tableName}  WHERE s_delete = 0`);
        return row.map(this.mapRowToModel);
    }
    async getbyId(id) {
        const [row] = await db_1.db.query(`SELECT * FROM ${this.tableName} WHERE id =? AND s_delete = 0`[id]);
        if (row.length === 0)
            return null;
        return this.mapRowToModel(row[0]);
    }
    async deletebyId(id) {
        const [result] = await db_1.db.query(`UPDATE ${this.tableName} SET s_delete = 1 WHERE id = ?`, [id]);
        return result.affectedRows > 0;
    }
}
exports.default = BaseModel;
