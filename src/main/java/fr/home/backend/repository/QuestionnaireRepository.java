package fr.home.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import fr.home.backend.domain.Questionnaire;

public interface QuestionnaireRepository extends MongoRepository<Questionnaire, String> {

}

