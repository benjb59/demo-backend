package fr.home.backend.controller;

import java.net.URI;
import java.net.URISyntaxException;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import fr.home.backend.entities.Reference;

/**
 * API de référencement
 */

@RestController
public class RedirectController {
    /**
     * Répondrait à https://entreprises.stat-publique.fr/visualiser/{enquete}/idQuestionnaire
     */
    @GetMapping("/visualiser/{enquete}/idQuestionnaire")
    public ResponseEntity<String> visualiser(@PathVariable("enquete") String enquete)
            throws URISyntaxException {

        final String DOMAINE_ORBEON = getReferenceByEnquete(enquete).getDomaineOrbeon(); //table de correspondance enqueteXdomaine

        if (DOMAINE_ORBEON == null){ //pas de correspondance trouvée
            return ResponseEntity
                        .status(HttpStatus.NOT_FOUND)
                            .build();
        } else { //correspondance trouvée -> redirect vers https://nom_de_domaine_orbeon/search?q={enquete}
            return ResponseEntity
                        .status(HttpStatus.FOUND)
                            .location(new URI(DOMAINE_ORBEON + "/search?q=" + enquete))
                                .build();
        }
    }

    /**
     * Répondrait à https://entreprises.stat-publique.fr/api/references/{enquete}
     */
    @GetMapping(value = "/api/references/{enquete}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Reference> getReference(@PathVariable("enquete") String enquete) {
        final Reference er = getReferenceByEnquete(enquete);
        return new ResponseEntity<Reference>(er, HttpStatus.OK);
    }

    private Reference getReferenceByEnquete(String enquete){

        final String DOMAINE_ORBEON_A = "https://www.google.fr";
        final String DOMAINE_EXIST_A = "https://www.duckduckgo.com";

        final String DOMAINE_ORBEON_B = "https://www.google.com";
        final String DOMAINE_EXIST_B = "https://www.qwant.com";

        switch (enquete) {
            case "acemo":
                return new Reference(enquete, DOMAINE_ORBEON_A, DOMAINE_EXIST_A);
            case "esa":
                return new Reference(enquete, DOMAINE_ORBEON_B, DOMAINE_EXIST_B);
            default:
                return null;
        }
    }
}
