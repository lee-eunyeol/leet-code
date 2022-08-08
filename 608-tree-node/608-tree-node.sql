# Write your MySQL query statement below
# 루트 노드는 부모가 없으므로 p_id 가 null
select id, 'Root' as type from Tree where p_id is null
union
# 리프 노드의 경우 , 테이블의 p_id에 자신의 id값이 없어야 한다.
select id, 'Leaf' as type from Tree where p_id is not null and id not in (select p_id from Tree where p_id is not null)
union 
# 이너 노드는 자식이 최소 1개 이상있다. -> 테이블의 p_id에 자신의 id값이 있어야 한다.
select id, 'Inner' as type from Tree where p_id is not null and id in (select p_id from Tree where p_id is not null)
order by id;