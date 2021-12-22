import './App.scss';


// 1. I import the hook useRef
// 2. I create an objet with the property current
// 3. I link the previously created object with an element  
// 4. I can access my element with object.current


//!1
import { useRef } from 'react';




function App() {

  //! 2
  const mainButtonRef = useRef();
  const secondaryButtonRef = useRef();

  const mainHandleClick = () => {

    //!4
    const mainElement = mainButtonRef.current;
    const secondaryElement = secondaryButtonRef.current;

    console.log(secondaryElement.classList.value.includes("blueBackground"));

    if (mainElement.classList.value.includes("blueBackground")) { 
      mainElement.classList.remove("blueBackground");
      mainElement.classList.add("redBackground") 
    } else  if (mainElement.classList.value.includes("redBackground")) { 
      mainElement.classList.remove("redBackground");
      mainElement.classList.add("blueBackground") 
    };

    
    if (secondaryElement.classList.value.includes("blueBackground")) { 
      secondaryElement.classList.remove("blueBackground");
      secondaryElement.classList.add("redBackground") 
    } else  if (secondaryElement.classList.value.includes("redBackground")) { 
      secondaryElement.classList.remove("redBackground");
      secondaryElement.classList.add("blueBackground") 
    };

    
   }


  
  



  return (
    <div className="App">

      <button className="button blueBackground" onClick={mainHandleClick} ref={mainButtonRef}>
        main button
      </button>

      {/* //!3 */}
      <button className="button blueBackground" onClick={mainHandleClick} ref={secondaryButtonRef} >
        secondary button
      </button>


      



     
    </div>
  );
}

export default App;
