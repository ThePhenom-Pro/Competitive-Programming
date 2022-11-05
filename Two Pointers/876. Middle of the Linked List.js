var middleNode = function(head) {
    if (head === null) return null;
    let node = head;
    let counter = 0;
    while(node){
        counter++;
        node = node.next;
    }
    let middle = Math.floor(counter/2) + 1;
    let temp = head;
    while (middle > 1) {
        temp = temp.next;
        middle--;
    }
    return temp;
};
