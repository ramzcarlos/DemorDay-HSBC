package Hsbcbeducrp.backendsismos.models;

import jakarta.persistence.*;
import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name = "Sismos")
public class Sismos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "descripcion", length = 100, nullable = false)
    private String descripcion;
    @Column(name = "country", length = 50, nullable = false)
    private String country;
    @Column(name = "town", length = 50, nullable = false)
    private String town;
    @Column(name = "year", length = 4, nullable = false)
    private int year;
    @Column(name = "mounth", length = 2, nullable = false)
    private int mounth;

    @Column(name = "day", length = 2, nullable = false)
    private int day;
    @Column(name = "img")
    private  String img;


}
