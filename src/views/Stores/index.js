import React from 'react';

export default function Stores(){
    return (
   <div className="container-fluid">
<h2 className="text-white">Our stores</h2>

<div className="container-fluid">
  <div className="row text-white">
    <div className="col-sm-4">
      <div className="card">
        <div className="card-body bg-secondary">
          <h5 className="card-title">Baltimore</h5>
          <p className="card-text">219 E 25th St</p>
          <p className="card-text">first floor</p>
          <p className="card-text">Center</p>
          <p className="card-text">+1 443-988-88446</p>
        </div>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="card">
        <div className="card-body bg-secondary">
          <h5 className="card-title">Newington</h5>
          <p className="card-text">269 E 15th St</p>
          <p className="card-text">first floor</p>
          <p className="card-text">Center</p>
          <p className="card-text">+1 860-988-78436</p>
        </div>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="card">
        <div className="card-body bg-secondary">
          <h5 className="card-title">New York</h5>
          <p className="card-text">100 Lexington Ave NY 10010</p>
          <p className="card-text">4th floor</p>
          <p className="card-text">Center</p>
          <p className="card-text">+1 4443-988-88446</p>
        </div>
      </div>
    </div>
  </div>
</div>


   </div>

    
    );
}