export const planetFilter = (filter, planets) => {
  const { column, operator, value } = filter;
  switch (operator) {
  case 'igual a':
    return (planets.filter((element) => +element[column] === +value));

  case 'menor que':
    return (planets.filter((element) => +element[column] < +value));

  default:
    return (planets.filter((element) => +element[column] > +value));
  }
};

export const restoreFiltereds = (arrFilters, arrExcludes, chave) => {
  // console.log(arrFilters, arrExcludes, chave);
  // const arr = arrFilters.filter((el) => el.split(' ')[0] !== chave);
  // const filtereds = (arr.length > 0) ? arr.reduce((a, b, i) => {
  //   if (i === 0) {
  //     return runFilter(b, arrExcludes);
  //   }
  //   return runFilter(b, a);
  // }, []) : arrExcludes;

  // return filtereds;
};
