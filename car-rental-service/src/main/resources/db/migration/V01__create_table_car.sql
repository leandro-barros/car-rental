CREATE TABLE car (
    id BIGINT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model VARCHAR(50),
    mark VARCHAR(50),
    color VARCHAR(50),
    number_port int8
);

create sequence sq_car start 1 increment 1;