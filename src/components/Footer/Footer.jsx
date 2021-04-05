import React from 'react'

function Footer() {
    return (
        <div>
            <div class="contact-w3ls" id="contact">
                <div className="container">
                    <div class="footer-w3lagile-inner">

                        <div class="footer-grids w3-agileits">
                            <div class="col-md-2 footer-grid">
                                <h4>HOME</h4>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2 footer-grid">
                                <h4>Movies</h4>
                                <ul>

                                    <li><a href="/top-rated">Top-Rated</a></li>
                                    <li><a href="/tv-series">TV-Series</a></li>
                                    <li><a href="/up-coming">UP-Coming</a></li>
                                    <li><a href="/now-showing">Now-Showing</a></li>

                                </ul>
                            </div>

                            <div class="col-md-2 footer-grid">
                                <h4>SEASONS</h4>
                                <ul>

                                    <li><a href="/tv-series">TV-Series</a></li>

                                </ul>
                            </div>



                            <div class="col-md-2 footer-grid">
                                <h4 class="b-log"><a href="/"><span>B</span>ee <span>M</span>ovies</a></h4>
                                <div class="footer-grid-instagram">
                                    <a href="single.html"><img src="images/m1.jpg" alt=" " class="img-responsive" /></a>
                                </div>
                                <div class="footer-grid-instagram">
                                    <a href="single.html"><img src="images/m2.jpg" alt=" " class="img-responsive" /></a>
                                </div>
                                <div class="footer-grid-instagram">
                                    <a href="single.html"><img src="images/m3.jpg" alt=" " class="img-responsive" /></a>
                                </div>
                                <div class="footer-grid-instagram">
                                    <a href="single.html"><img src="images/m4.jpg" alt=" " class="img-responsive" /></a>
                                </div>
                                <div class="footer-grid-instagram">
                                    <a href="single.html"><img src="images/m5.jpg" alt=" " class="img-responsive" /></a>
                                </div>
                                <div class="footer-grid-instagram">
                                    <a href="single.html"><img src="images/m6.jpg" alt=" " class="img-responsive" /></a>
                                </div>

                                <div class="clearfix"> </div>
                            </div>
                            <div class="clearfix"> </div>

                        </div>
                        <h3 class="text-center follow">Connect <span>Us</span></h3>
                        <ul class="social-icons1 agileinfo">
                            <li><a href="https://github.com/Brandon-Taku"><i class="fa fa-github"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/brendon-nyakudya-4713a51a1/"><i class="fa fa-linkedin"></i></a></li>
                        </ul>

                    </div>

                </div>
                <div class="w3agile_footer_copy" style={{ backgroundColor: "#1A163F" }}>
                    <p>© 2021 Bee Movies. All rights reserved | Developed by <a style={{ color: "#ffff" }} href="http://brandy-taku.herokuapp.com/">Brandon-Taku</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
