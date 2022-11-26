import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import '../styles/Table.css';

function Table() {
  const values = useContext(AuthContext);
  const [search, setSearch] = useState('');
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
  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <>
      <input
        data-testid="name-filter"
        value={ search }
        onChange={ handleChange }
        type="text"
        name="search"
      />
      <div className="filter">
        <select
          data-testid="column-filter"
          defaultValue="Select an option..."
          name="column"
        >
          <option disabled>Select an option...</option>
          <option value="population">Population</option>
          <option value="orbital_period">Orbital Period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="surface_water">Surface Water</option>
        </select>
        <select data-testid="comparison-filter" name="operator">
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input type="number" name="filter-value" data-testid="value-filter" />
        <button data-testid="button-filter" type="button">Filtrar</button>
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
          {values.filter((planet) => planet.name.toLowerCase().includes(search))
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
