import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import mockData from './mockData';
import AuthProvider from '../context/AuthProvider';
import userEvent from '@testing-library/user-event';

describe('', () => {
  it('should render a list of planets', async () => {
    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );
    const talbeHearderName = screen.getByText(/Name/i);
    expect(talbeHearderName).toBeInTheDocument();

    const planetTatooine = await screen.findByText(/Tatooine/i);
    expect(planetTatooine).toBeInTheDocument();

    const planetAlderaan = await screen.findByText(/Alderaan/i);
    expect(planetAlderaan).toBeInTheDocument();

    const unknownAtributes = await screen.findAllByText(/unknown/i);
    expect(unknownAtributes.length).toBe(3);

  });

  it('should filter if something is typeded on the input', async () => {
    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );
    const nameFilter = screen.getByTestId(/name-filter/i);
    expect(nameFilter).toBeInTheDocument();

    const planetTatooine = await screen.findByText(/Tatooine/i);

    userEvent.type(nameFilter, 'iv');

    const planetYavin = await screen.findByText(/Yavin IV/i);
    expect(planetYavin).toBeInTheDocument();

    const planetAlderaan = await screen.findByText(/Alderaan/i);
    expect(planetAlderaan).not.toBeInTheDocument();

    
    expect(planetTatooine).not.toBeInTheDocument();

  });

  it('should render a list of planets', async () => {
    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );
    const talbeHearderName = screen.getByText(/Name/i);
    expect(talbeHearderName).toBeInTheDocument();

    const planetTatooine = await screen.findByText(/Tatooine/i);
    expect(planetTatooine).toBeInTheDocument();

    const planetAlderaan = await screen.findByText(/Alderaan/i);
    expect(planetAlderaan).toBeInTheDocument();

    const unknownAtributes = await screen.findAllByText(/unknown/i);
    expect(unknownAtributes.length).toBe(3);

  });

  it('should render a list if a filter is applyed', async () => {
    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );

    const planetTatooine = await screen.findByText('Tatooine')

    const planetYavin = await screen.findByText(/Yavin IV/i);
    
    const planetAlderaan = await screen.findByText(/Alderaan/i);
    expect(planetAlderaan).toBeInTheDocument();

    const columnFilter = screen.getByTestId('column-filter');
    expect(columnFilter).toBeInTheDocument();

    userEvent.selectOptions(columnFilter, 'rotation_period');

    const comparisonFilter = screen.getByTestId('comparison-filter');
    userEvent.selectOptions(comparisonFilter, 'igual a')

    const valueFilter = screen.getByTestId(/value-filter/i);
    userEvent.type(valueFilter, '24');

    const filterButton = screen.getByTestId(/button-filter/i);
    userEvent.click(filterButton);
    expect(planetYavin).toBeInTheDocument();

    const columnSortButton = screen.getByTestId('column-sort-button');
    const removeFilterButton = screen.getByTestId('button-remove-filters')
    userEvent.click(removeFilterButton);
    expect(planetTatooine).toBeInTheDocument();
    userEvent.click(columnSortButton);
    const sortAsc = screen.getByTestId('column-sort-input-asc');
    userEvent.click(sortAsc);
    userEvent.click(columnSortButton);
    const sortDesc = screen.getByTestId('column-sort-input-desc');
    userEvent.click(sortDesc);

    const removeFilters = screen.getByTestId('button-remove-filters')
    userEvent.click(removeFilters);
  });

  it('should be possible to add more then one filter', async () => {
    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );
    const comparisonFilter = screen.getByTestId(/comparison-filter/i);
    expect(comparisonFilter).toBeInTheDocument();
    userEvent.selectOptions(comparisonFilter, 'menor que');

    const valueFilter = screen.getByTestId(/value-filter/i);
    userEvent.type(valueFilter, '100000000');

    const filterButton = screen.getByTestId(/button-filter/i);
    userEvent.click(filterButton);

    userEvent.selectOptions(comparisonFilter, 'igual a');
    userEvent.type(valueFilter, '304');
    userEvent.click(filterButton);

    const planetTatooine = await screen.findByText(/Tatooine/i);
    expect(planetTatooine).toBeInTheDocument();
    
    const removeButtons = screen.getAllByTestId('remove-single-filter')
    userEvent.click(removeButtons[0]);
    userEvent.click(removeButtons[0]);
  });
});