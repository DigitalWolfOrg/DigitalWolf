import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileAppTabs from "../components/MobileAppTabs";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import MaintenanceProcess from "../components/MaintenanceProcess";
import MainBanner from "../components/MainBanner";
import Link from "next/link";
import DropUsALine from "../components/DropUsALine";
import { faqData,cynergyStudio,whychooseus } from "./data";
import AppCard from "../components/appCard";
const page = () => {


  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Mobile App Support & Maintenance " />

      <div className="second-last-section appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-7 d-flex align-items-center justify-content-center paddingRight3">
              <div className="text-section">
                <h1 className="title-page mainHeadingMobile">Mobile App Maintenance Company</h1>
                <p className="paragraphText">
                Cynergy, with a proven track record in maintenance and support, offers comprehensive services to keep your mobile app updated, secure, and optimized. Our solutions focus on compliance, security, and technological enhancement to ensure seamless performance.
                </p>
               <DropUsALine />
              </div>
            </div>
            <div className="col-md-5 mgTop25 paddingRight3 py-2">
              <img
                src="./images/image-consulting.png"
                alt="image-consulting"
                className="h-100 w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container benefits-of-working py-5 appMobilePadding">
        <div className="row">
          <div className="col-md-12 py-5 d-flex align-items-center justify-content-center flex-column text-center">
            <h2 className="mb-4 mainHeadingMobile">Support and Maintenance Services</h2>
            <p className="mb-4 paragraphText">
            Our service scope includes introducing new app features, maintaining app compliance, and monitoring key performance indicators (KPIs).<br />
             With expertise, a clear process, and innovative strategies, Cynergy helps enterprises—big or small—achieve their business goals through<br /> 
             reliable maintenance and support.
            </p>
            <img
              src="./images/banner-bottom.png"
              alt="banner-bottom"
              className="w-100 mt-5"
            />
          </div>
        </div>
      </div>

      <div className="maintenance-process appMobilePaddingSmall">
        <div className="container">
          <h2 className="text-center mainHeadingMobile">Maintenance Process</h2>
          <p className="text-center paragraphText">
          At Cynergy, our comprehensive maintenance process ensures app performance, user satisfaction, and seamless functionality. <br />Each step is strategically designed to meet client needs and industry standards.
          </p>

          <MaintenanceProcess />

          <div className="mt-5 d-flex align-items-center justify-content-center">
          <DropUsALine />
          </div>
        </div>
      </div>

      <MobileAppTabs />

      <div className="app-quality-main appMobilePaddingSmall">
        <div className="container">
          <h2 className="text-center mainHeadingMobile">
          Elevating Mobile App <br /> <span>Excellence</span>
          </h2>
          <p className="text-center paragraphText">
            Harnessing productive measures to provision adequate mobile app
            evolution roadmap for the partners
            <br /> and clients to bystander sterling mobile app re-architecting
            from our top-notch support activities.
          </p>
          <div className="row mt-5">
            <div className="col-md-7">
              {cynergyStudio.map((item,i)=>(
               <div className="my-4 col-md-11">
                <AppCard height={240} hoverEffect="effect7" heading={item.heading} description={item.description} />
               </div>
            
              ))}
            </div>
            <div className="col-md-5 marginTopMobile">
              <img
                src="./images/landing_prospecting.png"
                alt="landing_prospecting"
                className="w-100 h-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="why-choose-sec appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2 className="mainHeadingMobile">Why Choose Us</h2>
              <p className="paragraphText">
              In today’s tech-driven world, consistent mobile app maintenance is essential to ensure app viability. At Cynergy, Cynergy is not only updates apps but also explores and implements strategies to scale them efficiently.
              </p>
            </div>
            <div className="col-md-5 d-flex justify-content-end align-items-center">
            <DropUsALine />
            </div>
          </div>
          <div className="row mt-5">
            {whychooseus.map((item,i)=>(
                <div className="col-md-4 my-3" key={i}>
                  <AppCard heading={item.heading} hoverEffect="effect5" height={303} showLine={true} isCenter={true} description={item.description} />
              
              </div>
            ))}
          </div>
       
        </div>
      </div>

      <div className="my-4">
        <AppCta CtaHeading="Into an Innovative Mobile App." />
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
