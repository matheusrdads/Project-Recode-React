import React from 'react';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

export default function Home() {
    return (

        <div div className="container text-center">
            <div className="row text-dark">
                <h4 className="text-dark"> Be welcome !</h4>
                <h4 className="text-danger">Here in our store, <em>programmers have discounts</em> on vinyl disks!</h4>

                <div className="col-sm-6">
                    <h1>You won't hear anything like that in the next decade</h1>
                    <img src={img2} style={{ width: "70%" }} />


                </div>
                <div class="col-sm-6">
                    <h1>don't forget that brutes also love</h1>
                    <img src={img3} style={{ width: "70%" }} />

                </div>
            </div>


        </div>
    );
}