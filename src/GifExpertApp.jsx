import { useState } from 'react';
import AddCategory from './components/AddCategory';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

    const onAddCategory = () => {
        // categories.push('valorant');
        setCategories(['tarzan', ...categories]);
        // setCategories( cat => [...cat, 'Valorant'] );
    }

    
    return (
        <>
        {   /* titulo */}
            <h1>GifExpertApp</h1>

            {/* Imput */}
            <AddCategory/>

            {/* Listado de Gif */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                { categories.map( category => {
                    return <li key={ category }>{ category }</li>
                } ) 
                }

            
            </ol>
                {/* Gif Item */}

        </>
    )
}

