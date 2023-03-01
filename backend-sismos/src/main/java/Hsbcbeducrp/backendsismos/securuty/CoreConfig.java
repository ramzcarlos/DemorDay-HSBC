package Hsbcbeducrp.backendsismos.securuty;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
@Configuration
public class CoreConfig {

    @Bean
    public WebMvcConfigurer coreConfigurer(){
        return  new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry){
                registry.addMapping("/login")
                                .allowedOrigins("http://localhost:4200")
                                        .allowedMethods("*")
                                                .exposedHeaders("*");


                registry.addMapping("/api/v1/**")
                        .allowedOrigins("http://localhost:4200")
                        .allowedOrigins("*");

            }

        };
    }
}
