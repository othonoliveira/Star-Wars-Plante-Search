export const planetFilter = (filter, search) => {
  const { column, operator, value } = filter;
  console.log(column, operator, value);
  switch (operator) {
  case 'igual a':
    return (search.filter((element) => +element[column] === +value));

  case 'menor que':
    return (search.filter((element) => +element[column] < +value));

  default:
    return (search.filter((element) => +element[column] > +value));
  }
};

export const restoreFiltereds = (arrFilters, arrExcludes, chave) => {
  // console.log(arrFilters, arrExcludes, chave);
  const arr = arrFilters.filter((el) => el.split(' ')[0] !== chave);
  const filtereds = (arr.length > 0) ? arr.reduce((a, b, i) => {
    if (i === 0) {
      return runFilter(b, arrExcludes);
    }
    return runFilter(b, a);
  }, []) : arrExcludes;

  return filtereds;
};
