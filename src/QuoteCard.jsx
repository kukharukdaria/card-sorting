import React from "react";

const QuoteCard = ({quote}) => {
    return(
        <div className='quote'>
            <div>
                <p>{quote.quote}</p>
            </div>
            <div>
                <p>By: {quote.author}</p>
            </div>
        </div>
    )
}