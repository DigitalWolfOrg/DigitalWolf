import Header from "../components/Header";
import Footer from "../components/Footer";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import IOSAppDesignServices from "../components/IosDesignServices";
import MainBanner from "../components/MainBanner";
import Link from "next/link";
import {faqData,designProcess,workingWith,whyChooseUs} from './data'
import DropUsALine from "../components/DropUsALine";
import AppCard from "../components/appCard";
import AppImageCard from "../components/AppImageCard";

const page = () => {

  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="iOS App Design" />

      <div className="why-choose-us appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img
                src="./images/ios-sec-img.png"
                alt="why-choose-us"
                className="w-100"
              />
            </div>
            <div className="col-md-7 d-flex align-items-end justify-content-center flex-column text-end">
              <h2 className="w-100 mainHeadingMobile mgTop25">Transformation Agency</h2>
              <p className="paragraphText my-4 col-md-9">
              With years of experience, Cynergy’s expert team specializes in creating a seamless platform for your iOS app ideas. Cynergy prioritizes credibility, innovation, and modern technologies to craft solutions that meet the latest industry standards, ensuring your application stands out in the ever-evolving digital world.
              </p>
          <DropUsALine />
            </div>
          </div>
        </div>
      </div>

      <IOSAppDesignServices />

      <div className="iosDesignProcess appMobilePaddingSmall">
        <div className="container">
          <h2 className="mainHeadingMobile">Design Process</h2>
          <p className="text-center paragraphText">
          Our refined iOS app design process is built around user-centric methodologies, combining the latest technologies<br />
           with a meticulous  approach to create high-quality, innovative app designs. Cynergy ensures each design phase 
           <br />contributes to building seamless, functional, and visually compelling applications.
          </p>
          <div className="row">
            {designProcess.map((item, index) => (
               <div className="col-md-6 my-2" key={index}>
                <AppCard heading={item.heading} height={292} hoverEffect="effect3" description={item.description} />
             
             </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container workingWithCynergy appMobilePadding">
        <h2 className="mainHeadingMobile">
          Working With
         Cynergy  <br /> Studios
        </h2>
        <p className="text-center paragraphText">
        Cynergy provides exceptional design services backed by years of experience, ensuring the creation of intuitive, user-friendly app designs that <br /> align with your business goals. Our team’s commitment to excellence and customer satisfaction guarantees outstanding user experiences.
        </p>
        <div className="row mt-5">
          {workingWith.map((item, index) => (
                <div className={`col-md-3 ${index > 0 ?'mgTop25':''}`} key={index}>
                  <AppImageCard heading={item.heading} imgUrl={`/images/${item.imgUrl}`} height={515} hoverEffect="effect6" isCenter={true} description={item.description} />
              </div>
          ))}
      
        
        </div>
      </div>

      <div className="IosChoose appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="mainHeadingMobile">Why Choose Us</h2>
              <p className="paragraphText">
              Partnering with Cynergy means gaining access to a team of experienced designers who will elevate your brand and digital presence. Cynergy utilizes cutting-edge tools and methodologies to craft exceptional iOS apps that exceed user expectations and position your brand for success.
              </p>
            </div>
            <div className="col-md-4"></div>

            {whyChooseUs.map((item, index) => (
               <div className="col-md-4 my-2" key={index}>
                <AppCard heading={item.heading} height={303} hoverEffect="effect5" isCenter={true} showLine={true} description={item.description} />
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
