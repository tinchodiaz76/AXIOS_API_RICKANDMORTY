import { FormControl, InputGroup, Form } from "react-bootstrap";
import {useState, memo} from "react";
import PropTypes from "prop-types";

const Search = ({FindSearch}) => {

    const[search,SetSearch]= useState("");


    const handleChange=(e) =>{
        SetSearch(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        window.alert("Busco: " + search);
        FindSearch(search);
    }

    return ( 
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <FormControl 
                    placeholder="Personaje..." 
                    onChange={handleChange} 
                    name="personaje"
                />
            </InputGroup>
        </Form>

     );
}

Search.propTypes ={
    Search : PropTypes.func.isRequired,
};
 
export default memo (Search); //Memorizo el Search, para que no renderice
