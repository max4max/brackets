module.exports = function check(str, bracketsConfig) {
    let map = new Map(bracketsConfig);
    let stack = [];

    for (let bracket of str) {
        if (stack.length > 0 && map.get(stack[stack.length - 1]) === bracket) {
            stack.pop();
        } else if (map.has(bracket)) {
            stack.push(bracket);
        } else {
            return false;
        }
    }

    return stack.length ? false : true;
};
