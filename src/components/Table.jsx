import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import changeOrder from '../services/changeOrder';
import filterRemover from '../services/filterRemover';
import planetFilter from '../services/planetFilter';
import '../styles/Table.css';

const columns = ['population', 'orbital_period', 'diameter', 'rotation_period',
  'surface_water'];

function Table() {
  const values = useContext(AuthContext);
  const [search, setSearch] = useState('');
  const [atributeOptions, setAtributeOptions] = useState([...columns]);
  const [newFilter, setNewFilter] = useState({
    column: 'population', operator: 'maior que', value: 0 });
  // const [disabled, setDisabled] = useState(false);
  const [filters, setFilters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [order, setOrder] = useState({ column: 'population', sort: 'ASC' });
  const head = ['Nome',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Filmes',
    'Created',
    'Edited',
    'URL'];

  useEffect(() => {
    setPlanets([...values]);
  }, [values]);

  useEffect(() => {
    filters.forEach((element) => {
      console.log(element);
      setPlanets((p) => planetFilter(element, p));
    });
  }, [filters]);

  useEffect(() => {
    setNewFilter({ column: atributeOptions[0], operator: 'maior que', value: 0 });
  }, [atributeOptions]);

  const handleNameChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleFilterChange = ({ target }) => {
    const { name, value } = target;
    setNewFilter({ ...newFilter, [name]: value });
  };

  const handleClick = () => {
    setFilters([...filters, newFilter]);
    setAtributeOptions(atributeOptions
      .filter((atribute) => atribute !== newFilter.column));
    setPlanets(planetFilter(newFilter, planets));
  };

  const removeFilter = (column) => {
    setPlanets([...values]);
    filterRemover(column, filters, setFilters);
    setAtributeOptions([...atributeOptions, column]);
  };

  const removeAllFilters = () => {
    setFilters([]);
    setAtributeOptions([...columns]);
    setPlanets([...values]);
  };

  const handleSortChange = ({ target }) => {
    const { name, value } = target;
    setOrder({ ...order, [name]: value });
  };

  const handleSort = () => {
    changeOrder(order, planets, setPlanets);
  };

  return (
    <>
      <input
        data-testid="name-filter"
        value={ search }
        onChange={ handleNameChange }
        type="text"
        name="search"
      />
      <div className="filter">
        <select
          data-testid="column-filter"
          name="column"
          onChange={ handleFilterChange }
        >
          {
            atributeOptions.map((element) => (
              <option
                value={ element }
                key={ element }
              >
                {element}
              </option>
            ))
          }
        </select>
        <select
          onChange={ handleFilterChange }
          data-testid="comparison-filter"
          name="operator"
          defaultValue="maior que"
        >
          {/* <option disabled>Select an operator...</option> */}
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          onChange={ handleFilterChange }
          value={ newFilter.value }
          type="number"
          name="value"
          data-testid="value-filter"
        />
        <button
          onClick={ handleClick }
          data-testid="button-filter"
          type="button"
          // disabled={ disabled }
        >
          Filtrar
        </button>
      </div>
      <div>
        <select
          data-testid="column-sort"
          name="column"
          onChange={ handleSortChange }
        >
          {
            atributeOptions.map((atribute) => (
              <option
                value={ atribute }
                key={ atribute }
              >
                {atribute}
              </option>
            ))
          }
        </select>
        <label htmlFor="ascendente">
          <input
            data-testid="column-sort-input-asc"
            type="radio"
            name="sort"
            id="ascendente"
            value="ASC"
            onChange={ handleSortChange }
            checked
          />
          Ascendente
        </label>
        <label htmlFor="descendente">
          <input
            data-testid="column-sort-input-desc"
            type="radio"
            name="sort"
            id="descendente"
            value="DESC"
            onChange={ handleSortChange }
          />
          Descendente
        </label>
        <button
          data-testid="column-sort-button"
          onClick={ handleSort }
          type="button"
        >
          Ordenar
        </button>
      </div>
      <div>
        {filters.map((filter) => (
          <div data-testid="filter" key={ filter.column }>
            <p>{filter.column}</p>
            <p>{filter.operator}</p>
            <p>{filter.value}</p>
            <button onClick={ () => removeFilter(filter.column) } type="button">X</button>
          </div>
        ))}
        <button
          data-testid="button-remove-filters"
          onClick={ removeAllFilters }
          type="button"
        >
          Remove All
        </button>
      </div>
      <table>
        <thead>
          <tr>
            {head.map((element) => (
              <th key={ element }>{element}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planets.filter((planet) => planet.name.toLowerCase().includes(search))
            .map((planet) => (
              <tr key={ planet.name }>
                <th data-testid="planet-name">{planet.name}</th>
                <th>{planet.rotation_period}</th>
                <th>{planet.orbital_period}</th>
                <th>{planet.diameter}</th>
                <th>{planet.climate}</th>
                <th>{planet.gravity}</th>
                <th>{planet.terrain}</th>
                <th>{planet.surface_water}</th>
                <th>{planet.population}</th>
                <th>{planet.films}</th>
                <th>{planet.created}</th>
                <th>{planet.edited}</th>
                <th>{planet.url}</th>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
