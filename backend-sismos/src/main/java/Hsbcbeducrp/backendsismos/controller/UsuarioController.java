package Hsbcbeducrp.backendsismos.controller;

import Hsbcbeducrp.backendsismos.models.Usuario;
import Hsbcbeducrp.backendsismos.repository.IUsuarioRepository;
import Hsbcbeducrp.backendsismos.usuarios.excepciones.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200/")
public class UsuarioController {
    @Autowired
    private IUsuarioRepository repository;
    // Este metodo sirve para listar todos los usuarios
    @GetMapping("/usuarios")
    public List<Usuario> listarTodosLosUsuarios(){

        return repository.findAll();
    }

    // este metodo sirve para guardar el usuario
    @PostMapping("/usuarios")
    public  Usuario guardarUsuario(@RequestBody Usuario usuario){
        return repository.save(usuario);
    }



    // este metodo sirve para buscar a un usuario por ID
    @GetMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> obtenerUsuarioPorId(@PathVariable Long id){
        Usuario usuario = repository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("No existe el usuario con el el ID: "+ id));
        return  ResponseEntity.ok(usuario);
    }



    // este metetodo sirve para actualizar un usuario por ID
    @PutMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> actualizarUsuario(@PathVariable Long id, @RequestBody Usuario detallesUsuario){
        Usuario usuario = repository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("No existe el usuario con el el ID: "+ id));

        usuario.setNombre(detallesUsuario.getNombre());
        usuario.setApellido(detallesUsuario.getApellido());
        usuario.setEmail(detallesUsuario.getEmail());
        usuario.setUsername(detallesUsuario.getUsername());
        usuario.setPass(detallesUsuario.getPass());
        Usuario usuarioActualizado = repository.save(usuario);
        return  ResponseEntity.ok(usuarioActualizado);
    }

    //este metodo sirve para eliminar un empleado
    @DeleteMapping("/usuarios/{id}")
    public ResponseEntity<Map<String,Boolean>> eliminarUsuario(@PathVariable Long id){
        Usuario usuario = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe el usuario con el ID : " + id));

        repository.delete(usuario);
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminar",Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }

}
