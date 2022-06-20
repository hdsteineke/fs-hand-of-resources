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

  static async insert({ common_name, color, num_petals }) {
    const { rows } = await pool.query(
      `INSERT INTO flowers (common_name, color, num_petals)
        VALUES ($1, $2, $3)
        RETURNING *`, 
      [common_name, color, num_petals]
    );
    return new Flower(rows[0]);
  }

  static async updateById(id, attrs) {
    const flowerItem = await Flower.getFlowerById(id);
    if (!flowerItem) return null;
    const { common_name, color, num_petals } = { ...flowerItem, ...attrs };
    const { rows } = await pool.query(
      `UPDATE flowers
      SET common_name=$2, color=$3, num_petals=$4
      WHERE id=$1
      RETURNING *`,
      [id, common_name, color, num_petals]
    );
    return new Flower(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      'DELETE FROM flowers WHERE id = $1 RETURNING *',
      [id]
    );
    return new Flower(rows[0]);
  }
}

module.exports = Flower;
