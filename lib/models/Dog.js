const pool = require('../utils/pool');

class Dog {
  id;
  name;
  age;
  color;
  does_tricks;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
    this.color = row.color;
    this.does_tricks = row.does_tricks;

  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * from dogs'
    );
    return rows.map((row) => new Dog(row));
  }


  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM dogs WHERE id=$1', [id]);

    return new Dog(rows[0]);
  }

  static async insert({ name, age, color, does_tricks }) {
    const { rows } = await pool.query(
      'INSERT INTO dogs (name, age, color, does_tricks) VALUES ($1, $2, $3, $4) RETURNING *', [name, age, color, does_tricks]
    );
    return new Dog(rows[0]);
  }
}

module.exports = Dog;
