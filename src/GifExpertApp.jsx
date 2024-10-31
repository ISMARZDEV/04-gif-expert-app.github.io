import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['Marvel', 'DC'] );

    const onAddCategory = (NewCategory) => {
        console.log(NewCategory);
        if ( categories.includes(NewCategory)) return;
        setCategories([...categories, NewCategory]);
    }

    return (
        <>
            {/* Titulo */}
            <h1>Gif Expert App</h1>

            {/* Input */}
            < AddCategory 
            // onAddCategories={ setCategories }
                onNewCategory={ (value) => onAddCategory(value) }
                
            />

            {/* <button onClick={ (event) => addCategories(event) }>Agregar</button> */}

            {/* Listado de Gif */}
            <ol>
               {
               categories.map( category => {
                return <li key={category}>{ category }</li>
                    }
                )
               }
            </ol>

                {/* gif item */}


        </>
    )
}








// import { useState } from 'react';
// import { AddCategory } from './components/AddCategory';


// export const GifExpertApp = () => {

//     const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

//     const onAddCategory = () => {
//         // categories.push('valorant');
//         setCategories([...categories, 'tarzan']);
//         // setCategories( cat => [...cat, 'Valorant'] );
//     }

    
//     return (
//         <>
//         {   /* titulo */}
//             <h1>GifExpertApp</h1>

//             {/* Imput */}
//             <AddCategory setCategories={setCategories}/>

//             {/* Listado de Gif */}
//             {/* <button onClick={onAddCategory}>Agregar</button> */}
//             <ol>
//                 { categories.map( category => {
//                     return <li key={ category }>{ category }</li>
//                 } ) 
//                 }

            
//             </ol>
//                 {/* Gif Item */}

//         </>
//     )
// }

