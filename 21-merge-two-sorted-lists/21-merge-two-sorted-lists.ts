function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let p = list1;
    let q = list2;
    
    let head = new ListNode();
    let r = head;
    
    while(p != null && q!=null) {
        
        let temp = new ListNode();
        r.next = temp;
        temp.next = null;
        
        if(p.val < q.val) {
            temp.val = p.val;
            p = p.next;
        } else {
            temp.val = q.val;
            q = q.next;
        }
        
        r = temp;
    }
    
    iterateRemainingList(p, r);
    iterateRemainingList(q, r);
    
    return head.next;
};


function iterateRemainingList(p: ListNode, r: ListNode) {
    while(p != null) {
        let temp = new ListNode();
        r.next = temp;
        temp.val = p.val;
        
        r=temp;
        p=p.next;        
    }
}