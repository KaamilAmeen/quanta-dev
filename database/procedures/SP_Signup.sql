USE quanta;

DELIMITER //
CREATE PROCEDURE SignUp(IN u_username varchar(50), IN u_email varchar(100), IN u_password varchar(255))
BEGIN 
INSERT INTO users(username, email, password) VALUES(u_username, u_email, u_password);
END //
DELIMITER ;

CALL SignUp("Ameen", "Ameen@gmail.com", "AMEEN");