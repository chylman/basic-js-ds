const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {
  while (indexOf(k) !== -1) {
    returnElem(indexOf(k));
  }
  
      function indexOf(element) {
        let current = l;
        let index = 0;
  
        while (current) {
          if (current.value === element) {
            return index;
          }
  
          current = current.next;
          index++;
        }
  
              return -1;
      }
  
  function returnElem(position) {
  
      let current = l;
  
      if (position === 0) {
        l.value = current.next;
      } else {
        let prev = null;
        let index = 0;
  
        while (index < position) {
          prev = current;
          current = current.next;
          index++;
        }
  
        prev.next = current.next;
      }
  
      return l;
  
  }
    return l.value;
    
}
