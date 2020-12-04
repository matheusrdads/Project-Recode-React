import {Link} from 'react-router-dom';
export default function Footer() {
  return (
    <div>
      <div className="mt-5 pt-5 pb-5 footer bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xs-12 about-company">
              <h2>Heading</h2>
              <p className="pr-5 text-white-50">We have different styles of music, feel free and explore our collection </p>
              <p><a href="recode.com"><i className="fa fa-facebook-square mr-1"></i></a><a href="recode.com.br"><i className="fa fa-linkedin-s<quare"></i></a></p>
            </div>
            <div className="col-lg-3 col-xs-12">
              <h4 className="mt-lg-0 mt-sm-3">Links</h4>
              <ul className="m-0 p-0">
                <li className="link_footer"><a href="recode.com.br">Recode Pro</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-xs-12 location">
              <h4 className="mt-lg-0 mt-sm-4">Location</h4> 
              <Link to="stores">Stores</Link>
    
            </div>
          </div>
          <div className="row mt-5">
            <div className="col copyright">
              <p className=""><small className="text-white-50">© 2019. All Rights Reserved.</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}