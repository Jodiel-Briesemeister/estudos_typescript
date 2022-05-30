"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_model_1 = __importDefault(require("../../../models/book.model"));
const connection_1 = __importDefault(require("../../../models/connection"));
const executeMock = jest.fn((query) => { return query; });
connection_1.default.execute = executeMock;
describe('books model', () => {
    describe('getAll', () => {
        it('calls query correctly', () => __awaiter(void 0, void 0, void 0, function* () {
            const model = new book_model_1.default(connection_1.default);
            yield model.getAll();
            expect(connection_1.default.execute).toHaveBeenCalledWith('SELECT * FROM books');
        }));
    });
    describe('getById', () => {
        it('calls query correctly', () => __awaiter(void 0, void 0, void 0, function* () {
            const model = new book_model_1.default(connection_1.default);
            const bookId = 1;
            yield model.getById(bookId);
            expect(connection_1.default.execute).toHaveBeenCalledWith('SELECT * FROM books WHERE id=?', [1]);
        }));
    });
    describe('create', () => {
        it('calls query correctly', () => __awaiter(void 0, void 0, void 0, function* () {
            const model = new book_model_1.default(connection_1.default);
            const bookMock = {
                title: 'book title',
                price: 145,
                author: 'book author',
                isbn: 'book rg'
            };
            const params = Object.values(bookMock);
            yield model.create(bookMock);
            expect(connection_1.default.execute).toHaveBeenCalledWith('INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)', params);
        }));
    });
});
