import React from "react";
import "../../css/style.css";
import PortfolioData from "../PortfolioData";

const WorkDone = () => {
  const { portfolioItems, portfolioIntro } = PortfolioData;
  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Portfolio</h3>
              <p className="subtitle-a">
                {portfolioIntro}
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {portfolioItems.map(({name, gitHubUrl, image,description}) => {
            return (
              <div key={name} className="col-md-4">
                <div className="work-box">
                  <a
                    href={gitHubUrl}
                    data-gall="portfolioGallery"
                    className="venobox"
                  >
                    <div className="work-img">
                      <img src={image} alt="" className="img-fluid" />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">{name}</h2>
                        <div className="w-more">
                          <span className="w-ctegory">{description}</span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href={gitHubUrl}>
                            {" "}
                            <span className="fa fa-github"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default WorkDone;
