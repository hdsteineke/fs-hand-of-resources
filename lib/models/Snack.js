const pool = require('../utils/pool');
const Dog = require('./Dog');

class Snack {
  id;
  type;
  is_chocolate;

  constructor(row) {
    this.id = row.id;
    this.type = row.type;
    this.is_chocolate = row.is_chocolate;
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * FROM snacks'
    );
    return rows.map((row) => new Snack(row));
  }


  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM snacks WHERE id=$1', [id]);
    return new Snack(rows[0]);
  }

  static async insert({ type, is_chocolate }) {
    const { rows } = await pool.query(
      `INSERT INTO snacks (type, is_chocolate)
      VALUES ($1, $2)
      RETURNING *`, [type, is_chocolate]
    );
    return new Snack(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM snacks WHERE id = $1 RETURNING *', [id]
    );
    return new Snack(rows[0]);
  }

  static async updateById(id, attrs) {
    const snack = await Snack.getById(id);
    if (!snack) return null;
    const { type, is_chocolate } = { ...snack, ...attrs };
    const { rows } = await pool.query(
      `UPDATE snacks
      SET type=$2, is_chocolate=$3
      WHERE id=$1 RETURNING *`, [id, type, is_chocolate]
    );
    return new Snack(rows[0]);
  }
}

module.exports = Snack;

