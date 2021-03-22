select p.id, p.name, QuantidadeNavers = count(1)
from projects p 
left join projects_navers pn on p.id = pn.project_id
left join navers n on n.id = pn.naver_id
group by p.id, p.name

select p.id, p.name, QuantidadeNavers = (select count(1) from projects_navers where project_id = p.id)
from projects p 