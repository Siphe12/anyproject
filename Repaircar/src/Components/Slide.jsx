import React from 'react'


function Slide() {
  return (
    <div>
    <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://media.cnn.com/api/v1/images/stellar/prod/220721175751-woman-mechanic-stock.jpg?c=original" className="d-block w-100"
                    alt="First Slide" />
            </div>
            <div className="carousel-item">
                <img src="https://carcareclinic.co.za/wp-content/uploads/2023/01/car.webp" className="d-block w-100"
                    alt="Second Slide" />
            </div>
            <div className="carousel-item">
                <img src="https://www.autotrainingcentre.com/wp-content/uploads/2015/09/Top-5-Most-Common-Repairs-Youll-Encounter-in-an-Auto-Repair-Career.jpg" className="d-block w-100"
                    alt="Third Slide" />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>

    
    </div>
</div>
    
  )
}

export default Slide
