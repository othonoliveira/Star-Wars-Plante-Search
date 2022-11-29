const changeOrder = ({ sort, column }, planets, setPlanets) => {
  const valuedPlanets = planets.filter((planet) => planet[column] !== 'unknown');
  const unknownPlanets = planets.filter((planet) => planet[column] === 'unknown');
  if (sort === 'ASC') {
    valuedPlanets.sort((planet1, planet2) => (
      (+planet1[column]) - (+planet2[column])
    ));
  }
  if (sort === 'DESC') {
    valuedPlanets.sort((planet1, planet2) => (
      (+planet2[column]) - (+planet1[column])
    ));
  }
  setPlanets([...valuedPlanets, ...unknownPlanets]);
};

export default changeOrder;
