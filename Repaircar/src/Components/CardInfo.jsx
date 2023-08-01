import React from 'react'
import { useParams } from 'react-router-dom'

import Data from '../Data';

function Cardinfo() {

    const { Name } = useParams();

    return (
        <div>

            {
                Data.filter(card => card.model === Name).map
                    ((card, index) =>

                        <div key={index} className="container">

                            <img src={card.img} alt="" />
                            <h2>{card.model}</h2>
                            <h4>{card.price}</h4>

                        </div>
                    )
            }
        </div>
    )
}

export default Cardinfo
