# Requirements

1. Docker
2. Nodejs
3. Postman

# Setup
1. Clone the repo.
2. Run the following commands one after the other in the root of the project to build and run the DB:
```shell
docker build -f db/Dockerfile -t movie/postgresdb .
```
```shell
docker container run --name movie-postgresdb -d movie/postgresdb
```
3. Install node dependancies. Run `npm i` in the `webapp/APIHelper` folder and the `webapp` folder
```shell
cd webapp/APIHelper
npm i
cd webapp
npm i
```
4. Go to the webapp folder and run the following command for the server to start.
```shell
node index.js
```
5. Through postman, call the api end point `http://localhost:9000/v1/movie/{{id}}`.
6. You can add some data into to the DB for testing like the following:
```shell
INSERT INTO public.movies (name, image_url, language, overview, release_date)
VALUES ('Movie Name', 'https://imageurlexample.com', 'english', 'overview of the movie', '2022-12-15')
```
