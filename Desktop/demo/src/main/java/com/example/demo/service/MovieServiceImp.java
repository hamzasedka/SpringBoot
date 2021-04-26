package com.example.demo.service;

import com.example.demo.JSONmodels.Movie;
import com.example.demo.RestProduct.RestProducts;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
@Service
public class MovieServiceImp implements MovieService {
    @Override
    public ArrayList<Movie> getMovies(String url) throws JsonProcessingException {
        return RestProducts.GetMovies(url);
    }

    @Override
    public Movie getMovie(String url) throws JsonProcessingException {
        return RestProducts.GetMovie(url);
    }


}
