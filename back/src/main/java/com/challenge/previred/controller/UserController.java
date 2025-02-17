package com.challenge.previred.controller;

import com.challenge.previred.entity.AppUser;
import com.challenge.previred.service.PreviredService;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.models.annotations.OpenAPI30;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(path = "/api/user", produces = MediaType.APPLICATION_JSON_VALUE)
@Validated
@CrossOrigin
public class UserController {

    @Autowired
    private PreviredService service;

    @GetMapping()
    public List<AppUser> getAllUsers() {
        return  service.getAllUser();
    }

    @GetMapping("/{id}")
    public AppUser getUserById(@PathVariable("id") Long id) {
        return  service.getUserById(id);
    }

    @PostMapping()
    public void addUser(@RequestBody @Valid AppUser user) {
        service.saveUser(user);

    }

    @PutMapping("/{id}")
    public void updateUser(@RequestBody @Valid AppUser user, @PathVariable("id") Long id) throws Exception {
        service.updateUser(user, id);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") Long id) throws Exception {
        service.deleteUser(id);
    }
}
