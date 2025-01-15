import React from "react";
import PageHeader from "../../components/PageHeader";

const subTitle = "About Style world";
const title = "Meet Our Founders – The Visionaries Behind Style World";
const desc =
  "At Style World, the driving force behind our success is the dynamic partnership of Pream and Naveen Sou, whose unique blend of talents and vision have shaped our brand into a fashion destination for everyone.";
const desc2 =
  " As the business strategist, Pream plays a pivotal role in planning and managing the backend operations of Style World. With his sharp acumen and a knack for executing effective strategies, he ensures that everything runs seamlessly behind the scenes. From sourcing high-quality products to overseeing logistics and operations, Pream’s contributions form the backbone of Style World's success.";
const desc3 =
  "Naveen, on the other hand, is the energetic front face of Style World. A true youth icon, he has a natural flair for connecting with people and creating a buzz. Starting with innovative social media marketing campaigns, Naveen has brought Style World into the spotlight. His ability to engage audiences and keep the brand relatable and trendy has turned Style World into a recognizable name in the fashion industry.";
const title2 = "Pream – The Strategic Mastermind";
const title3 = "Naveen Sou – The Youth Icon and Front Face";

const year = "30+";
const expareance = "Years Of Experiences";

const aboutList = [
  {
    imgUrl: "/images/about/icon/01.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Skilled Instructors",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
  {
    imgUrl: "/images/about/icon/02.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Get Certificate",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
  {
    imgUrl: "/images/about/icon/03.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Online Classes",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
];

const About = () => {
  return (
    <div>
      <PageHeader title={"About Our Brand"} curPage={"About"} />
      <div className="about-section style-3 padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
            <div className="col">
              <div className="about-left">
                <div className="about-thumb">
                  <img src="/images/about/01.jpg" alt="about" />
                </div>
                <div className="abs-thumb">
                  <img src="/images/about/02.jpg" alt="about" />
                </div>
                <div className="about-left-content">
                  <h3>{year}</h3>
                  <p>{expareance}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="about-right">
                <div className="section-header">
                  <span className="subtitle">{subTitle}</span>
                  <h2 className="title">{title}</h2>
                  <p>{desc}</p>
                  <h3>{title2}</h3>
                  <p>{desc2}</p>
                  <h3>{title3}</h3>
                  <p>{desc3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
