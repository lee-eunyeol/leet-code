SELECT customer_id, COUNT(*) as 'count_no_trans'
FROM (
    SELECT *
    FROM Visits
    WHERE visit_id NOT IN (SELECT DISTINCT visit_id FROM Transactions)) as x
GROUP BY customer_id