package Hsbcbeducrp.backendsismos.controller;

import Hsbcbeducrp.backendsismos.models.Sismos;
import Hsbcbeducrp.backendsismos.repository.ISismosRepository;
import Hsbcbeducrp.backendsismos.usuarios.excepciones.ResourceNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200/")
public class SismosController {
    @Autowired
    private ISismosRepository repository;

    //Metodo para listar todos los sismos de la BD
    @GetMapping("/sismos")
    public List<Sismos> listarTodosLosSismos(){
        log.info("Entra a la funcion listar sismos");
        return  repository.findAll();
    }

    //Metodo para guardar nuevos registros de sismos
    @PostMapping("/sismos")
    public Sismos guardarSismos(@RequestBody Sismos sismos){
        log.info("Ingresa a la funcion registrar sismos");
        return  repository.save(sismos);
    }


    //Metodo que busca el sismos por ID
    @GetMapping("sismos/{id}")
    public ResponseEntity<Sismos>obtenerSismosPorId(@PathVariable Long id){
        log.info("Ingresa a la funcion busca sismos por id");
        Sismos sismos = repository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("No existe el sismo con ID: "+id));
        return  ResponseEntity.ok(sismos);
    }

    //Metodo para actualizar info de un sismo por ID
    @PutMapping("sismos/{id}")
    public  ResponseEntity<Sismos> actualizarSismos(@PathVariable Long id, @RequestBody Sismos detallesSismos){
        log.info("Ingresa a la funcion actualizar sismos");
     Sismos sismos = repository.findById(id)
             .orElseThrow(()-> new ResourceNotFoundException("No existe sismo con ID: "+id));
     sismos.setDescripcion(detallesSismos.getDescripcion());
     sismos.setCountry(detallesSismos.getCountry());
     sismos.setTown(detallesSismos.getTown());
     sismos.setYear(detallesSismos.getYear());
     sismos.setMounth(detallesSismos.getMounth());
     sismos.setDay(detallesSismos.getDay());
     sismos.setImg(detallesSismos.getImg());
     Sismos sismosActualizado = repository.save(sismos);

     return  ResponseEntity.ok(sismosActualizado);

    }

    //Metodo para eliminar un sismos

    @DeleteMapping("/sismos/{id}")
    public  ResponseEntity<Map<String, Boolean>> eliminarSismos(@PathVariable Long id ){
        log.info("ingresa a la funcion eliminar sismos");
        Sismos sismos = repository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("no eciste el sismo con ID: "+id));

        repository.delete(sismos);
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminar", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }




}
