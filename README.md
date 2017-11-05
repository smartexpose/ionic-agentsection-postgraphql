# ionic-agentsection-postgraphql

GraphQL server to access schema in PostgreSQL database.
If the source database is MySQL, it can be easily migrated to PostgreSQL with `nmig`.

## Installation

**Install `postgraphql`**

```
$ npm install -g postgraphql
# check that postgraphql works
$ postgraphql --help
```

**Install `nmig` to migrate MySQL database to PostgreSQL**
```
$ git clone ionic-agentsection-postgraphql
$ cd nmig

# edit config.json => exclude_tables according to the MySQL database
$ npm install
````

**Create PostgreSQL database**
```
$ createdb smartexpose_presentation;
```

**Migrate MySQL database to PostgreSQL**
```
$ npm start
```


## Run server
```
postgraphql \
  --connection postgres://maximilianosuster@localhost:5432/smartexpose_presentation \
  --schema public
```

## Run queries on GraphiQL tool
Go to [http://localhost:5000/graphiql](http://localhost:5000/graphiql)

## pgAdmin or psql troubleshooting

- `template 1 is being used`
```
$ sudo ps aux|grep template 1
#  get the process_id
$ sudo kill -9 process_id
```

References:
- https://github.com/AnatolyUss/nmig
- https://github.com/postgraphql/postgraphql