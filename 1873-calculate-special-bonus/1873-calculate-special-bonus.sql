select employee_id, 
if(employee_id%2=0,0,
  if(name like 'M%',0,salary)
  ) as bonus
from employees
order by employee_id