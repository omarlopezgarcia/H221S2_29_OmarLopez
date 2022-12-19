/* Crear base de datos dbRestaurante */
drop database if exists landing_pagesb;
CREATE DATABASE landing_pagesb;

/* Poner en uso la base de datos */
USE landing_pagesb;

/* Crear tabla Pedido */
drop table if exists pedido;
CREATE TABLE pedido
(
     IDPED int AUTO_INCREMENT,
     USERPED varchar(80),
     EMAUSPED varchar(80),
     CELUSPED char(9),
     ASUPED varchar(80),
     MSGPED   varchar(250),
     PRIMARY KEY (IDPED)
);

/* Insertar registros */
INSERT INTO pedido
(USERPED, EMAUSPED, CELUSPED, ASUPED, MSGPED)
VALUES
('José Ramírez', 'jose.ramirez@outlook.com', '974815236', 'MATRICULA', 'PARA MI HERMANO');
/* Listar los registros de la tabla PEDIDO */
SELECT * FROM pedido;





CREATE DATABASE login_socket;
USE login_socket;
 
CREATE TABLE accounts (
  username varchar(50) NOT NULL,
  password varchar(255) NOT NULL
);
 
 
INSERT INTO accounts (username, password) VALUES
('omar.lopez@vallegrande.edu.pe', 'vg2022');