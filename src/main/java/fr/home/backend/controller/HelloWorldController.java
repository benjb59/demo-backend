package fr.home.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @GetMapping("/hello")
    public ResponseEntity<String> hello() {
        String response = "Hello world !";
        return ResponseEntity.ok(response);
    }
}
