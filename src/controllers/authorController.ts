import { AuthorService, Author } from '../services/authorService'

export class AuthorController {
	private authorService: AuthorService

	constructor() {
		this.authorService = new AuthorService()
	}

	async getAuthors(): Promise<Author[]> {
		try {
			return await this.authorService.getAllAuthors()
		} catch (error) {
			console.error('Error fetching authors:', error)
			throw new Error('Failed to fetch authors')
		}
	}

	async getAuthorByName(name: string): Promise<Author | null> {
		try {
			return await this.authorService.getAuthorByName(name)
		} catch (error) {
			console.error('Error fetching author by name:', error)
			throw new Error('Failed to fetch author')
		}
	}

	async addAuthor(authorData: { name: string }): Promise<Author> {
		try {
			return await this.authorService.addAuthor(authorData)
		} catch (error) {
			console.error('Error adding author:', error)
			throw new Error('Failed to add author')
		}
	}
}
