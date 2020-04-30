create database sqlnode;
create database docker;

\c sqlnode

-- create table emails (
--     id serial not null,
--     data timestamp not null default current_timestamp,
--     assunto varchar(100) not null,
--     mensagem varchar(250) not null
-- );