package fr.home.backend.domain;

import org.json.simple.JSONObject;
import org.springframework.data.annotation.Id;

public class Questionnaire {

    @Id
    private String id;

    private JSONObject data;

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public JSONObject getData() {
        return this.data;
    }

    public void setData(JSONObject data) {
        this.data = data;
    }
    
}
