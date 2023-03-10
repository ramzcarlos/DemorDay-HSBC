package Hsbcbeducrp.backendsismos.securuty;



import Hsbcbeducrp.backendsismos.models.Usuario;
import Hsbcbeducrp.backendsismos.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findOneByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("El correo no se encontrĂ³"));
        return new UserDetailsImpl(usuario);
    }
}