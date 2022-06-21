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

  static async insert({ hobby, since, is_active }) {
    const { rows } = await pool.query(
      `INSERT INTO hobbies (hobby, since, is_active) 
      VALUES ($1, $2, $3)
      RETURNING *`, 
      [hobby, since, is_active]
    );
    return new Hobby(rows[0]);
  }

  static async updateById(id, attrs) {
    const hobbyItem = await Hobby.getById(id);
    if (!hobbyItem) return null;
    const { hobby, since, is_active } = { ...hobbyItem, ...attrs };
    const { rows } = await pool.query(
      `UPDATE hobbies
      SET hobby=$2, since=$3, is_active=$4
      WHERE id=$1 RETURNING *`,
      [id, hobby, since, is_active]
    );
    return new Hobby(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM hobbies  WHERE id = $1 RETURNING *',
      [id]
    );
    return new Hobby(rows[0]);
  }
}

module.exports = Hobby;
