const books = require('../books');

// Handler untuk menghapus buku berdasarkan ID
const deleteBookByIdHandler = (request, h) => {
  const { id } = request.params;

  // Mencari index buku dengan ID yang sesuai dalam array 'books'
  const index = books.findIndex((book) => book.id === id);

  // Jika buku dengan ID yang sesuai ditemukan, hapus buku dari array 'books'
  if (index !== -1) {
    books.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
    response.code(200);

    return response;
  }

  // Jika buku dengan ID yang sesuai tidak ditemukan, kirim respons buku tidak ditemukan
  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);

  return response;
};

module.exports = deleteBookByIdHandler;
