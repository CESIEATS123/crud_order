import mongoose from 'mongoose'

const Order = mongoose.model( 
    "Order",
    new mongoose.Schema({
        article: [
            {
                id: String,
                number: Number,
                unitPrice: Number
            }
        ],
        number: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        user: {
            type: String,
            required: true
        },
        address: {
            numStreet: String,
            street: String,
            city: String,
            cp: String,
            country: String
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            required: true

        },
        updateAt: {
            type: Date,
            required: false
        },
        deliveredAt: {
            type: Date,
            required: false
        },
        status: {
            type: String,
            enum: ['recorded' , 'in progress', 'on the road', 'delivred', 'cancelled'],
            default:'recorded'
        },
    })
)

export default Order;
