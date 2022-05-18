-- Spring Boot automatically loads this SQL script to prepopulate the in-memory H2 DB
INSERT INTO user (id, email, password, firstName, lastName, contact) VALUES (1, "johndoe@test.com", "johndoe123", "John", "Doe", "1231231234");
INSERT INTO user (id, email, password, firstName, lastName, contact) VALUES (2, "janedoe@test.com", "janedoe123", "Jane", "Doe", "1231231235");
