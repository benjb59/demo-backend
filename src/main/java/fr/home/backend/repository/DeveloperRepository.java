package fr.home.backend.repository;

import fr.home.backend.bean.Developer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DeveloperRepository extends MongoRepository<Developer, String> {
    List<Developer> findByAge(@Param("age") int age);
}
