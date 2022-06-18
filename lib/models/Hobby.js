const pool = require('../utils/pool');

class Hobby {
  id;
  hobby;
  since;
  is_active;

  constructor(row) {
    this.id = row.id;
    this.hobby = row.hobby;
    this.since = row.since;
    this.is_active = row.is_active;
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * FROM hobbies'
    );
    return rows.map((row) => new Hobby(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT * FROM hobbies
      WHERE id=$1`, [id]
    );
    return new Hobby(rows[0]);
  }

  static async insert({ hobby, since, is_active}) {
    const { rows } = await pool.query(
      `INSERT INTO hobbies (hobby, since, is_active) 
      VALUES ($1, $2, $3)
      RETURNING *`, 
      [hobby, since, is_active]
    );
    return new Hobby(rows[0]);
  }
}

module.exports = Hobby;
