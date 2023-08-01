import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../Data'
import '../CSS/vehicle.css'

function Vehicle() {
    return (

        <div className='grid-continer'>

            {

                Data.map((items, index) =>

                    <div key={index} className="vehicle">
                        <img src={items.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{items.model}</h5>
                            <p className="card-text">Price:{items.price}</p>


                            <Link to={`/vehicle/${items.model}`}>
                                <button className="btn btn-success">Add to cart</button>
                            </Link>

                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Vehicle
