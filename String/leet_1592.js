// https://leetcode.com/problems/rearrange-spaces-between-words/

/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  if (!text.match(/\s/g)) return text;

  const spaces = Array.from(text.match(/\s/g)).length;
  const words = Array.from(text.match(/\w{1,}/g));

  let str = words.join(
    " ".repeat(words.length - 1 ? spaces / (words.length - 1) : 0)
  );

  str += " ".repeat(words.length - 1 ? spaces % (words.length - 1) : spaces);

  return str;
};

reorderSpaces("  hello");

