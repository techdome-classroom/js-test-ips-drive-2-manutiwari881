var isValid = function(s) {
  const stack = [];
  const characters = { '(': ')', '{': '}', '[': ']' }; // Reversed keys and values
  for (const char of s) {
    if (!characters[char]) {
      stack.push(char);
    } else if (stack.pop() !== characters[char]) {
      return false;
    }
  }
  return stack.length === 0;
};

module.exports = { isValid };
