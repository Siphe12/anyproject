import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../Data'
import '../CSS/vehicle.css'
import Header from '../Components/Header'
import '../CSS/Vehicle.css'
function Vehicle() {
    return (
        <div className="body">
            <Header />

            <div className='grid-continer'>

                {

                    Data.map((items, index) =>

                        <div key={index} className="vehicle">
                            <img src={items.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{items.model}</h5>
                                <p className="card-text">Price:{items.price}</p>


                                <Link to={`/vehicle/${items.model}`}>
                                    <button className=" btn-success">success</button>
                                </Link>

                            </div>

                        </div>

                    )
                }
            </div>

        </div>



    )
}

export default Vehicle
