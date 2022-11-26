const getPlanets = async () => {
  const ENDPOINT = 'https://swapi.dev/api/planets';
  try {
    const request = await fetch(ENDPOINT);
    if (!request.ok) {
      const newError = await data.json;
      throw newError.message;
    }
    const response = await request.json();
    return response.results;
  } catch (error) {
    console.log(error);
  }
};

export default getPlanets;
