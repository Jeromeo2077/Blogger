export class Account {
  /**
   * @type {string}
   */
  id;

  /**
   * @type {string}
   */
  email;

  /**
   * @type {string}
   */
  name;

  /**
   * @type {string}
   */
  picture;

  /**
   * @param {Object} data
   * @param {string} data.id
   * @param {string} data.email
   * @param {string} data.name
   * @param {string} data.picture
  */
  constructor({ id, email, name, picture }) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.picture = picture;
    // TODO add additional properties if needed
  }
}
