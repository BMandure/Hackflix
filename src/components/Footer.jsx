import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="row w-100 h-100">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <a href="#" className="footer-link">
            Terms & Conditions
          </a>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <p className="footer-item">
            Made by <strong>@BMandure</strong>
          </p>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <p className="footer-item">
            Copyright Hackflix<sup>&#169;</sup> 2023 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
