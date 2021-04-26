package com.example.demo.JSONmodels;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties
public class Movie {
    public String id;
    public String original_title;
    public String poster_path;
    public String popularity;
    public String vote_average;
    public String vote_count;
    public String overview;
    public String release_date;
    public String homepage;

}
