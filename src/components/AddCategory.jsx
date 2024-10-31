import { useState } from 'react';

export const AddCategory = ( {onAddCategories} ) => {

    const [inputValue, setImputValue] = useState([]);

    const onInputChange = ({target}) => {
        // console.log(target.value)
        setImputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault(); // Evita la recarga de la página
        // console.log(inputValue);
        if(inputValue.trim().length <= 1) return;
        onAddCategories((categories) => [ inputValue, ...categories]);
        setImputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder='Buscar Gifs'
                value={ inputValue }
                onChange={ event => onInputChange(event) }
            />
        </form>
    )
}