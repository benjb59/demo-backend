package fr.home.backend.controller;

import java.net.URI;
import java.net.URISyntaxException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * API de référencement
 */

@RestController
public class RedirectController {
    /**
     * Ce controleur répond à https://entreprises.stat-publique.fr/visualiser/{enquete}/idQuestionnaire
     */
    @GetMapping("/visualiser/{enquete}/idQuestionnaire")
    public ResponseEntity<String> visualiser(@PathVariable("enquete") String enquete)
            throws URISyntaxException {

        final String DOMAIN_ORBEON = getDomaineOrbeonByEnquete(enquete); //table de correspondance enqueteXdomaine

        if (DOMAIN_ORBEON == null){ //pas de correspondance trouvée
            return ResponseEntity
                        .status(HttpStatus.NOT_FOUND)
                            .build();
        } else { //correspondance trouvée -> redirect vers https://nom_de_domaine_orbeon/search?q={enquete}
            return ResponseEntity
                        .status(HttpStatus.FOUND)
                            .location(new URI(DOMAIN_ORBEON + "/search?q=" + enquete))
                                .build();
        }
    }

    private String getDomaineOrbeonByEnquete(String enquete){

        final String DOMAINE_ORBEON_A = "https://www.google.fr";
        final String DOMAINE_ORBEON_B = "https://www.google.com";

        switch (enquete) {
            case "acemo":
                return DOMAINE_ORBEON_A;
            case "esa":
                return DOMAINE_ORBEON_B;
            default:
                return null;
        }
    }
}
