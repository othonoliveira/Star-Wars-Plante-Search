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
  }, []);

  return (
    <AuthContext.Provider value={ value }>
      {children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {}.isRequired;

export default AuthProvider;
