package com.example.bankprojects.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name ="user",uniqueConstraints = @UniqueConstraint(columnNames = "email"))

public class User {
    public User(String username, String firstName, String lastName, String email, String password, Collection<Role> role) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="username")
    private String username;
    @Column(name="first_name")
    private String firstName;
    @Column(name="last_name")
    private String lastName;
    @Column(name="email")
    private String email;
    @Column(name="password")
    private String password;
    //FetchType.EAGER=>when ever we retrive a user we retrive the role
    //when ever we perform an operation on a parent the child will be affected
    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinTable(
            name="uesrs_roles",
             joinColumns = @JoinColumn(
                    name = "user_id",referencedColumnName = "id"),
                inverseJoinColumns = @JoinColumn(
                    name = "role_id",referencedColumnName = "id")
    )
    private Collection<Role> role;

}
