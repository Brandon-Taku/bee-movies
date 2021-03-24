import React from 'react'

const Header = ({ image }) => {
    
    return (
        <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-secondary shadow fixed-top" >
                    <a className="navbar-brand" href="/"> Movie Hub</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav" style={{ color: "white" }}>
                        <a className="nav-item nav-link active" href="/">Home <span className="sr-only"></span></a>
                        <a className="nav-item nav-link" href="/top-rated">Top-Rated</a>
                        <a className="nav-item nav-link" href="/up-coming">Up-Coming</a>
                        <a className="nav-item nav-link" href="/now-showing">Now-Showing</a>
                        <a className="nav-item nav-link" href="/tv-series">TV-Series</a>
                        </div>
                    </div>
                </nav>
                

                <div className="row" id="header">
                <div className="col-md-3 col-md-offset-8">
                    <div className="center p-5">
                        <img src={process.env.PUBLIC_URL + '6366.jpg'} width="540%" style={{ borderRadius: 100 }}/> 
                    </div>
                </div>
            </div> 


        </div>
    )
}


export default Header