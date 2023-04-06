import React, { useMemo, useState } from 'react';

function  Memocomp(props) {
  const [data, setData] = useState(props.initialData);

  // expensive calculation function
  const expensiveCalculation = (data) => {
    // perform some complex calculation here
    return result;
  }

  // memoized calculation result
  const memoizedResult = useMemo(() => expensiveCalculation(data), [data]);

  // update the state based on user input
  const handleInputChange = (event) => {
    setData(event.target.value);
  }

  return (
    <div>
      <input type="text" value={data} onChange={handleInputChange} />
      <p>Memoized result: {memoizedResult}</p>
    </div>
  );
}

export default  Memocomp;