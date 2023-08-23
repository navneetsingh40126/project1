package com.company.user.controller;

import com.company.user.model.User;
import com.company.user.repository.UserRepository;
import com.company.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@CrossOrigin(origins = "*")
public class LoginController {
    @Autowired
    private UserRepository userRepository;

    @RequestMapping(method = RequestMethod.POST, value = "/Login")
    public Optional<User> validateUser(@RequestBody User user){
        Optional<User> LoggedInUser=userRepository.findById(user.getEmail());
        if(LoggedInUser.isPresent()){
            if (user.getPassword().equals(LoggedInUser.get().getPassword())){
                return LoggedInUser;
            }
            else{

                return Optional.empty();
            }
//
        }
        return Optional.empty();
    }
}
