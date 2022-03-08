const { Schema } = require('mongoose')

const recipe = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    type: {
        type: String,
        required: true,
        enum: ['classic', 'modern', 'non-alcoholic']
    },

    destilled: {
        type: String,
        enum: ['vodka', 'whisky', 'whiskey', 'rum', 'ron', 'rhum', 'gin', 'tequila', 'brandy', 'bourbon', 'vermouth']
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true,
      },
})

module.exports = recipe
