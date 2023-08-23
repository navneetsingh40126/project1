package com.company.user.controller;

import com.company.user.model.User;
import com.company.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserService userService;
    @RequestMapping(method = RequestMethod.GET,value = "/users")
    public List<User> getAllUsers(){return  userService.getAllusers();}
    @RequestMapping(method = RequestMethod.POST,value = "/users")
    public User createuser(@RequestBody User user){return userService.createuser(user);}
}
