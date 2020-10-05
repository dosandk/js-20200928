/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = 'asc') {
  switch (param) {
    case 'asc':
      return makeSorting(arr, 1);
    case 'desc':
      return makeSorting(arr, -1);
    default:
      return arr;
  }

  function makeSorting(array, direction) {
    return [...array].sort((string1, string2) =>
      direction * string1.localeCompare(string2, ['ru', 'en'], {caseFirst: 'upper'}));
  }
}

function sortStrings1(arr, param = 'asc') {
  const collator = new Intl.Collator(['ru', 'en'], {caseFirst: 'upper'});

  const compare = (a, b) => {
    switch (param) {
      case 'asc':
        return collator.compare(a, b);
      case 'desc':
        return collator.compare(b, a);
      // no default
    }
  };

  return arr.slice().sort(compare);
}
