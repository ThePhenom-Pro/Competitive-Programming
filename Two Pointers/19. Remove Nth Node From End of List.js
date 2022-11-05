var removeNthFromEnd = function(head, n) {
    let node = head, temp = head;
    for (let i = 0; i < n; i++) node = node.next;
    if (!node) return head.next
    while (node.next) {
        node = node.next;
        temp = temp.next;
    }
    temp.next = temp.next.next;
    return head;
};
