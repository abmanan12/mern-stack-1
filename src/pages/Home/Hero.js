import React from 'react'

export default function Hero() {
  return (
    <>
      <div className='mt-2 mt-lg-4'>
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col">
                <h5>React Commands</h5>
                <ul>
                  <li>npx create-react-app (projectName)</li>
                  <li>cd (projectName)</li>
                  <li>npm i (libararyName)</li>
                  <li>npm start</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h5>React JSX</h5>
                <ul>
                  <li>JSX stands for JavaScript XML</li>
                  <li>JSX allows us to write HTML in React </li>
                  <li>JSX makes easier to write HTML elements in JavaScript and place DOM without createElement() and appndChild() methods.</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h5>React Components</h5>
                <ul>
                  <li>Components are reuseable bits of code.</li>
                  <li>Components work as JavaScript functions, but <i>return HTML</i>.</li>
                  <li>Component's name MUST start with <i>upper case letter</i>.</li>
                  <li>As React is all about reusing code, components should split into separate files.</li>
                  <li>Function Components is moslty used, as it is wriiten in mush less code and easier to understand.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
