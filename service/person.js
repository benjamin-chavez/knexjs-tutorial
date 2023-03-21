const personDAO = require('../dao/person');

class PersonService {
  // createPerson(firstName, lastName, email) {
  createPerson(personDto) {
    const { firstName, lastName, email } = personDto;

    return personDAO.createPerson(firstName, lastName, email);
  }
}

module.exports = new PersonService();
