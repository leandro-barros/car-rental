CREATE TABLE car (
    id BIGINT PRIMARY KEY,
    model VARCHAR(50) NOT NULL,
    mark VARCHAR(50) NOT NULL,
    color VARCHAR(30) NOT NULL,
    number_port int8 NOT NULL,
    plaque VARCHAR(10) NOT NULL,
    air_conditioning bool NOT NULL
);

INSERT INTO car (id, model, mark, color, number_port, plaque, air_conditioning) values (1, 'Palio', 'Fiat', 'Branco', 4, 'HEX4589', true);

create sequence sq_car start 1 increment 1;