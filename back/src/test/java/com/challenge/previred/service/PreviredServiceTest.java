package com.challenge.previred.service;

import com.challenge.previred.entity.AppUser;
import com.challenge.previred.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;

import org.mockito.*;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import java.util.List;
import java.util.Optional;


class PreviredServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private PreviredService previredService;

    private AppUser user;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        user = new AppUser();
        user.setId(1L);
        user.setNames("Juan Pérez");
        user.setEmail("juan.perez@example.com");
    }

    @Test
    void testGetAllUser() {
        when(userRepository.findAll()).thenReturn(List.of(user));

        List<AppUser> users = previredService.getAllUser();

        assertNotNull(users);
        assertEquals(1, users.size());
        assertEquals("Juan Pérez", users.get(0).getNames());
    }

    @Test
    void testGetUserById_UserFound() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));

        AppUser foundUser = previredService.getUserById(1L);

        assertNotNull(foundUser);
        assertEquals("Juan Pérez", foundUser.getNames());
    }

    @Test
    void testGetUserById_UserNotFound() {
        when(userRepository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> previredService.getUserById(1L));
    }

    @Test
    void testSaveUser() {
        when(userRepository.save(user)).thenReturn(user);

        previredService.saveUser(user);

        verify(userRepository, times(1)).save(user);
    }

    /*
    @Test
    void testUpdateUser() throws Exception {

        when(userRepository.save(user)).thenReturn(user);

        previredService.updateUser(user, 1L);

        verify(userRepository, times(1)).save(user);
    }


    @Test
    void testDeleteUser() throws Exception {
        previredService.deleteUser(1L);

        verify(userRepository, times(1)).deleteById(1L);
    }

     */


}
