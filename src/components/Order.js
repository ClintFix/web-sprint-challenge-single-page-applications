import React, { useState, useEffect } from 'react' 
import { useHistory, useRouteMatch } from 'react-router-dom'
import formSchema from '../validation/formSchema'
import * as yup from 'yup'
import "../App.css"

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
  size: '',
  sauce: '',
  toppings: '',
  quantity: '',
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
    
    const history = useHistory()
    // onChange //
    //function to handle on change event. must work for all form input types
    // checks for validation // add after form working
    // updates Price //stretch
    // updates formValues state
    const onChange = evt => {
        const { name, value, type, checked } = evt.target //make sure works with dropdowns, radio buttons, checkboxes
        // const valueToUse = type === 'checkbox' ? checked : value;

        if (type === 'checkbox') {
            yup.reach(formSchema, 'toppings')
                .validate(formValues.toppings)
                .then(() => {
                    setFormErrors({...formErrors, 'toppings': ''})
                })
                .catch(err => {
                    setFormErrors({...formErrors, 'toppings': err.errors[0]})
                })

                setFormValues({...formValues, 'toppings': [...formValues.toppings, name]})  
            }
        else {
            yup.reach(formSchema, name)
                .validate(value)
                .then(() => {
                     setFormErrors({...formErrors, [name]: ''})
                 })
                 .catch(err => {
                    setFormErrors({...formErrors, [name]: err.errors[0]})
                })

            setFormValues({...formValues, [name]: value})
        }
    }

    // onSubmit //
    // prevent default reload behavior
    // make new order object
    // add new order to order state
    const onSubmit = evt => {
        evt.preventDefault();

        const routeToConfirmation = () => {
            history.push('/confirmation')
        }

        const newOrder = {
            name: formValues.name.trim(),
            size: formValues.size,
            sauce: formValues.sauce,
            toppings: formValues.toppings, //should be array of sauces
            instructions: formValues.instructions,
            quantity: formValues.quantity,
        }
        setOrders([newOrder, ...orders])
        routeToConfirmation()
    }


    // change disabled button with validation
    // useEffect to check formSchema when formValues changes
    useEffect(() => {
        formSchema.isValid(formValues)
            .then(valid => {
                setDisabled(!valid)
            })
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
                <div className='input-selection'>
                    <input
                        name='name'
                        type='text'
                        onChange={onChange}
                        value={formValues.name}
                    />
                    <div className='error'>{formErrors.name}</div>
                </div>
                <div className = 'order-section'>
                    <h3>Choose Your Pizza Size</h3>
                    <div className='required'>Required</div>
                </div>
                <div className='input-selection'>
                    <select name='size' value={formValues.size} onChange={onChange}>
                        <option value=''>Select a pizza size</option>
                        <option value='12'>12"</option>
                        <option value='16'>16"</option>
                        <option value='18'>18"</option>
                    </select>
                    <div className='error'>{formErrors.size}</div>
                </div>
                <div className = 'order-section'>
                    <h3>Choose Your Sauce</h3>
                    <div className='required'>Required</div>
                </div>
                <div className='input-selection'>
                    <label className='form-label'> 
                        <input name='sauce' type='radio' value='Original Red' onChange={onChange} checked={formValues.sauce === 'Original Red'} />
                        Original Red
                    </label> 
                    <label className='form-label'> 
                        <input name='sauce' type='radio' value='Garlic Ranch' onChange={onChange} checked={formValues.sauce === 'Garlic Ranch'} />
                        Garlic Ranch
                    </label> 
                    <label className='form-label'>
                        <input name='sauce' type='radio' value='BBQ Sauce' onChange={onChange} checked={formValues.sauce === 'BBQ Sauce'} />
                        BBQ Sauce
                    </label>
                    <label className='form-label'> 
                        <input name='sauce' type='radio' value='Spinach Alfredo' onChange={onChange} checked={formValues.sauce === 'Spinach Alfredo'} />
                        Spinach Alfredo
                    </label>
                    <div className='error'>{formErrors.sauce}</div>
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
                    <div className='error'>{formErrors.toppings}</div>
                </div>
                <div className = 'order-section'>
                    <h3>Special Instructions</h3>
                </div>
                <div className='input-selection'>
                    <input
                        name='instructions'
                        type='text'
                        onChange={onChange}
                        value={formValues.instructions}
                    />
                </div>
                <div className = 'quantity'>
                    <label>Quantity: 
                        <input type='number' name='quantity' value={formValues.quantity} onChange={onChange} />
                    </label>
                    <div className='error'>{formErrors.quantity}</div>
                </div>
                <button disabled={disabled}>Submit Order</button>
            </form>
        </div>
    )
}