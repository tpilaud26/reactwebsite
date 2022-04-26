import { useParams } from "react-router-dom";

const Details = () => { 
    const {id} = useParams();
    return (
      <div>
        <h1>Détails de l'image...{id}</h1>
    </div>
) }

export default Details