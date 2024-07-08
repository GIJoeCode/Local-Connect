package com.UATLocalConnect.UATLocalConnect.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/services")
public class ServicesController {

    @GetMapping
    public String showServices() {
        return "services"; // Path to the services HTML file
    }
}