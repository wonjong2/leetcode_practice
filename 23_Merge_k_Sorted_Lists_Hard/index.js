/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) return null;

    let valueArray = [];

    for (let i = 0; i < lists.length; i++) {
        while (lists[i]) {
            valueArray.push(lists[i].val);
            lists[i] = lists[i].next;
        }
    }

    if (valueArray.length === 0) return null;

    valueArray.sort((a, b) => a - b);

    let result = {};

    result.val = valueArray[0];
    result.next = makeLinkedList(valueArray, 1);

    return result;

    function makeLinkedList(values, index) {
        if (values[index] === undefined) return null;

        let list = {};

        list.val = values[index];
        list.next = makeLinkedList(values, index + 1);

        return list;
    }
}
