package fr.home.backend.service;

import fr.home.backend.bean.Developer;
import fr.home.backend.repository.DeveloperRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeveloperService {

    @Autowired
    private DeveloperRepository developerRepository;

    public List<Developer> findByAge(int age) {
        return developerRepository.findByAge(age);
    }
}
