function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (i < stopValue) {
      array[i] = changeValue;
    } else {
      break;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == skipValue) {
      continue;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === findFn(array[i])) {
      return findFn(array[i]);
    }
    else {
      continue;
    }
  }
  return null;
}