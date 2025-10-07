import { BookService, Book } from '../services/bookService'

export class BookController {
	private bookService: BookService

	constructor() {
		this.bookService = new BookService()
	}

	async getBooks(): Promise<Book[]> {
		try {
			return await this.bookService.getAllBooks()
		} catch (error) {
			console.error('Error fetching books:', error)
			throw new Error('Failed to fetch books')
		}
	}

	async getBookByTitle(title: string): Promise<Book | null> {
		try {
			return await this.bookService.getBookByTitle(title)
		} catch (error) {
			console.error('Error fetching book by title:', error)
			throw new Error('Failed to fetch book')
		}
	}

	async addBook(bookData: { title: string; author: string }): Promise<Book> {
		try {
			return await this.bookService.addBook(bookData)
		} catch (error) {
			console.error('Error adding book:', error)
			throw new Error('Failed to add book')
		}
	}
}
