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
}

module.exports = Hobby;
