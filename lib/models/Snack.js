const pool = require('../utils/pool');

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
      'SELECT * from snacks'
    );
    return rows.map((row) => new Snack(row));
  }
}

module.exports = Snack;

