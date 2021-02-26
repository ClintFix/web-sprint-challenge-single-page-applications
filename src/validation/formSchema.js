import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Please give us a name for your order')
        .min(2, 'Your name must be at least 2 characters'),
    size: yup.string()
        .required('Please choose a Pizza size'),
    sauce: yup.string()
        .required('Please choose a sauce for your Pizza'),
    toppings: yup.array()
        .max(10,'We can only fit a max of 10 toppings on your Pizza, Sorry.')
        .min(3, 'At least 4 toppings are required'),
    quantity: yup.number()
        .min(1, 'What is the point of ordering 0 Pizzas?'),
})

export default formSchema;