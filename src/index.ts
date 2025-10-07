import { Elysia } from 'elysia'
import { apollo } from '@elysiajs/apollo'
import { BookController, AuthorController } from './controllers'
import { typeDefs } from './schema'

const bookController = new BookController()
const authorController = new AuthorController()

const app = new Elysia()
	.use(
		apollo({
			typeDefs,
			resolvers: {
				Query: {
					books: () => bookController.getBooks(),
					bookByTitle: (_: any, { title }: { title: string }) => 
						bookController.getBookByTitle(title),
					authors: () => authorController.getAuthors(),
					authorByName: (_: any, { name }: { name: string }) => 
						authorController.getAuthorByName(name)
				},
				Mutation: {
					addBook: (_: any, { input }: { input: { title: string; author: string } }) => 
						bookController.addBook(input),
					addAuthor: (_: any, { input }: { input: { name: string } }) => 
						authorController.addAuthor(input)
				}
			}
		})
	)
	.listen(3000)

console.log(
  `
  🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}
  GraphQL Playground: ${app.server?.hostname}:${app.server?.port}/graphql
  `
);
