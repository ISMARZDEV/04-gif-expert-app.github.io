import { useState } from "react";

export const AddCategory = () => {

  const [ inputValue, setInputValue ] = useState( [] );
  
  const onInputChange = ({ target }) => {
    setInputValue(target.value)
    console.log(inputValue);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValue);
  }

  return (
    <>


    <h3>Add Category</h3>

        <form onSubmit={(event) => onSubmit(event)}>
            <input
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={ onInputChange} />
        </form>
    </>
  )
}


// import { useState } from "react";

// export const AddCategory = () => {

//   const [ inputValue, setInputValue ] = useState( [] );
  
//   const onInputChange = (event) => {
//     setInputValue(event.target.value)
//   }
  
//   return (
//     <>
//     <h3>Add Category</h3>

//         <input type="text"
//         placeholder="Buscar Gifs"
//         value={inputValue}
//         onChange={ (event) => onInputChange(event)} />
//     </>
//   )
// }

// export default AddCategory

