package com.example.demo.RestProduct;

import com.example.demo.JSONmodels.JsonResult;
import com.example.demo.JSONmodels.Movie;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;


import java.util.*;
import java.util.stream.Stream;

public class RestProducts {

    public static String apikey="6a861b348e17fbff3e9fa4123574fe7e";
    public static String GET_MOVIES_BY_POPULARITY="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&sort_by=popularity.desc";
    public static String GET_MOVIES_MOST_RATED="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&certification_country=US&certification=R&sort_by=vote_average.desc";
    public static String GET_MOVIES_KIDS="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&certification_country=US&certification.lte=G&sort_by=popularity.desc";
    public static String GET_MOVIES_COMEDIES="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&with_genres=35&with_cast=23659&sort_by=revenue.desc";




    static RestTemplate restTemplate=new RestTemplate();
    public static Movie GetMovie(String url) throws JsonProcessingException {
        Movie responseOneMovie = restTemplate.getForObject(url,Movie.class);
        responseOneMovie.poster_path="https://image.tmdb.org/t/p/original"+responseOneMovie.poster_path;
        responseOneMovie.id="http://localhost:8080/moviedetails/"+responseOneMovie.id;
        Movie movie=responseOneMovie;
    return movie;
    }
 public static ArrayList<Movie> GetMovies(String url) throws JsonProcessingException {

       JsonResult responseAllMovies = restTemplate.getForObject(url,JsonResult.class);
       ArrayList<Movie> movies=new ArrayList<>();
       responseAllMovies.results.forEach(movie->movie.poster_path="https://image.tmdb.org/t/p/original"+movie.poster_path);
     responseAllMovies.results.forEach(movie->movie.id="http://localhost:8080/moviedetails/"+movie.id);


     responseAllMovies.results.forEach(movie -> movies.add(movie));

       return movies;
 }
}