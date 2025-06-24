import { db } from "../config/db";

abstract class BaseModel<T> {
  protected tableName: string;

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  abstract mapRowToModel(row: any): T;

  async getAll(): Promise<T[]> {
    const [row]: any = await db.query(
      `SELECT * FROM ${this.tableName}  WHERE s_delete = 0`
    );
    return row.map(this.mapRowToModel);
  }

  async getbyId(id: number): Promise<T | null> {
    const [row]: any = await db.query(
      `SELECT * FROM ${this.tableName} WHERE id =? AND s_delete = 0`[id]
    );
    if (row.length === 0) return null;
    return this.mapRowToModel(row[0]);
  }

  
  async deletebyId(id: number): Promise<boolean> {
    const [result]: any = await db.query(
      `UPDATE ${this.tableName} SET s_delete = 1 WHERE id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

export default BaseModel;
