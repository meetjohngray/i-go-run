const connection = require('./connection')

function getExamples (db = connection) {
  return db('examples').select()
}

module.exports = { getExamples }
