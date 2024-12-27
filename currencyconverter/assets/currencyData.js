const currency = ['United State Doller', 'Sri Lanka Rupee', 'Indian Rupee'];
const currencyConvert = [
    {currency:'United State Doller',
        convert:[
            {country:'Sri Lanka Rupee',convertPrice:294.44},
            {country:'India Rupee',convertPrice:85.41},
        ]
    },
    {currency:'Sri Lanka Rupee',
        convert:[
            {country:'United State Doller',convertPrice:0.0034},
            {country:'India Rupee',convertPrice:0.29},
        ]
    },
    {currency:'Indian Rupee',
        convert:[
            {country:'United State Doller',convertPrice:0.012},
            {country:'Sri Lanka Rupee',convertPrice:3.45},
        ]
    }
]

module.exports = {
    currency,
    currencyConvert
}