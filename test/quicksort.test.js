const expect = require('chai').expect
const quickSort = require('../src/quicksort')

describe('Quick Sort', () => {
    let arr1 = [4,2,6,8,9,1]
    let arr2 = [1,4,7,9,2,8,3,6]
    let arr3 = [40,30,55,82,34,44]
  
    it('should return array sorted', () => {
      expect(sort.quickSort(arr1)).to.eql(arr1.sort())
      expect(sort.quickSort(arr2)).to.eql(arr2.sort())
      expect(sort.quickSort(arr3)).to.eql(arr3.sort())
  
    })
  });

  