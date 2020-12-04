import React from 'react';
import krisiun from '../Products/assets/krisiun.jpg';
import aerosmith2 from '../Products/assets/aerosmith2.jpg';

export default function Home() {
    return (

        <div div className="container text-center">
            <div className="row text-dark">
                <h4 className="text-dark"> Be welcome !</h4>
                <h4 className="text-danger">Here in our store, <em>programmers have discounts</em> on vinyl disks!</h4>

                <div className="col-sm-6">
                    <h1>You won't hear anything like that in the next decade</h1>
                    <img alt="" src={krisiun} style={{ width: "70%" }} />


                </div>
                <div class="col-sm-6">
                    <h1>don't forget that brutes also love</h1>
                    <img alt="" src={aerosmith2} style={{ width: "70%" }} />

                </div>
            </div>


        </div>
    );
}