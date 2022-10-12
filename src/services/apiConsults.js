export const getAll = async (BASE_URL) => {
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