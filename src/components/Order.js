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

const toppingChoices = ['Pepperoni', 'Sausage', 'Canadian Bacon', 'Spicy Italian Sausage', 'Grilled Chicken', 'Onion', 'Green Pepper', 'Diced Tomato', 'Black Olives', 'Roasted Garlic', 'Artichoke Hearts', 'Three Cheese', 'Pineapple', 'Extra Cheese']

export default function Order(props) {
    const { orders, setOrders } = props; // array of orders

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
        // const valueToUse = type === 'checkbox' ? checked : value;
        if (type === 'checkbox') {
            setFormValues({...formValues, 'toppings': [...formValues.toppings, name]})
        } else {
            setFormValues({...formValues, [name]: value})
        }
        // !!!!! add validation !!!!!
        
    }

    // onSubmit //
    // prevent default reload behavior
    // make new order object
    // add new order to order state
    const onSubmit = evt => {
        evt.preventDefault();
        const newOrder = {
            name: formValues.name.trim(),
            size: formValues.size,
            sauce: formValues.sauce,
            toppings: formValues.toppings, //should be array of sauces
            instructions: formValues.instructions,
            quantity: formValues.quantity,
        }
        setOrders([newOrder, ...orders])
    }


    // change disabled button with validation
    // useEffect to check formSchema when formValues changes
    useEffect(() => {

    }, [formValues])

    //get current URL
    const {url} = useRouteMatch()

    return (
        <div className = 'order-form'>
            <h1>Build Your Own Pizza</h1>
            <form onSubmit={onSubmit}> 
                <div className = 'order-section'>
                    <h3>Name</h3>
                    <div className='required'>Required</div>
                </div>
                <div>
                    <input
                        name='name'
                        type='text'
                        onChange={onChange}
                        value={formValues.name}
                    />
                </div>
                <div className = 'order-section'>
                    <h3>Choose Your Pizza Size</h3>
                    <div className='required'>Required</div>
                </div>
                <div>
                    <select name='size' value={formValues.size} onChange={onChange}>
                        <option value=''>Select a pizza size</option>
                        <option value='12'>12"</option>
                        <option value='16'>16"</option>
                        <option value='18'>18"</option>
                    </select>
                </div>
                <div className = 'order-section'>
                    <h3>Choose Your Sauce</h3>
                    <div className='required'>Required</div>
                </div>
                <div>
                    <label className='form-label'> Original Red
                        <input name='sauce' type='radio' value='Original Red' onChange={onChange} checked={formValues.sauce === 'Original Red'} />
                    </label>
                    <label className='form-label'> Garlic Ranch
                        <input name='sauce' type='radio' value='Garlic Ranch' onChange={onChange} checked={formValues.sauce === 'Garlic Ranch'} />
                    </label>
                    <label className='form-label'> BBQ Sauce
                        <input name='sauce' type='radio' value='BBQ Sauce' onChange={onChange} checked={formValues.sauce === 'BBQ Sauce'} />
                    </label>
                    <label className='form-label'> Spinach Alfredo
                        <input name='sauce' type='radio' value='Spinach Alfredo' onChange={onChange} checked={formValues.sauce === 'Spinach Alfredo'} />
                    </label>
                </div>
                <div className = 'order-section'>
                    <h3>Choose Your Toppings</h3>
                    <div className='required'>Choose up to 10</div>
                </div>
                <div className = 'toppings-checkboxes'>
                    {
                        toppingChoices.map(topping => {
                            return (
                                <label>
                                    <input type='checkbox' name={topping} onChange={onChange} checked={formValues.toppings.find(el => el === topping)} />
                                    {topping}
                                </label>
                            )
                        })
                    }
                </div>
                <div className = 'order-section'>
                    <h3>Special Instructions</h3>
                </div>
                <div>
                    <input
                        name='instructions'
                        type='text'
                        onChange={onChange}
                        value={formValues.instructions}
                    />
                </div>

            </form>
        </div>
    )
}