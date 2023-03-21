// const express = require('express');
// const router = require('./routes');

// const app = express();
// app.use(express.json());
// app.use(router);

// app.listen(8080, () => {
//   console.log('Server is running on port 8080');
// });

////////////////////////////////////////////
const express = require('express');
const knex = require('./db/db');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/users', (req, res) => {
  // knex('users')
  //   .insert({
  //     first_name: 'Raul',
  //     last_name: 'Smith',
  //   })
  //   .then(() => {
  //     knex
  //       .select()
  //       .from('users')
  //       .then((users) => {
  //         res.send(users);
  //       });
  //   });

  knex
    .raw('insert into users (first_name, last_name) values (?, ?)', [
      'Benny',
      'theBULL',
    ])
    .then(() => {
      knex
        .select()
        .from('users')
        .then((users) => {
          res.send(users);
        });
    });
});

app.put('/users', (req, res) => {
  knex('users')
    .where('id', 1)
    .update({ last_name: 'ChaCha' })
    .then(() => {
      knex
        .select()
        .from('users')
        .then((users) => {
          res.send(users);
        });
    });
});

app.delete('/users', (req, res) => {
  knex('users')
    .where('id', 1)
    .del()
    .then(() => {
      knex
        .select()
        .from('users')
        .then((users) => {
          res.send(users);
        });
    });
});

// PARAMATERIZED QUEIRIES:
app.get('/users', (req, res) => {
  // knex
  //   .select()
  //   .from('users')
  //   .then((users) => {
  //     res.send(users);
  //   });

  knex.raw('select * from users').then((users) => {
    res.send(users);
  });
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
