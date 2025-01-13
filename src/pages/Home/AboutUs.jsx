
import CountUp from 'react-countup';
import { Link } from "react-router-dom";

const subTitle = "Bring Style World to Your City!";
const title = "Start Your Franchise";
const desc = "Join the Style World family and become a part of our growing fashion brand! With a strong presence in Boranada, Jodhpur, and a loyal customer base, Style World offers you the perfect opportunity to start your own business in the fashion industry. By opening a franchise, you'll gain access to our proven business model, extensive product range, and ongoing support to help you succeed. Together, let's bring affordable, stylish clothing, shoes, and accessories to customers across India!";
const btnText = "Contact Us";

const countList = [
    {
        iconName: 'icofont-users-alt-4',
        count: '98344',
        text: 'Happy Customers',
    },
    {
        iconName: 'icofont-graduate-alt',
        count: '7',
        text: 'Years of Trusted Services',
    },
    {
        iconName: 'icofont-notification',
        count: '127',
        text: 'Rewards For Best Services',
    },
]

const AboutUs = () => {
  return (
    <div className="instructor-section style-2 padding-tb section-bg-ash">
    <div className="container">
        <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-1 row-cols-md-2 row-cols-xl-3 align-items-center">
                <div className="col">
                    {countList.map((val, i) => (
                        <div className="count-item" key={i}>
                            <div className="count-inner">
                                <div className="count-icon">
                                    <i className={val.iconName}></i>
                                </div>
                                <div className="count-content">
                                    <h2><span className="count"><CountUp end={val.count} /></span><span>+</span></h2>
                                    <p>{val.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col">
                    <div className="instructor-content">
                        <span className="subtitle">{subTitle}</span>
                        <h2 className="title">{title}</h2>
                        <p>{desc}</p>
                        <Link to="https://www.linkedin.com/in/rohitrai0/" target='blank' className="lab-btn"><span>{btnText}</span></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="instructor-thumb">
                        <img src="/images/instructor/01.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AboutUs