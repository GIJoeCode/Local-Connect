package com.UATLocalConnect.UATLocalConnect;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "home";  // This should correspond to home.html in your templates directory
    }
}
