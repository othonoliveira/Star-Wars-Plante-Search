// import { render, screen  } from '@testing-library/react';
// import React from 'react';
// import AuthProvider from '../context/AuthProvider';
// import userEvent from '@testing-library/user-event';
// import App from '../App';

// test('I am your test', () => {
//   it('should make a request to the endpoint https://swapi.dev/api/planets', async () => {
    // render(<AuthProvider>
    //   <App />
    // </AuthProvider>);
//     const tableName = screen.getByText(/Name/i);
//     expect(tableName).toBeInTheDocument();

//     const tatooine = await screen.findByText(/Tatooine/i);
//     expect(tatooine).toBeInTheDocument();

//     const kamino = await screen.findByText(/kamino/i);
//     expect(kamino).toBeInTheDocument();

//     const unknown = await screen.findAllByText(/unknown/i);
//     expect(unknown.length).toBe(3);
//   })

//   it('should filter the planets by name', async () => {
//     render(<AuthProvider>
//       <App />
//     </AuthProvider>);
//     const nameFilter = screen.getByTestId(/name-filter/i);
//     expect(nameFilter).toBeInTheDocument();

//     const kamino = await screen.findByText(/kamino/i);

//     userEvent.type(nameFilter, 'oo');
//     const naboo = await screen.findByText(/Naboo/i);
//     expect(naboo).toBeInTheDocument();
//     expect(kamino).not.toBeInTheDocument();

//     const tatooine = await screen.findByText(/Tatooine/i);
//     expect(tatooine).toBeInTheDocument();
//   });

  // test('Restore da Filtragem dos atributos', async () => {
  //   render(<AuthProvider>
  //     <App />
  //   </AuthProvider>);
  //   const selectAtribute = screen.getByTestId("column-filter");
  //   const selectComparison = screen.getByTestId(/comparison-filter/i);
  //   const inputValue = screen.getByTestId(/value-filter/i);

  //   const addFilterbutton = screen.getByTestId(/button-filter/i);

  //   userEvent.selectOptions(selectAtribute, 'diameter');
  //   userEvent.selectOptions(selectComparison, 'maior que');
  //   valueElement.value = '';
  //   userEvent.type(inputValue, '7200');
  //   userEvent.click(addFilterbutton);

  //   userEvent.selectOptions(selectAtribute, 'orbital_period');
  //   userEvent.selectOptions(selectComparison, 'menor que');
  //   valueElement.value = '';
  //   userEvent.type(inputValue, '400');
  //   userEvent.click(addFilterbutton);

  //   userEvent.selectOptions(selectAtribute, 'population');
  //   userEvent.selectOptions(selectComparison, 'maior que');
  //   valueElement.value = '';
  //   userEvent.type(inputValue, '150000');
  //   userEvent.click(addFilterbutton);

  //   userEvent.selectOptions(selectAtribute, 'orbital_period');
  //   userEvent.selectOptions(selectComparison, 'igual a');
  //   valueElement.value = '';
  //   userEvent.type(inputValue, '304');
  //   userEvent.click(addFilterbutton);

  //   const tatooine = await screen.findByText(/Tatooine/i);
  //   expect(tatooine).toBeInTheDocument();
  //   const deleteButtons = screen.getAllByText(/X/i);
  //   expect(deleteButtons.length).toBe(4);

  //   await userEvent.click(screen.getAllByText('Excluir')[0]);

  //   const _deleteButtons = await screen.getAllByText(/X/i);
  //   expect(_deleteButtons.length).toBe(3);

  //   let count = 0;
  //   do {
  //     userEvent.click(screen.getAllByText('Excluir')[0]);
  //     count++;
  //   } while (count < 3);

  //   const planets = screen.getAllByTestId('planet-name');
  //   expect(planets.length).toBe(10);

  // });

  // // it('should render the list', async () => {
  // //   const name = screen.getByText(/Name/i);
  // //   expect(name).toBeInTheDocument();

  // //   const tatooine = await screen.findByText(/Tatooine/i);
  // //   expect(tatooine).toBeInTheDocument();

  // //   const kamino = await screen.findByText(/kamino/i);
  // //   expect(kamino).toBeInTheDocument();

  // //   const unknown = await screen.findAllByText(/unknown/i);
  // //   expect(unknown.length).toBe(3);

  // // });
// });
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import mockData from './mockData';
import AuthProvider from '../context/AuthProvider';
import userEvent from '@testing-library/user-event';

