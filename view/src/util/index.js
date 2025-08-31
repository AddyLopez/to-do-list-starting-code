// Create three exported function that will perform the API calls to the Controller

export const createTodo = async (todo) => {
  try {
    const res = await fetch("api/todo/create", {
      method: "POST",
      body: todo,
    });
    return res.json();
  } catch (error) {
    return { error };
  }
};
