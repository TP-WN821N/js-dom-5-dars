// 96
function firstUnique(arr = []) {
  let new_arr = arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item))
  return new_arr[0]
}

// Test case
// console.log(firstUnique([2, 3, 4, 2, 3, 5, 6, 5]));
// Output: 4



// 97
function extractAndSortNumbers(str = '') {
  let arr = str.split("")
  let num_arr = []
  arr.forEach(item => !isNaN(item) ? num_arr.push(item * 1) : '')
  return num_arr.sort((a, b) => a - b)
}

// Test case
// console.log(extractAndSortNumbers("a3c2d4b1"));
// Output: [1, 2, 3, 4]



// 98
function doubleNumericValues(obj) {
  let arr = [{ value: obj, step: 1 }]
  const numsAllTrueFalse = () => {
    for (let i = 0; i < arr.length; i++) {
      let { value, step } = arr[i]
      for (let key in value) {
        if (typeof value[key] === "object" && value[key] !== null) {
          arr.push({ value: value[key], step: step + 1 })
        } else if (typeof value[key] !== "number") {
          return false
        }
      }
    }
    return true
  }
  let result
  if (numsAllTrueFalse()) {
    result = obj
  } else {
    result = JSON.parse(JSON.stringify(obj))
    const recursevFn = (obj) => {
      for (let key in obj) {
        if (typeof obj[key] == "object") {
          recursevFn(obj[key])
        } else {
          obj[key] *= 2
        }
      }
      return obj
    }
    recursevFn(result)
  }
  return result
}

// Test case
const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4
    }
  }
};
// console.log(doubleNumericValues(obj));
// Output: { a: 2, b: { c: 4, d: { e: 6, f: 8 } } }


// 99
function toCamelCase(obj = {}) {
  let arr = [{ value: obj }]
  for (let i = 0; i < arr.length; i++) {
    let { value } = arr[i]
    for (let key in value) {
      let new_key = key.replaceAll('-', ' ').replaceAll('_', " ")
      let camelCase = new_key.split(" ").map((item, i) => i === 0 ? item.toLowerCase() : item[0].toUpperCase() + item.slice(1).toLowerCase()).join("")
      value[camelCase] = value[key]

      if (typeof value[key] === "object") {
        arr.push({ value: value[key] })
        delete value[key]
      } else {
        delete value[key]
      }
    }
  }
  return obj
}

// Test case
const obj2 = {
  'first_key': 1,
  'second-key': {
    'third_key': 2,
    'four key': {
      'five key': 3
    }
  }
};
// console.log(toCamelCase(obj2));
// Output: { firstKey: 1, secondKey: { thirdKey: 2 } }


// 100
function transformStrings(obj, transformFunc) {
  let arr = [{ value: obj }]
  for (let i = 0; i < arr.length; i++) {
    let { value } = arr[i]
    for (let key in value) {
      if (typeof value[key] === "object") {
        arr.push({ value: value[key] })
      } else if (typeof value[key] === "string") {
        value[key] = transformFunc(value[key])
      }
    }
  }
  return obj
}

// Test case
const obj3 = {
  a: "hello",
  b: {
    c: "world",
    d: {
      e: "test"
    }
  }
};
// console.log(transformStrings(obj3, str => str.toUpperCase()));
// Output: { a: "HELLO", b: { c: "WORLD", d: { e: "TEST" } } }




// 101
function sortKeys(obj = {}) {
  let arr = []
  for (let key in obj) {
    arr.push([key, obj[key]])
  }
  arr.sort((a, b) => a[1] - b[1])
  let result = {}
  arr.forEach(item => {
    result[item[0]] = item[1]
  })
  return result
}

// Test case
const obj4 = {
  b: 2,
  a: 1,
  c: 3
};
// console.log(sortKeys(obj4));
// Output: { a: 1, b: 2, c: 3 }




// 102
function uniqueConcat(arr = []) {
  let result = new Set()
  arr.forEach(item => {
    result.add(item)
  })
  return Array.from(result).join("")
}

// Test case
// console.log(uniqueConcat(['a', 'b', 'c', 'a', 'b', 'd']));
// Output: "abcd"



// 103
function findDuplicates(arr = []) {
  let set = new Set()
  arr.forEach(item => {
    if (arr.indexOf(item) !== arr.lastIndexOf(item)) {
      set.add(item)
    }
  })
  return Array.from(set)
}

// Test case
// console.log(findDuplicates([1, 2, 3, 1, 2, 4]));
// Output: [1, 2]