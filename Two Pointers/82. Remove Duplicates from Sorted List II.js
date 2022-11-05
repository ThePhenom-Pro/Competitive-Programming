var deleteDuplicates = function(head) {
    if (head === null || head.next === null) return head;
    let temp = new ListNode(0);
    temp.next = head;
    let current = temp;
    while (current.next!==null && current.next.next!== null) {
        if (current.next.val === current.next.next.val){
            let dupe = current.next.val;
            while (current.next !==null && current.next.val === dupe) {
                current.next =current.next.next;
            }
        } else current = current.next;
    }
    return temp.next;
};
