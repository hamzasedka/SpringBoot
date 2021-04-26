package com.example.demo.web;
import ch.qos.logback.core.joran.action.IADataForComplexProperty;
import com.example.demo.JSONmodels.Movie;
import com.example.demo.RestProduct.RestProducts;
import com.example.demo.repository.MovieRepository;
import com.example.demo.service.MovieService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/")
public class HomeMoviesPageController {

    @Autowired
    MovieService movieService;
    @Autowired
    MovieRepository movieRpo;
    public ArrayList<Movie> getMovieByPopularity(String url) throws JsonProcessingException {
        return movieService.getMovies(url);
    }
    public Movie getMovieById(String url) throws JsonProcessingException {
        return movieService.getMovie(url);
    }
    @GetMapping("/home")
    public String showMovies(Model model) throws JsonProcessingException {



        ArrayList<Movie>topMovies=new ArrayList<>();
        ArrayList<Movie>MostRatedMovies=new ArrayList<>();
        for (int i=0;i<6;i++){
            topMovies.add(getMovieByPopularity(RestProducts.GET_MOVIES_BY_POPULARITY).get(i));
        }
        for (int i=0;i<6;i++){
            MostRatedMovies.add(getMovieByPopularity(RestProducts.GET_MOVIES_COMEDIES).get(i));
        }
        Movie movie1=MostRatedMovies.get(0);
        Movie movie2=MostRatedMovies.get(1);
        Movie movie3=MostRatedMovies.get(2);
        Movie movie4=MostRatedMovies.get(3);
        Movie movie5=MostRatedMovies.get(4);

        model.addAttribute("movies",topMovies);
        model.addAttribute("movie1",movie1);
        model.addAttribute("movie2",movie2);
        model.addAttribute("movie3",movie3);
        model.addAttribute("movie4",movie4);
        model.addAttribute("movie5",movie5);


        return "home";
    }

    public com.example.demo.model.Movie getOneMovie(String id) throws JsonProcessingException {
        String GET_MOVIE_BY_ID="https://api.themoviedb.org/3/movie/"+id+"?api_key="+RestProducts.apikey;

        Movie JsonMovie=getMovieById(GET_MOVIE_BY_ID);
        com.example.demo.model.Movie movie=new  com.example.demo.model.Movie(
                JsonMovie.id,JsonMovie.original_title,JsonMovie.poster_path,
                JsonMovie.popularity,JsonMovie.vote_average,JsonMovie.vote_count,
                JsonMovie.overview,JsonMovie.release_date,JsonMovie.homepage
        );
        this.movieRpo.save(movie);
        return movie;
    }
    @GetMapping("/moviedetails/{id}")
    public String showMovie(Model model,@PathVariable String id) throws JsonProcessingException {
com.example.demo.model.Movie movie=getOneMovie(id);
        model.addAttribute("movie",movie);
        return "moviedetails";
    }

    @RequestMapping(value = {"myfavorits","myfavorits/{id}"},method = RequestMethod.GET)
    public String showFavoritsMovies(Model model,@PathVariable(name="id",required = false) String id) throws JsonProcessingException {
        if (id!=null) {
            com.example.demo.model.Movie movie=getOneMovie(id);
            movieRpo.delete(movie);
            List<com.example.demo.model.Movie> myMoviess = movieRpo.findAll();
            for(com.example.demo.model.Movie moviee:myMoviess){
                String[] splitTable=movie.id.split("moviedetails");
                moviee.id="http://localhost:8080/myfavorits"+splitTable[1];
            }
            model.addAttribute("mymovies", myMoviess);
            return "myfavorits";

        } else {
            List<com.example.demo.model.Movie> myMovies = movieRpo.findAll();
            for(com.example.demo.model.Movie movie:myMovies){
               String[] splitTable=movie.id.split("moviedetails");
               movie.id="http://localhost:8080/myfavorits"+splitTable[1];
            }
            model.addAttribute("mymovies", myMovies);
            return "myfavorits";
        }
    }
}

