import Header from "../components/Header";
import Footer from "../components/Footer";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import MainBanner from "../components/MainBanner";
import Link from "next/link";
import {faqData,mobileApp,whyChooseUs} from './data'
import DropUsALine from "../components/DropUsALine";
import AppCard from "../components/appCard";

const page = () => {
 

  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Mobile App Consulting" />

      <div className="orange-wrap appMobilePaddingSmall">
        <div className="second-last-section">
          <div className="container">
            <div className="row">
              <div className="col-md-7 d-flex align-items-center justify-content-center pe-5">
                <div className="text-section">
                  <h2 className="title-page mainHeadingMobile">Top-Notch Mobile App Consulting Services</h2>
                  <p className="paragraphText my-4">
                  With years of expertise in mobile app consulting, Cynergy has built a legacy of delivering exceptional services to our partners and clients. From initial app audits to mobile API development, Cynergy provides comprehensive solutions to create competitive, high-performing apps. Cynergy’s mobile consulting team excels in agile methodologies, focusing on efficient planning, design, and development to craft engaging mobile experiences.
                   
                  </p>
                 <DropUsALine />
                </div>
              </div>
              <div className="col-md-5 paddingRight3 py-2">
                <img
                  src="./images/Group1707479835.png"
                  alt="image-consulting"
                  className="h-100 w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="second-last-section appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <h2 className="top-ranked text-center mb-5 mainHeadingMobile">
              Mobile App Development
              <br /> Consulting Strategies
            </h2>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img
                src="./images/Group-1707479639.png"
                alt="faqs-sec"
                className="line-image-1"
              />
              <div>
                  {mobileApp.map((item,i)=>(
                    <div className="my-4" key={i}>
                      <AppCard heading={item.heading} hoverEffect="effect2" height={168} description={item.description} />
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-md-6 paddingLeft3 py-2">
              <img
                src="./images/Group1707479662.png"
                alt="faqs-sec"
                className="h-100 w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container right-let-mid appMobilePadding">
        <div className="row">
          <div className="col-md-6">
            <img src="./images/Group986783.png" className="w-100 h-100" />
          </div>
          <div className="col-md-6 d-flex align-items-start justify-content-center flex-column paddingLeft3 gap-3">
            <h2 className="mainHeadingMobile mgTop25">Mobile App Optimization & Audit</h2>
            <p className="paragraphText">
            Our mobile app audits are designed to assess security, compliance, and functionality, helping to identify and address any vulnerabilities or breaches. Cynergy offers expert guidance in optimizing mobile app performance and ensuring adherence to industry standards and regulations.
            </p>
            <DropUsALine />
          </div>
        </div>
      </div>

      <div className="container right-let-mid appMobilePadding">
        <div className="row">
          <div className="col-md-6 d-flex align-items-start justify-content-center flex-column pe-5 gap-3">
            <h2 className="mainHeadingMobile">Mobile App Modernization</h2>
            <p className="paragraphText">
            As technology evolves, so must your mobile apps. Cynergy helps modernize and enhance your existing mobile applications, incorporating the latest features and strategies to boost user engagement. Our approach ensures your app remains relevant in a fast-changing digital landscape.
            </p>
            <DropUsALine />
          </div>
          <div className="col-md-6 mgTop25">
            <img src="./images/Group235483574.png" className="w-100 h-100" />
          </div>
        </div>
      </div>

      <div className="container right-let-mid appMobilePadding">
        <div className="row">
          <div className="col-md-6">
            <img src="./images/Group2235467.png" className="w-100 h-100" />
          </div>
          <div className="col-md-6 d-flex mgTop25 align-items-start justify-content-center flex-column paddingLeft3 gap-3">
            <h2 className="mainHeadingMobile">Mobile App Design</h2>
            <p className="paragraphText">
            In today's digital age, the design of mobile apps is crucial for user engagement, accessibility, and overall experience. At Cynergy, we offer cost-effective design solutions for all mobile platforms—whether Native, Hybrid, or Cross-Platform—to ensure your app stands out in a crowded market.
            </p>
            <DropUsALine />
          </div>
        </div>
      </div>

      <div className="orange-wrap py-5 appMobilePaddingSmall">
        <div className="container py-5 text-center">
          <h2 className="top-ranked mainHeadingMobile">Why Choose Us</h2>
          <p className="paragraphText">
          With over a decade of unmatched experience in mobile consulting and development, Cynergy has established itself as a leader in<br /> the digital technology landscape. Cynergy has helped countless industries and brands flourish by implementing<br /> innovative strategies and simplifying formulas for driving growth in both mobile and web development.
          </p>
          <div className="row">
            {whyChooseUs.map((item,i)=>(
                <div className={`col-md-4 my-2`} key={i}>
                <AppCard heading={item.heading} height={255} hoverEffect="effect1" description={item.description} />
               
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-4">
        <AppCta CtaHeading="Let’s Talk and Drive Business Together" />
      </div>

      <div className="my-4">
        <FaqsSection faqs={faqData} />
      </div>
      <BudgetSection />

      <Footer />
    </>
  );
};

export default page;
