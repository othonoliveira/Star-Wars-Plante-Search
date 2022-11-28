const filterRemover = (column, filters, setFilters) => {
  const newFilters = filters.filter((element) => element.column !== column);
  setFilters(newFilters);
};

export default filterRemover;
