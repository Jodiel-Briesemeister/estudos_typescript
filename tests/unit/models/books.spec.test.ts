import BooksModel from '../../../models/book.model';
import connection from '../../../models/connection';

const executeMock = jest.fn((query: any):Promise<any> => { return query })
connection.execute = executeMock;

describe('books model', () => {
  describe('getAll', () => {
    it('calls query correctly', async () => {
      const model = new BooksModel(connection);
      await model.getAll();

      expect(connection.execute).toHaveBeenCalledWith('SELECT * FROM books')
    })
  })

  describe('getById', () => {
    it('calls query correctly', async () => {
      const model = new BooksModel(connection);
      const bookId = 1;
      await model.getById(bookId);

      expect(connection.execute).toHaveBeenCalledWith('SELECT * FROM books WHERE id=?', [1])
    })
  })

  describe('create', () => {
    it('calls query correctly', async () => {
      const model = new BooksModel(connection);
      const bookMock = {
        title: 'book title',
        price: 145,
        author: 'book author',
        isbn: 'book rg'
      };
      const params = Object.values(bookMock);
      await model.create(bookMock);

      expect(connection.execute).toHaveBeenCalledWith
      ('INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)', params)
    })
  })
})
