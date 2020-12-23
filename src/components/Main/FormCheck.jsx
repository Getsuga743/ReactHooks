/* eslint-disable react/prop-types */
import React from 'react';

export default ({ Handle }) => (
  <div>
    <form action="_blank" id="FormCheck" className="d-flex flex-column justify-text">
      <label className="mb-2" htmlFor="CounterApp">
        {' '}
        <input
          htmlFor="FormCheck"
          className="btn btn-outline-primary mr-2"
          name="CounterApp"
          onClick={Handle}
          type="button"
          value="1"
        />
        CounterApp
      </label>
      <label htmlFor="FormCheck" className="mb-2">
        {' '}
        <input
          className="btn btn-outline-primary mr-2"
          name="CounterWithCustomHooks"
          onClick={Handle}
          type="button"
          value="2"
        />
        CounterWithCustomHooks
      </label>
      <label htmlFor="FormCheck" className="mb-2">
        {' '}
        <input
          className="btn btn-outline-primary mr-2"
          name="SimpleForm"
          onClick={Handle}
          type="button"
          value="3"
        />
        SimpleForm
      </label>
      <label htmlFor="FormCheck" className="mb-2">
        {' '}
        <input
          className="btn btn-outline-primary mr-2"
          name="FormWithCustomHook"
          onClick={Handle}
          type="button"
          value="4"
        />
        FormWithCustomHook
      </label>
      <label htmlFor="FormCheck" className="mb-2">
        {' '}
        <input
          className="btn btn-outline-primary mr-2"
          name="Examples-MultiplesCustomHooks"
          onClick={Handle}
          type="button"
          value="5"
        />
        Examples-MultiplesCustomHooks
      </label>
    </form>
  </div>
);
