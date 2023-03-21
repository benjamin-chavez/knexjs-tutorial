const personService = require('../service/person');

class PersonController {
  async createPerson(req, res) {
    try {
      const id = await personService.createPerson(req.body);
      res.status(201).json(id);
      // FIXME: RETURN HEADER ALSO
    } catch (err) {
      console.log(err); // DONT USE Console.log BECAUSE IT IS NOT ASYNC
      res.status(500).json('Something went wrong');
    }
  }
}

// DEPENDENCY INJECTION??
module.exports = new PersonController();
