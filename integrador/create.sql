DROP TABLE IF EXISTS equipment;
CREATE TABLE equipment (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    price DOUBLE PRECISION
);
