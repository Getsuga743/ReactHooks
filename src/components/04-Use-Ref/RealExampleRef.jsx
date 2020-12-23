import React, { useState } from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';

// eslint-disable-next-line arrow-body-style
const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button
        type="button"
        className="btn btn-primary mt-3"
        onClick={
            () => { setShow(!show); }
}
      >
        Show/Hide
      </button>
    </div>
  );
};

export default RealExampleRef;
