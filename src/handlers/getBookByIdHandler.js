const books = require('../books');

// Handler untuk mendapatkan informasi buku berdasarkan ID
const getBookByIdHandler = (request, h) => {
  const { id } = request.params;
  const book = books.filter((b) => b.id === id)[0];

  if (book !== undefined) {
    // Jika buku dengan ID yang sesuai ditemukan, kirim respons dengan informasi buku
    return {
      status: 'success',
      data: {
        book,
      },
    };
  }

  // Jika buku dengan ID yang sesuai tidak ditemukan, kirim respons buku tidak ditemukan
  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);

  return response;
};

module.exports = getBookByIdHandler;
