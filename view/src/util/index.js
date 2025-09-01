const API_ENDPOINT = 'http://localhost:3000';
// Create three exported function that will perform the API calls to the Controller

export const createTodo = async (todo) => {
  try {
    const res = await fetch(`${API_ENDPOINT}/todo/create`, {
      method: 'POST',
      body: todo,
    });
    return res.json();
  } catch (error) {
    return { error };
  }
};

export const getTodos = async () => {
  try {
    const res = await fetch(`${API_ENDPOINT}/todos`, {
      method: 'GET',
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error };
  }
};

export const removeTodo = async (id) => {
  try {
    await fetch(`/${API_ENDPOINT}/todo/${id}`, {
      method: 'DELETE',
    });
    return 'deleted';
  } catch (error) {
    return { error };
  }
};
