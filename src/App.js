import { useState } from 'react'

const App = () => {

  // Spread Operator

  //arrays
  const studentList1 = ["Suresh", "Ramesh", "Naresh", "Ganesh"]
  const studentList2 = ["Mayesh", "Samesh", "Laresh", "Aanesh"]

  const studentListAll= [...studentList1,...studentList2]
  console.log(studentListAll);

  //objects
  const Marks1 = {
    Math: 90,
    Science: 65,
    English: 92,
  }

  const Marks2 = {
    History: 88,
    Geography: 94,
    Computer: 95,
  }

  const MarksAll = {...Marks1,...Marks2}
  console.log(MarksAll);

  const [teachers, setTeachers]=useState(["Mr. Smith", "Ms. Johnson", "Mrs. Lee", "Mr. Brown"]);

  const deleteTeacher = (index) =>{
    const copyofTeachers = [...teachers];
    copyofTeachers.splice(index,1);
    setTeachers(copyofTeachers);
  }

  const [addTeacher, setAddTeacher] = useState('');

  const teacherAdded = () =>{
    setTeachers([...teachers, addTeacher]);
  }

  const [showImage, setShowImage ]= useState(true);

  const [bgcolor, setbgColor] = useState('orange');

  const [inputValue, setInputValue] = useState('');

   const [FontSize, setFontSize] = useState('');

  const [colorBox, setColorBox] = useState('blue');
 

  return (
    <div style={
      {minHeight:"100vh",
        background: "orange",
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

        <div style={{
        margin : '0 auto',
        width: '50%',
        background: 'red',
        padding: '20px',
      }}>
        
        <input type="range" placeholder="Enter here"
        onChange={(e)=> (setFontSize(Number(e.target.value)))}
        />
        
        <h3>Text Preview:
          {FontSize}
        </h3>
        <h2 style={{
          fontSize: FontSize
        }}>Font Size Preview</h2>
        </div>

        <div>
          <h1>Enter Color</h1>
          <input placeholder='Enter Name of the Color you ' onChange={(e)=> (setColorBox(e.target.value))} value={colorBox} />

          <div style={{
            width: '200px',
            height: '200px',
            background: colorBox,
            margin: '0 auto',
          }}>
            
          </div>
        </div>

          <div>
        <h2>Update and Delete Array using useState</h2>
        <ul>
          {
            teachers.map((item , index)=>
            <li key={index}>{item}
            <button onClick={()=>deleteTeacher(index)}> Delete </button>
            </li>
          )}
        </ul>

        <input onChange={(e)=>setAddTeacher(e.target.value)}/>
        <button onClick={teacherAdded}> Add Teacher</button>
      </div>

      </div>

    </div>
  )
}

export default App;