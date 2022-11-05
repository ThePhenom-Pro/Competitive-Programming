var corpFlightBookings = function(bookings, n) {
    let stack = new Array(n).fill(0);

    for (let i = 0; i < bookings.length; i++) {
        let start = bookings[i][0] - 1
        let end = bookings[i][1]
        for (let j = start; j < end; j++) {
            stack[j] += bookings[i][2];
        }
    }
    return stack;
};
