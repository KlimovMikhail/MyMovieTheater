export const getRowsArray = (arr) => {
  return arr.reduce((acc, item) => {
    if(!acc.length) {
      return [[item]];
    };
    const hasSomeRow = acc.some(rowArray => rowArray.some(obj => obj.row === item.row));
    if(hasSomeRow) {
      return acc.map(rowArray => {
        const hasSomeRow = rowArray.some(obj => obj.row === item.row);

        if(hasSomeRow) {
          return [...rowArray, item];
        }
        return rowArray;
      });
    } else {
      return [...acc, [item]];
    };
  }, []);
}