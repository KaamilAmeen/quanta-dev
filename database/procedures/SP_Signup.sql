USE quanta;

DELIMITER //
CREATE PROCEDURE SignUp(IN u_username varchar(50), IN u_email varchar(100), IN u_password varchar(255))
BEGIN 
INSERT INTO users(username, email, password) VALUES(u_username, u_email, u_password);
END //
DELIMITER ;

CALL SignUp("Ameen", "Ameen@gmail.com", "AMEEN");

DELIMITER //
CREATE PROCEDURE getUserByEmail(IN u_email varchar(100))
BEGIN
	SELECT * FROM users WHERE email = u_email;
END //
DELIMITER ;

CALL getUserByEmail("Ameen@gmail.com");

DELIMITER // 
CREATE PROCEDURE getUserRoles(IN u_user_id int)
BEGIN
	SELECT r.role_name, ur.project_id 
     FROM user_roles ur 
     JOIN roles r ON ur.role_id = r.role_id 
     WHERE ur.user_id = u_user_id;
END //
DELIMITER ;

CALL getUserRoles(1);