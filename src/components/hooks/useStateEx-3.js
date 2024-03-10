// import { useState } from "react"




// const UsestateEx3=()=>{

//     const[Fruits,setFruits]=useState(["apple","orenge","mango","greppes"])
//     const Addfruits=()=>{
//         const newone=[...Fruits,"red apple"]
//         setFruits(newone)
//     }
//   const deleteFruit=()=>{

//   }
//     return(

//         <>
//         <h1>Add Fruits</h1>
//         <button onClick={Addfruits}>click fruits</button>
//         <button onClick={}>Delete</button>
//         <ul>
//             {
//                 Fruits.map((eachfruit)=><li>{eachfruit}</li>)
//             }
//         </ul>
//         </>
//     )
// }
// export default UsestateEx3


// import React, { useState } from "react";

// const UsestateEx3 = () => {
//     const [fruits, setFruits] = useState(["apple", "orange", "mango", "grapes"]);

//     const addFruit = () => {
//         const newFruits = [...fruits, "red apple"];
//         setFruits(newFruits);
//     };

//     const deleteFruit = (fruitToDelete) => {
//         const updatedFruits = fruits.filter((fruit) => fruit !== fruitToDelete);
//         setFruits(updatedFruits);
//     };

//     return (
//         <>
//             <h1>Add Fruits</h1>
//             <button onClick={addFruit}>Add Fruit</button>
//             <button onClick={a()}>Delete</button>
//             <ul>
//                 {fruits.map((fruit, index) => (
//                     <li key={index}>
//                         {fruit}
//                         {let a=() => {
//                             deleteFruit(fruit)
//                         }}
                        
//                     </li>=
//                 ))}
//             </ul>
//         </>
//     );
// };

// export default UsestateEx3;

import React, { useState } from "react";

const UsestateEx3 = () => {
    const [fruits, setFruits] = useState(["apple", "orange", "mango", "grapes"]);

    const addFruit = () => {
        const newFruits = [...fruits, "red apple"];
        setFruits(newFruits);
    };

    const deleteLastFruit = () => {
        const updatedFruits = [...fruits];
        updatedFruits.pop(); // Remove the last fruit
        setFruits(updatedFruits);
    };

    return (
        <>
            <h1>Add Fruits</h1>
            <button onClick={addFruit}>Add Fruit</button>
            {fruits.length > 0 && <button onClick={deleteLastFruit}>Delete Last Fruit</button>}
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>
                        {fruit}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default UsestateEx3;
