const pool = require('../utils/pool');

class Flower {
  id;
  common_name;
  color;
  num_petals;

  constructor(row) {
    this.id = row.id;
    this.common_name = row.common_name;
    this.color = row.color;
    this.num_petals = row.num_petals;
  }

  static async getAllFlowers() {
    const { rows } = await pool.query(
      'SELECT * FROM flowers'
    );
    return rows.map((row) => new Flower(row));
  }

  static async getFlowerById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM flowers WHERE id = $1', [id]
    );
    return new Flower(rows[0]);
  }
}

module.exports = Flower;
