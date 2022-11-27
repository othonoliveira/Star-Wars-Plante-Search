import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { planetFilter } from '../services/planetFilter';
import '../styles/Table.css';

const columns = ['population', 'orbital_period', 'diameter', 'rotation_period',
  'surface_water'];

function Table() {
  const values = useContext(AuthContext);
  const [search, setSearch] = useState('');
  const [newFilter, setNewFilter] = useState({
    column: 'population', operator: 'maior que', value: 0 });
  const [atributeOptions, setAtributeOptions] = useState([...columns]);
  const [disabled, setDisabled] = useState(true);
  const [filters, setFilters] = useState([]);
  const [planets, setPlanets] = useState([]);
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
    if (newFilter.column !== '' && newFilter.operator !== '' && newFilter.value !== '') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [newFilter.column, newFilter.operator, newFilter.value]);

  const handleNameChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleFilterChange = ({ target }) => {
    const { name, value } = target;
    setNewFilter({ ...newFilter, [name]: value });
  };

  const handleClick = async () => {
    setFilters([...filters, newFilter]);
    setAtributeOptions(atributeOptions
      .filter((atribute) => atribute !== newFilter.column));
    setPlanets(planetFilter(newFilter, planets));
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
          defaultValue="population"
          name="column"
          onChange={ handleFilterChange }
        >
          {
            atributeOptions.map((element, index) => (
              <option
                value={ element }
                key={ index }
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
          disabled={ disabled }
        >
          Filtrar
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
                <th>{planet.name}</th>
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
