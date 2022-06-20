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
}

module.exports = Planet;
