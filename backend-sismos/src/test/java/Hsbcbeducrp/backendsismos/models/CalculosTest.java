package Hsbcbeducrp.backendsismos.models;

import static org.junit.jupiter.api.Assertions.*;


import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
class CalculosTest {
    Calculos calculos = new Calculos();
    @Test
    @DisplayName("Prueba del metodo riguidez")
    void reguidezTest(){
        assertEquals(2.4674010276794434, calculos.riguidez(4));
    }

    @Test
    @DisplayName("prueba del metodo amortiguamiento")
    void amortiguamientoTest(){
        assertEquals(0.312870591878891, calculos.amortiguamiento(0.1F,  2.4472F));
    }

    @Test
    @DisplayName("prueba del metodo fun a1")
    void fun_a1Test(){
        assertEquals(0.21736648678779602, calculos.fun_a1(2.36F, 3.12F, 0.25F, 5.12F));
    }
    @Test
    @DisplayName("prueba del metodo fun a2")
    void fun_a2Test(){
        assertEquals(0.21736648678779602, calculos.fun_a1(2.36F, 3.12F, 0.25F, 5.12F));
    }
    @Test
    @DisplayName("prueba del metodo fun a2")
    void fun_a3Test(){
        assertEquals(0.21736648678779602, calculos.fun_a1(2.36F, 3.12F, 0.25F, 5.12F));
    }
}