package lab.app;

import jakarta.ws.rs.client.Client;
import jakarta.ws.rs.client.ClientBuilder;
import jakarta.ws.rs.client.Entity;
import jakarta.ws.rs.core.GenericType;
import jakarta.ws.rs.core.MediaType;
import lab.entities.Complaint;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        Client client = ClientBuilder.newClient();
        String status =
                client.target("http://localhost:8080/Server-1.0-SNAPSHOT/" +
                                "api/complaints/351/status")
                        .request(MediaType.TEXT_PLAIN)
                        .get(String.class);

        System.out.println("Status: " + status);

        List<Complaint> complaints = client.target("http://localhost:8080/Server-1.0-SNAPSHOT/" +
                        "api/complaints")
                .request(MediaType.APPLICATION_JSON)
                .get(new GenericType<List<Complaint>>() {});

        System.out.println(complaints);

        Complaint complaint = client.target("http://localhost:8080/Server-1.0-SNAPSHOT/" +
                        "api/complaints")
                .queryParam("status", "open")
                .request(MediaType.APPLICATION_JSON)
                .get(new GenericType<List<Complaint>>() {}).get(0);
        System.out.println(complaint);

        complaint.setStatus("close");
        client.target("http://localhost:8080/Server-1.0-SNAPSHOT/" +
                        "api/complaints")
                .path("{id}")
                .resolveTemplate("id", complaint.getId())
                .request(MediaType.APPLICATION_JSON)
                .put(Entity.json(complaint), Complaint.class);

        List<Complaint> openComp = client.target("http://localhost:8080/Server-1.0-SNAPSHOT/" +
                        "api/complaints")
                .queryParam("status", "open")
                .request(MediaType.APPLICATION_JSON)
                .get(new GenericType<>() {});
        System.out.println(openComp);

        client.close();
    }
}
