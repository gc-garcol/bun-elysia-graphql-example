export interface Book {
	title: string
	author: string
}

export class BookService {
	private books: Book[] = [
		{
			title: 'Elysia',
			author: 'saltyAom'
		}
	]

	async getAllBooks(): Promise<Book[]> {
		// Simulate async operation
		return Promise.resolve(this.books)
	}

	async getBookByTitle(title: string): Promise<Book | null> {
		const book = this.books.find(b => b.title.toLowerCase() === title.toLowerCase())
		return Promise.resolve(book || null)
	}

	async addBook(book: Omit<Book, 'id'>): Promise<Book> {
		const newBook: Book = {
			title: book.title,
			author: book.author
		}
		this.books.push(newBook)
		return Promise.resolve(newBook)
	}
}
