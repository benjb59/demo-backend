package fr.home.backend.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @Value("${fr.home.backend.message}")
    private String message;

    @GetMapping("/idQuestionnaire")
    public ResponseEntity<String> visualiser() {
        return ResponseEntity.ok(message);
    }
}
