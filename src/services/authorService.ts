export interface Author {
	name: string
}

export class AuthorService {
	private authors: Author[] = [
		{
			name: 'saltyAom'
		},
		{
			name: 'J.K. Rowling'
		},
		{
			name: 'George R.R. Martin'
		}
	]

	async getAllAuthors(): Promise<Author[]> {
		// Simulate async operation
		return Promise.resolve(this.authors)
	}

	async getAuthorByName(name: string): Promise<Author | null> {
		const author = this.authors.find(a => a.name.toLowerCase() === name.toLowerCase())
		return Promise.resolve(author || null)
	}

	async addAuthor(author: Author): Promise<Author> {
		const newAuthor: Author = {
			name: author.name
		}
		this.authors.push(newAuthor)
		return Promise.resolve(newAuthor)
	}
}
