#

##

Add book
```shell
curl --location 'http://localhost:3000/graphql' \
--header 'Accept-Encoding: gzip, deflate, br' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Connection: keep-alive' \
--header 'DNT: 1' \
--header 'Origin: http://localhost:3000' \
--data '{"query":"mutation {\n  addBook(input: {\n    title: \"New Book\"\n    author: \"New Author\"\n  }) {\n    title\n    author\n  }\n}","variables":{}}'
```

All data
```shell
curl --location 'http://localhost:3000/graphql' \
--header 'Accept-Encoding: gzip, deflate, br' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Connection: keep-alive' \
--header 'DNT: 1' \
--header 'Origin: http://localhost:3000' \
--data '{"query":"query GetAllData {\n  books {\n    title\n    author\n  }\n  authors {\n    name\n  }\n}","variables":{}}'
```

Book by title
```shell
curl --location 'http://localhost:3000/graphql' \
--header 'Accept-Encoding: gzip, deflate, br' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Connection: keep-alive' \
--header 'DNT: 1' \
--header 'Origin: http://localhost:3000' \
--data '{"query":"query {\n    bookByTitle(title: \"Elysia\") {\n        title,\n        author\n    }\n}","variables":{}}'
```

All books
```shell
curl --location 'http://localhost:3000/graphql' \
--header 'Accept-Encoding: gzip, deflate, br' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Connection: keep-alive' \
--header 'DNT: 1' \
--header 'Origin: http://localhost:3000' \
--data '{"query":"query {\n    books {\n        title,\n        author\n    }\n}","variables":{}}'
```
