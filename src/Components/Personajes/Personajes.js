import {Row} from "react-bootstrap";
//import PropTypes from "react-PropTypes"
import PropTypes from "prop-types";
import VerPersonaje  from "../VerPersonaje/VerPersonaje";

const Personajes = ({personajes}) => {
    
    /*Aca mano a VerPersonaje el objeto completo
    return (  
        <Row className="justify-content-center">
                {personajes?.length>0 && personajes.map((item) => (  //personajes?.length>0 Lo ponemos porque posiblemente llegue vacio, espera que tenga elementos y luyego hace el map.
                    <VerPersonaje personaje={item}/>
                                            )
                               )}
        </Row>
    );
    Aca mano a VerPersonaje el objeto completo*/

    /*Aca mando a VerPersonaje el objeto desestructurado*/
    return (  
        <Row className="justify-content-center">
                {personajes?.length>0 && personajes.map((item) => <VerPersonaje {...item} />)} 
        </Row>
    );
    /*Aca mando a VerPersonaje el objeto desestructurado*/

};
 

Personajes.propTypes = {
    personajes : PropTypes.arrayOf(         //Es un array de objetos
        PropTypes.shape({
            created : PropTypes.string,
            gender : PropTypes.string,
            id : PropTypes.string,
            name : PropTypes.string,
            species : PropTypes.string,
            status : PropTypes.string,
        }).isRequired
    ),
};

export default Personajes;