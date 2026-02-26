import { useState } from 'react'

const App = () => {

  const [showImage, setShowImage ]= useState(true);

  const [bgcolor, setbgColor] = useState('red');

  const [inputValue, setInputValue] = useState('');
 

  return (
    <div style={
      {minHeight:"100vh",
        background: "lightgrey",
        textAlign: "center",
      }
    }>
      <h1>This is App About States of React</h1>
      
      <div style={{
        margin : '0 auto',
        width: '50%',
        background: 'white',
        padding: '20px',
      }}>
        <h2>STATES</h2>

        <p>States are used to store data in a component and can be updated 
          using the setState function. When the state of a component changes, 
          React will re-render the component to reflect the new state.</p> 

          { showImage && <img src = './images/World Flags Banner.jpg' alt="Banners" width="100%" />}

        <button onClick={() => setShowImage(!showImage)}>
          {showImage ? 'Hide Image' : 'Show Image'}
          </button>

      </div>

      <div style={{
        margin : '0 auto',
        width: '50%',
        background: 'white',
        padding: '20px',
      }}>
        <h2>Color Background Change</h2>
        <div style={{
          background: bgcolor,
          width: '200px',
          height: '200px',
          margin: '0 auto',
        }}>
          <button onClick={() => setbgColor(bgcolor === 'lightblue' ? 'red' : 'lightblue')}>
          {bgcolor === 'lightblue' ? 'lightblue' : 'Red'}</button>
        </div>

        <div style={{
        margin : '0 auto',
        width: '50%',
        background: 'white',
        padding: '20px',
      }}>
        <h2>Input Input Preview</h2>
        <input placeholder="Enter text here"
        onChange={(e)=> (setInputValue(e.target.value))}
        />

        <h3>Text Preview:
          {inputValue}
        </h3>
        


        </div>


      </div>

    </div>
  )
}

export default App;