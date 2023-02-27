package Hsbcbeducrp.backendsismos.models;

import jakarta.persistence.*;
import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name =" Usuariossismos")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="nombre", length = 60, nullable = false)
    private String nombre;
    @Column(name="apellido", length = 60, nullable = false)
    private String apellido;
    @Column(name="correo", nullable = false, unique = true)
    private String email;
    @Column(name="username", nullable = false, unique = true)
    private String username;

    @Column(name="pass")
    private String pass;

    @Column(name = "rol")
    private String rol;



}
