const INITIAL_STATE = {
  test: 'I am a test'
}

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // change below
    case 'SET_TEST':
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}

export default testReducer;