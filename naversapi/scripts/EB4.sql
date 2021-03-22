select project_name = p.name, naver_name= n.name 
from projects p
left join projects_navers pn on p.id = pn.project_id
left join navers n on n.id = pn.naver_id