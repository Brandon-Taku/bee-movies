import React from 'react'


const Header = () => {

    return (
        <div id="demo-1"  style={{
            backgroundImage: `url(/screen.jpg)`
        }}>
            <div class="demo-inner-content">

                <div class="header-w3-agileits" id="home">
                    <div class="inner-header-agile">
                        <nav class="navbar navbar-default">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <h1><a href="/"><span>B</span>ee <span>M</span>ovies</a></h1>
                            </div>

                            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul class="nav navbar-nav">
                                    <li class="active"><a href="/">Home</a></li>

                                    <li><a href="/top-rated">Top-Rated</a></li>
                                    <li><a href="/tv-series">TV-Series</a></li>
                                    <li><a href="/up-coming">Up-Coming</a></li>
                                    <li><a href="/now-showing">Now-Showing</a></li>
                                   
                                </ul>

                            </div>
                            <div class="clearfix"> </div>
                        </nav>
                        
                            <div id="cd-search" class="cd-search">
                                <form action="#" method="post">
                                    <input name="Search" type="search" placeholder="Search..." />
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <div class="baner-info">
                    <h3>Latest <span>On</span>Line <span>Mo</span>vies</h3>
                    <h4>In space no one can hear you scream.</h4>
                    <a class="w3_play_icon1" href="#small-dialog1">WATCH TRAILER</a>
                </div> */}
            
        </div>

    )
}


export default Header