# Vid App
An imaginary video app that allows renting and uploading of movies.
## Routing
* default Routes : /api/vidapp/

### Customer(s) Routes : /api/vidapp/customer
- create a customer : POST - /api/vidapp/customer/
- get all customer : GET - /api/vidapp/customer/
- get a customer : GET - /api/vidapp/customer/:id
- update a customer : PUT - /api/vidapp/customer/:id
- delete a customer : DELETE - /api/vidapp/customer/:id


### Movie(s) Routes : /api/vidapp/movies
- create a Movie : POST - /api/vidapp/movies/
- get all movies : GET - /api/vidapp/movies/
- get a movie : GET - /api/vidapp/movies/:id
- update a movie : PUT - /api/vidapp/movies/:id
- delete a movie : DELETE - /api/vidapp/movies/:id


### Rental(s) Routes : /api/vidapp/rentals
- Rent a Movie : POST - /api/vidapp/rentals/:customer-id/:movie-id
- get a rent details : GET - /api/vidapp/rentals/



### Rental(s) Routes : /api/vidapp/genre
- create a genre : POST - /api/vidapp/genre/
- get all genre : GET - /api/vidapp/genre/
- get a genre : GET - /api/vidapp/genre/:genre-id
- update a genre : PUT - /api/vidapp/genre/:genre-id
- delete a genre : DELETE - /api/vidapp/genre/genre-:id
