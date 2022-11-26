import React, { useEffect, useState } from 'react';
import getPlanets from '../services/planetApi';
import AuthContext from './AuthContext';

function AuthProvider({ children }) {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const newValue = await getPlanets();
      await setValue([...newValue]);
    };
    fetchPlanets();
    // fetchStarWars().then((r) => setData(r.results.reduce((a, b) => {
    //   const objFiltrado = Object.keys(b).reduce((acc, curr) => {
    //     if (curr === 'residents') return acc;
    //     acc[curr] = b[curr];
    //     return acc;
    //   }, {});
    //   return [...a, objFiltrado];
    // }, [])));
  }, []);

  return (
    <AuthContext.Provider value={ value }>
      {children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {}.isRequired;

export default AuthProvider;
