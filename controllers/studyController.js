const StudyModel = require('../models/study');

module.exports = {
    get : async ( req, res ) => {
          const id = req.params.id;
          const {
              junhyeon,
              hyunjung,
              yein
          } = req.query

          const token = req.headers.token

          const person = await StudyModel.studyPerson(id);

          res.status(200).send(person)
    }
}