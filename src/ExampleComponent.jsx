import React, { useReducer } from 'react';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: true
      };
    case 'INCREMENT_SUCCESS':
      return {
        ...state,
        isIncrementing: false
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: true
      };
    case 'DECREMENT_SUCCESS':
      return {
        ...state,
        isDecrementing: false
      };
    default:
      return state;
  }
}

function ExampleComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrementClick = () => {
    dispatch({ type: 'INCREMENT' });
    setTimeout(() => {
      dispatch({ type: 'INCREMENT_SUCCESS' });
    }, 1000);
  };

  const handleDecrementClick = () => {
    dispatch({ type: 'DECREMENT' });
    setTimeout(() => {
      dispatch({ type: 'DECREMENT_SUCCESS' });
    }, 1000);
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={handleIncrementClick} disabled={state.isIncrementing}>
        {state.isIncrementing ? 'Incrementing...' : 'Increment'}
      </button>
      <button onClick={handleDecrementClick} disabled={state.isDecrementing}>
        {state.isDecrementing ? 'Decrementing...' : 'Decrement'}
      </button>
    </div>
  );
}

export default ExampleComponent;
