package com.homework_management.demo1.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class logInController {
    @PostMapping("/login-handler")
    public String handleLogIn(String Username, String Password, Model model) {
        System.out.println("username:" + Username + "; password:" + Password);
        model.addAttribute("Username",Username);
        return "sign-in/success.html";
    }

    @GetMapping("/try")
    public String handleTry(Model model) {
        model.addAttribute("Username", "fucker");
        return "sign-in/success";
    }
}
