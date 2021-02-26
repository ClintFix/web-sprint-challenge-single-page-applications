import React, { useState, useEffect } from 'react' 
import { Link, useRouteMatch } from 'react-router-dom'

// initial form values
const initialFormValues = {
    name: '',
    size: '',
    sauce: '',
    toppings: [],
    instructions: '',
    quantity: 1,
  }

// initial submit button state
const initialDisabled = true;

//initialFormErrors
const initialFormErrors = {
  name: '', 
  toppings: '',  
}

export default function Order(props) {
    const { order, setOrder } = props; // array of orders

    // STATE to be managed by Order: //
    // formValues
    const [formValues, setFormValues] = useState(initialFormValues) //object
    // submit button disabled
    const [disabled, setDisabled] = useState(initialDisabled) //boolean
    // formErrors - to add after form working
    const [formErrors, setFormErrors] = useState(initialFormErrors) //object

    // onChange //
    //function to handle on change event. must work for all form input types
    // checks for validation // add after form working
    // updates Price //stretch
    // updates formValues state
    const onChange = evt => {
        const { name, value, type, checked } = evt.target //make sure works with dropdowns, radio buttons, checkboxes
        const valueToUse = type === 'checkbox' ? checked : value;
        // !!!!! add validation !!!!!
        
        //update formValues
        setFormValues({...formValues, [name]: valueToUse})
    }

    // onSubmit //
    // prevent default reload behavior
    // make new order object
    // add new order to order state

    // change disabled button with validation
    // useEffect to check formSchema when formValues changes

    //get current URL
    const {url} = useRouteMatch()

    return (
        <div className = 'order-form'>

        </div>
    )
}