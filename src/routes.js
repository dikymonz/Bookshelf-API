const addBookHandler = require('./handlers/addBookHandler');
const getBooksHandler = require('./handlers/getBooksHandler');
const getBookByIdHandler = require('./handlers/getBookByIdHandler');
const editBookByIdHandler = require('./handlers/editBookByIdHandler');
const deleteBookByIdHandler = require('./handlers/deleteBookByIdHandler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
