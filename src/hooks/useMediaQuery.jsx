import { useState,useEffect } from "react";

const useMediaQuery=(query)=>{
    const [matches,setMatches]=useState(false)

    useEffect(()=>{
        const media=window.matchMedia(query)
        if(media.matches!==matches){
            setMatches(media.matches);
        }

        const listtener=()=>setMatches(media.matches)

        window.addEventListener("resize",listtener);
        return ()=>window.removeEventListener("resize",listtener)
    },[matches,query])

    return matches
}

export default useMediaQuery