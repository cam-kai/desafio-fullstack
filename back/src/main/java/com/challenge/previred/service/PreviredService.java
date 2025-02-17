package com.challenge.previred.service;

import com.challenge.previred.entity.AppUser;
import com.challenge.previred.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.List;
import java.util.Optional;

@Service
@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
public class PreviredService {

    @Autowired
    private UserRepository userRepository;

    public List<AppUser> getAllUser(){

        return (List<AppUser>) userRepository.findAll();
    }

    public AppUser getUserById(Long id){
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado con el id: " + id));
    }

    @Transactional
    public void saveUser(AppUser user){

        Assert.notNull(user, "El usuario no puede ser nulo");

        userRepository.save(user);
    }


    public void  updateUser(AppUser user, Long id) throws Exception {
        Optional<AppUser> userDB = userRepository.findById(id);

        if(userDB.get().getId() != null) {
            user.setId(id);
            userRepository.save(user);
        } else {
            throw new Exception("No se ha encontrado el usuario");
        }

    }

    @Transactional
    public void deleteUser(Long id) throws Exception {
        Optional<AppUser> userDB = userRepository.findById(id);

        if(userDB.get().getId() != null) {
            userRepository.deleteById(id);

        } else {
            throw new Exception("No existe usuario que se desea eliminar");
        }
    }
}
