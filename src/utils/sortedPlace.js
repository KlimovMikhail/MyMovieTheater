export const getSortedPlace = (arr, field) => {
  return arr.sort((a, b) => a[field] - b[field])
};