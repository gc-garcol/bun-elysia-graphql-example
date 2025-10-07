import { gql } from '@elysiajs/apollo'

export const typeDefs = gql`
	type Book {
		title: String
		author: String
	}

	type Author {
		name: String
	}

	input BookInput {
		title: String!
		author: String!
	}

	input AuthorInput {
		name: String!
	}

	type Query {
		books: [Book]
		bookByTitle(title: String!): Book
		authors: [Author]
		authorByName(name: String!): Author
	}

	type Mutation {
		addBook(input: BookInput!): Book
		addAuthor(input: AuthorInput!): Author
	}
`
