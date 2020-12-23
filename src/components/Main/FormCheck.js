import React from 'react'

export const FormCheck = ({Handle: handle}) => {
    console.log(handle)
    return (
      <div>
        <form
          action="_blank "
          className="d-flex flex-column justify-text"
        >
          <label className="mb-2" htmlFor="CounterApp">
            {' '}
            <input className="btn btn-outline-primary mr-2"
              name="CounterApp"
              onClick={handle}
              type="button"
              value="1"
            ></input>
            CounterApp
          </label>
          <label className="mb-2">
            {' '}
            <input className="btn btn-outline-primary mr-2"
              name="CounterWithCustomHooks"
              onClick={handle}
              type="button"
              value="2"
            ></input>
            CounterWithCustomHooks
          </label>
          <label className="mb-2">
            {' '}
            <input className="btn btn-outline-primary mr-2"
              name="SimpleForm"
              onClick={handle}
              type="button"
              value="3"
            ></input>
            SimpleForm
          </label>
        </form>
      </div>
    );
}
