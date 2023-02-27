package Hsbcbeducrp.backendsismos.models;
import static java.lang.Math.sqrt;
public class Calculos {
    public float riguidez(float t) {
        float  k;

        k = (float) Math.pow(((2 * Math.PI) / t),2);
        return k;
    }
    public float amortiguamiento(float epsilon, float k) {
        float c, m=1;
        c = (float) (2 * epsilon * sqrt(k * m));
        return  c;
    }
    public float fun_a1(float beta, float at, float gamma, float c ) {
        float a1, m=1;
        a1 = ((1 / (beta * at * at)) * m) + ((gamma / (beta * at)) * c);
        return a1;
    }
    public  float fun_a2(float beta, float at, float gamma, float c ) {
        float a2, m=1;
        a2 = ((1 / (beta * at)) * m) + ((gamma / (beta) - 1) * c);
        return a2;
    }
    public  float fun_a3(float beta, float at, float gamma, float c ) {
        float a3, m=1;
        a3=((1/(2*beta)-1)*(m))+(at*(gamma/(2*beta)-1)*c);
        return a3;
    }
    public  float fun_omega(float k) {
        float omega,  m=1;
        omega = (float) sqrt((k / m));
        return omega;
    }
}
