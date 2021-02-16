package fr.home.backend.domain;

import org.json.simple.JSONObject;
import org.springframework.data.annotation.Id;

public class Questionnaire {

    @Id
    private long id;

    private JSONObject data;

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public JSONObject getData() {
        return this.data;
    }

    public void setData(JSONObject data) {
        this.data = data;
    }

}
