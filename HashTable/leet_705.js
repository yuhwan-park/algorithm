// https://leetcode.com/problems/design-hashset/submissions/

var MyHashSet = function () {
  this.hash = {};
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  this.hash[key] = true;
  return null;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  if (this.hash[key]) {
    delete this.hash[key];
  } else {
    return null;
  }
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return Boolean(this.hash[key]);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

