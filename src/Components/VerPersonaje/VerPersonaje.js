import {Col, Card, Button} from "react-bootstrap";
//import PropTypes from "react-PropTypes"
import PropTypes from "prop-types";
/*En este caso recibe todo el objeto
const VerPersonaje = ({personaje}) => {
En este caso recibe todo el objeto*/

/*En este caso recibe el objeto desestructurado*/
const VerPersonaje = ({id, name,species,image,created, status}) => {
    return ( 
            <Col md={4} sm={12}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                            <Card.Title><p> Nombre: {name}</p></Card.Title>
                            <Card.Text>
                                <p> Especie: {species} </p>
                                <p> Estado: {status} </p>
                                <p> Nacimiento: {created} </p>

                            </Card.Text>
                            <Button variant="primary">Go {id}</Button>
                    </Card.Body>
                </Card>
            </Col>

     );
};
 
VerPersonaje.propTypes = {
    VerPersonaje: PropTypes.shape({         //Solo es un objeto
            created : PropTypes.string,
            gender : PropTypes.string,
            id : PropTypes.string,
            name : PropTypes.string,
            species : PropTypes.string,
            status : PropTypes.string,
        }).isRequired
};

export default VerPersonaje;