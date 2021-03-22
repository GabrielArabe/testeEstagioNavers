delete from navers
delete from projects

insert into navers (name, job_role, birthdate, admission_date) values
('Gabriel Ferreira', 'Dev Jr', '1996-02-21', '2021-04-01'),
('André Gomes', 'Dev Sr', '1991-05-17', '2022-01-01')

insert into projects (name) values
('Proj A'),
('Proj B')

insert into projects_navers (project_id, naver_id) values
((select top 1 id from projects where name = 'Proj A'), (select top 1 id from navers where name = 'Gabriel Ferreira')),
((select top 1 id from projects where name = 'Proj B'), (select top 1 id from navers where name = 'Gabriel Ferreira')),
((select top 1 id from projects where name = 'Proj B'), (select top 1 id from navers where name = 'André Gomes'))