describe('', () => {

  beforeEach(() => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({ json: jest.fn().mockResolvedValue(mockData) });
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  test('Testa se renderizou a lista', async () => {
    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );
    const linkElement = screen.getByText(/Name/i);
    expect(linkElement).toBeInTheDocument();

    const tatooineElement = await screen.findByText(/Tatooine/i);
    expect(tatooineElement).toBeInTheDocument();

    const kaminoElement = await screen.findByText(/kamino/i);
    expect(kaminoElement).toBeInTheDocument();

    const unknownElements = await screen.findAllByText(/unknown/i);
    expect(unknownElements.length).toBe(3);

  });

  test('Digita no input e verifica se filtrou', async () => {
    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );
    const nameFilter = screen.getByTestId(/name-filter/i);
    expect(nameFilter).toBeInTheDocument();

    const kaminoElement = await screen.findByText(/kamino/i);

    userEvent.type(nameFilter, 'oo');

    const tatooineElement = await screen.findByText(/Tatooine/i);
    expect(tatooineElement).toBeInTheDocument();

    const nabooElement = await screen.findByText(/Naboo/i);
    expect(nabooElement).toBeInTheDocument();

    
    expect(kaminoElement).not.toBeInTheDocument();

  });

  test('Testa se renderizou a lista', async () => {
    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );
    const linkElement = screen.getByText(/Name/i);
    expect(linkElement).toBeInTheDocument();

    const tatooineElement = await screen.findByText(/Tatooine/i);
    expect(tatooineElement).toBeInTheDocument();

    const kaminoElement = await screen.findByText(/kamino/i);
    expect(kaminoElement).toBeInTheDocument();

    const unknownElements = await screen.findAllByText(/unknown/i);
    expect(unknownElements.length).toBe(3);

  });

  test('Testa se renderizou a lista', async () => {
    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );

    const tatooineElement = await screen.findByText(/Tatooine/i);
    
    const bespinElement = await screen.findByText(/Bespin/i);
    expect(bespinElement).toBeInTheDocument();

    const selectElement = screen.getByTestId(/column-filter/i);
    expect(selectElement).toBeInTheDocument();

    userEvent.selectOptions(selectElement, 'orbital_period');

    const valueElement = screen.getByTestId(/value-filter/i);
    userEvent.type(valueElement, '1000');

    const buttonElement = screen.getByTestId(/button-filter/i);
    userEvent.click(buttonElement);
    expect(tatooineElement.innerHTML).toBe("Yavin IV");

    const btnOrd = screen.getByTestId('column-sort-button');
    userEvent.click(screen.getByText('Excluir'));
    expect(await screen.findByText(/Tatooine/i)).toBeInTheDocument();
    userEvent.click(btnOrd);
    userEvent.click(screen.getByTestId('column-sort-input-desc'));
    userEvent.click(btnOrd);
    userEvent.click(screen.getByTestId('column-sort-input-asc'));
    userEvent.click(screen.getByTestId('button-remove-filters'));
  });

  test('Adicionar filtros em cascata', async () => {
    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );
    const selectElement = screen.getByTestId(/comparison-filter/i);
    expect(selectElement).toBeInTheDocument();

    userEvent.selectOptions(selectElement, 'menor que');

    const valueElement = screen.getByTestId(/value-filter/i);
    userEvent.type(valueElement, '100000000');

    const buttonElement = screen.getByTestId(/button-filter/i);
    userEvent.click(buttonElement);

    userEvent.selectOptions(selectElement, 'igual a');
    userEvent.type(valueElement, '304');
    userEvent.click(buttonElement);

    const tatooineElement = await screen.findByText(/Tatooine/i);
    expect(tatooineElement).toBeInTheDocument();

    userEvent.click(screen.getAllByText('Excluir')[0]);
    userEvent.click(screen.getAllByText('Excluir')[0]);
  });

  test('Filtragem fina nos atributos', async () => {
    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );

    const selectElement = screen.getByTestId(/comparison-filter/i);
    userEvent.selectOptions(selectElement, 'igual a');

    const valueElement = screen.getByTestId(/value-filter/i);
    userEvent.type(valueElement, '7200');

    const selectAtr = screen.getByTestId(/column-filter/i);
    userEvent.selectOptions(selectAtr, 'diameter');

    const buttonElement = screen.getByTestId(/button-filter/i);
    userEvent.click(buttonElement);

    const hothElement = await screen.findByText(/Hoth/i);
    expect(hothElement).toBeInTheDocument();

    userEvent.click(screen.getByText('Excluir'));

    const tatooineElement = await screen.findByText(/Tatooine/i);
    expect(tatooineElement).toBeInTheDocument();

    const ordElement = screen.getByTestId('column-sort');
    userEvent.selectOptions(ordElement, 'diameter');
    
    const btnOrd = screen.getByTestId('column-sort-button');
    userEvent.click(btnOrd);

  });

  test('Filtragem de atributos iguais', async () => {
    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );

    const selectElement = screen.getByTestId(/comparison-filter/i);
    userEvent.selectOptions(selectElement, 'igual a');

    const valueElement = screen.getByTestId(/value-filter/i);
    userEvent.type(valueElement, '200000');

    const buttonElement = screen.getByTestId(/button-filter/i);
    userEvent.click(buttonElement);

    const tatooineElement = await screen.findByText(/Tatooine/i);
    expect(tatooineElement).toBeInTheDocument();

    userEvent.click(screen.getAllByText('Excluir')[0]);

    const nabooElement = await screen.findByText(/Naboo/i);
    expect(nabooElement).toBeInTheDocument();

    const selectAtr = screen.getByTestId("column-filter");
    // ---------------
    userEvent.selectOptions(selectAtr, 'orbital_period');

    valueElement.value = '';
    userEvent.type(valueElement, '4818');
    userEvent.click(buttonElement);

    expect(await screen.findByText("Yavin IV")).toBeInTheDocument();
    userEvent.click(screen.getAllByText('Excluir')[0]);
 // ---------
    userEvent.selectOptions(selectAtr, 'rotation_period');

    valueElement.value = '';
    userEvent.type(valueElement, '23');
    userEvent.click(buttonElement);

    expect(await screen.findByText("Dagobah")).toBeInTheDocument();
    // userEvent.click(screen.getAllByText('Excluir')[0]);
    userEvent.selectOptions(selectAtr, 'surface_water');
    userEvent.selectOptions(selectElement, 'menor que');

    valueElement.value = '';
    userEvent.type(valueElement, '100');
    userEvent.click(buttonElement);

    expect(await screen.findByText("Tatooine")).toBeInTheDocument();

    userEvent.selectOptions(selectAtr, 'diameter');
    userEvent.selectOptions(selectElement, 'maior que');

    valueElement.value = '';
    userEvent.type(valueElement, '8900');
    userEvent.click(buttonElement);

    expect(await screen.findByText("Tatooine")).toBeInTheDocument();

    userEvent.click(buttonElement);
    userEvent.click(buttonElement);
  });

  test('Restore da Filtragem dos atributos', async () => {
    render(<AuthProvider>
      <App />
    </AuthProvider>);
    const selectAtribute = screen.getByTestId("column-filter");
    const selectComparison = screen.getByTestId(/comparison-filter/i);
    const inputValue = screen.getByTestId(/value-filter/i);

    const addFilterbutton = screen.getByTestId(/button-filter/i);

    userEvent.selectOptions(selectAtribute, 'diameter');
    userEvent.selectOptions(selectComparison, 'maior que');
    valueElement.value = '';
    userEvent.type(inputValue, '7200');
    userEvent.click(addFilterbutton);

    userEvent.selectOptions(selectAtribute, 'orbital_period');
    userEvent.selectOptions(selectComparison, 'menor que');
    valueElement.value = '';
    userEvent.type(inputValue, '400');
    userEvent.click(addFilterbutton);

    userEvent.selectOptions(selectAtribute, 'population');
    userEvent.selectOptions(selectComparison, 'maior que');
    valueElement.value = '';
    userEvent.type(inputValue, '150000');
    userEvent.click(addFilterbutton);

    userEvent.selectOptions(selectAtribute, 'orbital_period');
    userEvent.selectOptions(selectComparison, 'igual a');
    valueElement.value = '';
    userEvent.type(inputValue, '304');
    userEvent.click(addFilterbutton);

    const tatooine = await screen.findByText(/Tatooine/i);
    expect(tatooine).toBeInTheDocument();
    const deleteButtons = screen.getAllByText(/X/i);
    expect(deleteButtons.length).toBe(4);

    await userEvent.click(screen.getAllByText('Excluir')[0]);

    const _deleteButtons = await screen.getAllByText(/X/i);
    expect(_deleteButtons.length).toBe(3);

    let count = 0;
    do {
      userEvent.click(screen.getAllByText('Excluir')[0]);
      count++;
    } while (count < 3);

    const planets = screen.getAllByTestId('planet-name');
    expect(planets.length).toBe(10);

  });

  // it('should render the list', async () => {
  //   const name = screen.getByText(/Name/i);
  //   expect(name).toBeInTheDocument();

  //   const tatooine = await screen.findByText(/Tatooine/i);
  //   expect(tatooine).toBeInTheDocument();

  //   const kamino = await screen.findByText(/kamino/i);
  //   expect(kamino).toBeInTheDocument();

  //   const unknown = await screen.findAllByText(/unknown/i);
  //   expect(unknown.length).toBe(3);

  // });
});