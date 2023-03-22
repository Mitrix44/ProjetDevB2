import { useEffect, useState } from "react";

function Clock () {
    //Initialisation de l'etat local
    const [date, setDate] = useState(new Date());

    //Fonction appeée automatiquement au montage du composant
    useEffect(()=>{
        //Function appelée toutes les 1000ms
        const interval = setInterval(()=> {
            setDate(new Date())
        },1000)
        //Fonction appelée au démontage du composant
        return()=> {
            clearInterval(interval)
        }
    },[])
    //Affichage du composant
    return(
        <h1>{date.toLocaleTimeString()}</h1>
    )
}

export default Clock