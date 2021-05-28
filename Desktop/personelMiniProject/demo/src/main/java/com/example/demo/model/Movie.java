package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name ="Movie")
@AllArgsConstructor
@NoArgsConstructor
public class Movie {
    @Id
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
