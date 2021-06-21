const client = require('./db');


const getAllPlayers = (request, response) => {
    client.query('SELECT * FROM players ORDER BY id ASC', (error, results) => {
      if (error) {
        return error
      }
      else {
        response.status(200).json(results.rows)
      }
    });
};

const getSinglePlayer = (request, response) => {
    const id = parseInt(request.params.id)
  
    client.query('SELECT * FROM players WHERE id = $1', [id], (error, results) => {
      if (error) {
        return error
      }
      else {
        response.status(200).json(results.rows)
      }
    });
}

const addPlayer = (request, response) => {
    const { name, position, clubname } = request.body
  
    client.query('INSERT INTO players (name, position, clubname) VALUES ($1, $2, $3)', [name, position, clubname], (error, results) => {
      if (error) {
        return error
      }
      else{
        response.status(201).send(`Player has been added has been added `);
      }
    });
};

const updatePlayer = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, position, clubname } = request.body
  
    client.query('UPDATE players SET name = $1, position = $2, clubname = $3 WHERE id = $4',
    [name, position, clubname, id],
      (error, results) => {
        if (error) {
          return error
        }
        else {
            response.status(200).send(`Player with id:${id} has been updated`)
        }
      }
    )
}

const deletePlayer = (request, response) => {
    const id = parseInt(request.params.id)
  
    client.query('DELETE FROM players WHERE id = $1', [id], (error, results) => {
      if (error) {
        return error
      }
      else {
        response.status(200).send(`Player has been deleted with ID: ${results}`)
      }
    });
}

module.exports = {
    getAllPlayers,
    getSinglePlayer,
    addPlayer,
    updatePlayer,
    deletePlayer,
}