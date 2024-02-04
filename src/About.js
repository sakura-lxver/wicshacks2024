import React from 'react';
import Alea from './19260.jpg'
import Isha from './IMG_0007.png'
import Sauda from './sauda pic.jpg'
import Larissa from './IMG_2115.jpg'
import './css/Home.css'
function About() {
    return(
        <div className='about-background'>
        <div style={{textAlign: 'center'}}>
            <h1 style={{fontWeight: 'bolder', fontSize: '2.5rem'}}>MEET THE TEAM</h1>
        <div class="container mt-4">
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card" style={{height: '100%', width: '100%'}}>
                        <img src={Alea} class="card-image img-fluid" alt='Alea' />
                        <div class="card-body">
                            <p class="card-text">Alea Nablan</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src={Isha} class="card-image img-fluid" alt='Alea' />
                        <div class="card-body">
                            <p class="card-text">Isha Cheema</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card" style={{height: '100%', width: '100%'}}>
                        <img src={Sauda} class="card-image" alt='Alea' />
                        <div class="card-body">
                            <p class="card-text">Sauda Shamiha</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src={Larissa} class="card-image img-fluid" alt='Alea' />
                        <div class="card-body">
                            <p class="card-text">Larissa Franco</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default About;