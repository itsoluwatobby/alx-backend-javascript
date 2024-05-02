const Utils = {
  calculateNumber: (type, a, b) => {
    let result;
    if (type === 'SUM') result = Math.round(a) + Math.round(b);
    else if (type === 'SUBTRACT') result = Math.round(a) - Math.round(b);
    else if (type === 'DIVIDE') {
      result = b === 0 ? 'Error' : Math.round(a) / Math.round(b);
    }
    return result;
  },
};

export default Utils;
