var maxArea = function(height) {
    let leftEdge = 0, rightEdge = height.length - 1;
    let totalArea = 0
    while (rightEdge > leftEdge) {
        totalArea = Math.max(totalArea, (Math.min(height[leftEdge], height[rightEdge])*(rightEdge-leftEdge)))
        height[leftEdge] > height[rightEdge] ? rightEdge-- : leftEdge++;
    }
    return totalArea;
};
