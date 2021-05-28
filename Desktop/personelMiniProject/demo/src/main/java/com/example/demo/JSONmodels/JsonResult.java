package com.example.demo.JSONmodels;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties
public class JsonResult {
    public String page;
    public List<Movie> results;
}
