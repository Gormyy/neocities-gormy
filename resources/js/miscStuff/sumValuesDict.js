function sumValuesDict(obj) {
  return Object.values(obj).reduce((total, num) => total + num, 0);
}

window.sumValuesDict = sumValuesDict