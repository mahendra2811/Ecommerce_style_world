import { Link } from "react-router-dom";

const title = "Error 404!";
const desc = (
  <>
    Oops! The Page You Are Looking For Could Not Be Found. Please Check url
    again OR contact us at{" "}
    <a href="mailto:mahendrapuniya92@gmail.com">mahendrapuniya92@gmail.com</a>{" "}
    or visit to our{" "}
    <a href="mahendrapuniya.online">website (www.MahendraPuniya.online) </a>.
  </>
);
const btnText = "Go Back To Home";

const ErrorPage = () => {
  return (
    <div className="four-zero-section padding-tb section-bg">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="four-zero-content">
              <Link to="/">
                <img src="/src/assets/images/logo/logo.png" alt="CodexCoder" />
              </Link>
              <h2 className="title">{title}</h2>
              <p>{desc}</p>
              <Link to="/" className="lab-btn">
                <span>
                  {btnText} <i className="icofont-external-link"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-8 col-sm-6 col-12">
            <div className="foue-zero-thumb">
              <img src="/src/assets/images/404.png" alt="CodexCoder" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
