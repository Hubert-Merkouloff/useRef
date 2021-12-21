import './App.scss';


// 1. I import the hook useRef
// 2. I create an objet with the property current
// 3. I link the previously created object with an element  
// 4. I can access my element with object.current


//!1
import { useRef } from 'react';




function App() {

  //! 2
  const buttonRef = useRef();

  const handleClick = () => {

    //!4
    const element = buttonRef.current.focus();

    console.log(buttonRef.current);
 
  }



  return (
    <div className="App">

      <button className="button" onClick={handleClick}>
        main button
      </button>

      //!3
      <button className="button" ref={buttonRef}>
        secondary button
      </button>


      



     
    </div>
  );
}

export default App;
