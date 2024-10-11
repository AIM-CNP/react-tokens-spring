# Voorbeeld React en fetch calls met Cors

In de MovieController van de applicatie "NoYouMayNot" staat een Cors annotatie:

```java
package han.aim.se.noyoumaynot.movie.controller;

import han.aim.se.noyoumaynot.movie.domain.Movie;
import han.aim.se.noyoumaynot.movie.service.AuthenticationService;
import han.aim.se.noyoumaynot.movie.service.MovieService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173") // deze regel
@RequestMapping("/api")
@AllArgsConstructor
public class MovieController {
    private final MovieService movieService;
    private final AuthenticationService authenticationService;

    @PostMapping("/auth/login")
    public ResponseEntity<JwtAuthResponse> login(@RequestBody LoginDTO loginDto){
        String token = authenticationService.login(loginDto);

        JwtAuthResponse jwtAuthResponse = new JwtAuthResponse();
        jwtAuthResponse.setAccessToken(token);

        return new ResponseEntity<>(jwtAuthResponse, HttpStatus.OK);
    }

    @GetMapping("/movies")
    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    public List<Movie> getAllMovies() {
        return movieService.getMovieList();
    }

    @GetMapping("/movies/show")
    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    public Movie getMovieById(@RequestParam("id") String id) {
        return movieService.getMovieById(id);
    }

    @PostMapping("/movies/add")
    @PreAuthorize("hasRole('ADMIN')")
    public Movie addMovie(@RequestBody Movie movie) {
        movieService.insertMovie(movie);
        return movie;
    }

    @DeleteMapping("/movies/delete/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deleteMovie(@PathVariable("id") String id) {
        movieService.deleteMovie(id);
        return ResponseEntity.ok().build();
    }
}
```

In de file [src/api-functions.js](./src/api-functions.js) staat een voorbeeld van hoe je een token ophaalt en gebruikt in een volgende request.

In de applicatie is een klein voorbeeld van hoe je dan de data kan ophalen op basis van die token.

De token moet dan wel opgeslagen worden in sessionStorage, dat gebeurt nu niet.
