import React, { useEffect } from 'react'

const MovieDetails = ({  }) => {
    
    return (
 
        <div className="container">
           <section className="mb-5">
             <div className="row">
                <div className="col-md-6 mb-4 mb-md-0">
                    <div id="mdb-lightbox-ui"></div>
                    <div className="mdb-lightbox">
                        <div className="row product-gallery mx-1">
                            <div className="col-12 mb-0">
                                <figure className="view overlay rounded z-depth-1 main-img" style={{ marginTop: 20}}>
                                    <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                        data-size="710x823">
                                        <img src={process.env.PUBLIC_URL + 'avengers.jpg'}
                                            className="img-fluid z-depth-1"></img>
                                    </a>
                                </figure>
                                
                            </div>
                        </div>
                   </div>

                   <div className="container" style={{ alignItems: "center" }}>
                    <div className="col-md-9" >
                        <p><span className="mr-1" style={{ color: "white" }}><strong>$12.99</strong></span></p>
                        <p className="pt-1" style={{ color: "white" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit
                        error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio,
                            officia quis dolore quos sapiente tempore alias.</p>
                        
                            <div>
                               <button type="button" className="btn btn-light btn-md mr-1 mb-2">Download</button>
                            </div>
                            
                        </div>
                   </div>
                
                </div>
             </div>
           </section>
        </div>

    )
}

export default MovieDetails;