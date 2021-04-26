package com.example.demo.service;

import com.example.demo.JSONmodels.Movie;
import com.fasterxml.jackson.core.JsonProcessingException;

import java.util.ArrayList;

public interface MovieService {
   ArrayList<Movie> getMovies(String url) throws JsonProcessingException;
   Movie getMovie(String url) throws JsonProcessingException;

}
