let initialCartStore = {
  blogReducer: "sddf"
}

const blogReducer = (state = initialCartStore, action) => {
  switch (action.type) {
      case "GET_ALL_POSTS":
          state = action.payload;
          break;
  }
  return state;

};
export default blogReducer;
