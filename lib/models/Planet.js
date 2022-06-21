const pool = require('../utils/pool');

class Planet {
  id;
  name;
  radius_miles;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.radius_miles = row.radius_miles;
  }

  static async getAllPlanets() {
    const { rows } = await pool.query(
      'SELECT * FROM planets'
    );
    return rows.map((row) => new Planet(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM planets where id = $1', [id]
    );
    return new Planet(rows[0]);
  }

  static async insert({ name, radius_miles }) {
    const  { rows } = await pool.query(
      'INSERT INTO planets (name, radius_miles) VALUES ($1, $2) RETURNING *', [name, radius_miles]
    );
    return new Planet(rows[0]);
  }

  static async updateById(id, attrs) {
    const planetItem = await Planet.getById(id);
    if (!planetItem) return null;
    const { name, radius_miles } = { ...planetItem, ...attrs }; 
    const { rows } = await pool.query(
      `UPDATE planets
      SET name=$2, radius_miles=$3
      WHERE id=$1
      RETURNING *`,
      [id, name, radius_miles]
    );
    return new Planet(rows[0]);
  }
}

module.exports = Planet;
