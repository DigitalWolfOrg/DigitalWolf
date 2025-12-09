import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileAppTabs from "../components/MobileAppTabs";
import MaintenanceProcess from "../components/MaintenanceProcess";
import MainBanner from "../components/MainBanner";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import AppCta from "../components/AppCta";
import Link from "next/link";
import {faqData,topNotch,whyCynergy,testingApp,inevitable} from './data'
import DropUsALine from "../components/DropUsALine";
import AppCard from "../components/appCard";

const page = () => {
  
  
  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Mobile App testing" />

      <div className="container app-testing appMobilePadding" >
        <div className="row">
          <div className="col-md-6 d-flex align-items-start justify-content-center flex-column">
            <h2 className="mainHeadingMobile">Real-Time Mobile App Testing</h2>
            <p className="paragraphText my-3">
            With years of proven success, Digital Wolf offers top-tier mobile app testing services that deliver fast, flawless applications ready to stand out in the competitive digital market. Digital Wolf focuses on scaling businesses by ensuring seamless performance, superior usability, optimal efficiency, risk-free compatibility, and innovative solutions for growth in the digital space.
            </p>
           <DropUsALine />
          </div>
          <div className="col-md-6 appTestRight footerSection">
            <div className="row">
             <div className="col-md-6">
                {testingApp.slice(0,2).map((item,i)=>(
                  <div className="col-md-12 mb-5" key={i}>
                    <AppCard height={355} hoverEffect="effect9" heading={item.heading} isCenter={true} description={item.description} />
                  </div>
                ))}
             </div>
             <div className="col-md-6">
             {testingApp.slice(2,4).map((item,i)=>(
                  <div  className="col-md-12 mgTop15" style={{margin:i==0?'6rem 0 3rem 0':''}} key={i}>
                    <AppCard height={355} hoverEffect="effect9" heading={item.heading} isCenter={true} description={item.description} />
                  </div>
                ))}
             </div>
           
            </div>
          </div>
        </div>
      </div>

      <div className="topNotchSection appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-start justify-content-center flex-column">
              <h2 className="mainHeadingMobile">
              Mobile App Testing  <span>Services</span>
              </h2>
              <p className="paragraphText">
              Digital Wolf offers premium mobile app testing services, leveraging automated testing to deliver fast and effective solutions, ensuring flawless performance and optimal user experience.
              </p>

              {topNotch.map((item) => (
                <div className="">
                  <h4 className="cardHeading">{item.heading}</h4>
                  <p className="cardDesc">{item.description}</p>
                </div>
              ))}

           
            </div>
            <div className="col-md-6">
              <img className="imgWidth95" src="./images/Group1707479828.png" alt="Group1707479828" />
            </div>
          </div>
        </div>
      </div>

      <MobileAppTabs />

      <div className="TestingProcess appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h2 className="mainHeadingMobile">Inevitable Testing Process</h2>
              <p className="paragraphText">
                The top-class mobile app testing services of Digital Wolf
                streamline highly effective testing methodology to prevent
                disasters and provide the most reliable solutions to their
                partners and customers.The top-class mobile app testing services
                of Digital Wolf streamline highly effective testing
                methodology to prevent disasters and provide the most reliable
                solutions to their partners and customers.
              </p>
            </div>
            <div className="col-md-3 mgBottom25 d-flex align-items-center justify-content-end">
            <DropUsALine />
            </div>
          </div>
          <MaintenanceProcess data={inevitable} />
        </div>
      </div>

      <div className="StudiosWhy appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2 className="mainHeadingMobile">Why Choose Digital Wolf</h2>
              <p className="paragraphText">
              Digital Wolf offers top-tier mobile app testing services, utilizing highly effective testing methodologies to prevent issues and deliver the most reliable solutions for our clients and partners.
              </p>
            </div>
            <div className="col-md-5 d-flex align-items-center justify-content-end">
            <DropUsALine />
            </div>
          </div>
          <div className="row">
            {whyCynergy.map((item,i) => (
               <div className="col-md-4 mgTop25" key={i}>
                <AppCard height={303} hoverEffect="effect2" showLine={true} isCenter={true} heading={item.heading} description={item.description} />
             
             
             </div>
            ))}
           
           
          </div>
        </div>
      </div>

      <AppCta CtaHeading="Into an Innovative Mobile App." />

      <div className="mt-5">
        <FaqsSection faqs={faqData} />
        <BudgetSection />
      </div>

      <Footer />
    </>
  );
};

export default page;
