import {z} from 'zod'
export const userValidator= z.object({

    name:z.string({
        required_error:'Name is required'
    }),
    email:z.string({
        required_error:'Name is required'
    }).email('Invalid email'),
    phone_number: z.string({
        required_error:'Phone number is required'
    })!.min(10,'Invalid number').regex(/\d/ig,'Invalid number'),
    password:z.string({
        required_error:'Password is required',

    }).min(8,'8 minimum characters')
})

export const loginUserSchema = z.object({
    email:z.string({
        required_error:'Name is required'
    }).email('Invalid email'),

    password:z.string({
        required_error:'Password is required',

    }).min(8,'8 minimum characters')
})