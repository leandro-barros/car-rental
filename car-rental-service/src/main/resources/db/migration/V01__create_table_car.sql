CREATE TABLE car (
    id BIGINT PRIMARY KEY,
    model VARCHAR(50) NOT NULL,
    mark VARCHAR(50) NOT NULL,
    color VARCHAR(30) NOT NULL,
    number_port int8 NOT NULL,
    plaque VARCHAR(10) NOT NULL,
    air_conditioning bool NOT NULL
);

create sequence sq_car start 1 increment 1;