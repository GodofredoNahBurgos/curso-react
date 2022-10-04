const BASE_URL = "https://swapi.dev/api/people";

export const getAll = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (response.status === 200) {
      const { results } = await response.json();
      return results;
    }
  } catch (error) {
    // status --- 400, 401, 404
    return error.message;
  }
};