/**
 * @function 100
 * @param {*} array
 * @returns {avarage of array values}
 */
export const getPrecentage = (value: number, array: any) => {
  const sum = array
    .map((item: { votes: any }) => item.votes)
    .reduce((prev: any, curr: any) => prev + curr, 0)  
  const precentage = sum === 0 ? '0.00' : parseFloat(((value / sum)*100).toString()).toFixed(2)
  return precentage
}


