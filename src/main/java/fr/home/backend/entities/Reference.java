package fr.home.backend.entities;

/**
 * Reference
 */
public class Reference {

    private String enquete;
    private String domaineOrbeon;
    private String domaineExist;
    
    public Reference(String enquete, String domaineOrbeon, String domaineExist){
        this.enquete = enquete;
        this.domaineOrbeon = domaineOrbeon;
        this.domaineExist = domaineExist;
    }

    public String getEnquete() {
        return this.enquete;
    }

    public void setEnquete(String enquete) {
        this.enquete = enquete;
    }

    public String getDomaineExist() {
        return this.domaineExist;
    }

    public void setDomaineExist(String domaineExist) {
        this.domaineExist = domaineExist;
    }

    public String getDomaineOrbeon() {
        return this.domaineOrbeon;
    }

    public void setDomaineOrbeon(String domaineOrbeon) {
        this.domaineOrbeon = domaineOrbeon;
    }
}