package fr.home.backend.controller;

import fr.home.backend.bean.Developer;
import fr.home.backend.service.DeveloperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DeveloperController {

    @Autowired
    private DeveloperService developerService;

    @GetMapping("/findByAge")
    public List<Developer> findByAge(
            @RequestParam("age") int age) {

        return developerService.findByAge(age);

    }

}