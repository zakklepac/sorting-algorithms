const expect = require('chai').expect
const heapSort = require('../src/heapsort')

describe('Heap Sort', () => {
    let arr = [4,2,6,8,9,1]
    let arr2 = [9,8,7,5,3,1]
    let arr3 = [40,30,55,82,34,44]
  
    it('should return array sorted', () => {
      expect(sort.heapSort(arr)).to.eql(arr.sort())
      expect(sort.heapSort(arr2)).to.eql(arr2.sort())
      expect(sort.heapSort(arr3)).to.eql(arr3.sort())
  
    })
  })