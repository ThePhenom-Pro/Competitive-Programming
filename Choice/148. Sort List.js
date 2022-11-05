var sortList = function(head) {
    let temp = head;
    let arr = [];
    while(temp){
        arr.push(temp.val);
        temp = temp.next;
    }
    arr.sort((a, b) => a - b);
    temp = head;
    let i = 0;
    while(temp){
        temp.val = arr[i++];
        temp = temp.next;
    }
    return head;
};
