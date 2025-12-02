import Header from "../components/Header";
import Footer from "../components/Footer";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import MainBanner from "../components/MainBanner";
import Link from "next/link";
import DropUsALine from "../components/DropUsALine";
import { faqData,designProcess,androidAppDesign,whyChooseUs } from "./data";
import AppCard from "../components/appCard";

const page = () => {

  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Android App Design" />

      <div className="why-choose-us appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="./images/Group1707479732.png"
                alt="why-choose-us"
                className="w-100"
              />
            </div>
            <div className="col-md-6 d-flex align-items-start justify-content-center flex-column paddingLeft3">
              <h2 className="mainHeadingMobile marginTopMobile">Android Mobile App Design Company</h2>
              <p className="paragraphText">
              Cynergy delivers industry-leading Android app design services, blending innovation with strict adherence to design guidelines. Our expertise maximizes user engagement and strengthens brand identity, helping businesses achieve their full potential in the mobile app market.
              </p>
           <DropUsALine />
            </div>
          </div>
        </div>
      </div>

      <div className="container mobileAppDesign appMobilePadding ">
        <div className="row">
          <div className="col-md-6 d-flex align-items-start mgBottom flex-column justify-content-center">
            <h2 className="mainHeadingMobile"> Mobile App Design Services</h2>
            <p className="paragraphText">
            Cynergy specializes in creating stunning Android app designs with a focus on user-friendly interfaces. Our experienced designers craft innovative solutions tailored to your brand’s needs, ensuring global recognition and lasting impact.
            </p>
            <DropUsALine />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <div className="mobileAppDesignBox mobileCardPadding">
                  <img
                    src="./images/mobile-search_12600961.png"
                    alt="mobile-search_12600961"
                  />
                  <h4 className="cardHeading">UX/UI Design</h4>
                  <p className="cardDesc hide-scrollbar" style={{height:'255px'}}>
                  Consistency is key in Android app design. Cynergy’s skilled designers prioritize seamless user interaction, product visibility, and credibility, crafting user-friendly interfaces that boost engagement and create lasting impressions on users.
                   
                  </p>
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className="mobileAppDesignBox mobileCardPadding">
                  <img src="./images/rgb_85900432.png" alt="rgb_85900432" />
                  <h4 className="cardHeading">Motion Design</h4>
                  <p className="cardDesc hide-scrollbar" style={{height:'255px'}}>
                  Our motion design services add captivating animations and intuitive layouts to your app, enhancing user experience and functionality. With transparent navigation and sleek interfaces, Cynergy ensures your app stands out in the marketplace.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mgTop25">
                <div className="mobileAppDesignBox mobileCardPadding">
                  <img
                    src="./images/mobile-development_70753731.png"
                    alt="mobile-development_70753731"
                  />
                  <h4 className="cardHeading">Branding</h4>
                  <p className="cardDesc hide-scrollbar" style={{height:'255px'}}>
                  Cynergy emphasizes strong branding to enhance your app’s identity and resonate with your audience. Cynergy ensures your Android app design aligns with top industry standards, improving its competitiveness across platforms.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className="mobileAppDesignBox mobileCardPadding">
                  <img
                    src="./images/cloud-computing_63418351.png"
                    alt="cloud-computing_63418351"
                  />
                  <h4 className="cardHeading">Design Consultancy</h4>
                  <p className="cardDesc hide-scrollbar" style={{height:'255px'}}>
                  Our design consultancy offers expert guidance to enhance your app’s aesthetic and functionality. Cynergy collaborates closely with clients to create tailored design strategies, focusing on exceptional UX/UI design, interface structure, and visual appeal to accelerate your app's success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="DesignProcess appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="mainHeadingMobile">Design Process</h2>
              <p className="paragraphText">
              Cynergy utilizes proven strategies to streamline Android app design, ensuring seamless functionality and cohesive design architecture. Cynergy delivers hassle-free, high-quality UI/UX designs tailored to your business objectives.
              </p>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-end">
            <DropUsALine />
            </div>
          </div>
          <div className="row mt-5">
            {designProcess.map((item,i)=>(
              <div className="col-md-4 my-2" key={i}>
                <AppCard heading={item.heading} height={370} isCenter={true} hoverEffect="effect2" ef description={item.description} />
            </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container highAndroid appMobilePadding">
        <div className="row">
          <div className="col-md-8">
            <h2 className="mainHeadingMobile">Android Mobile App Design</h2>
            <p className="paragraphText">
            Our high-end Android mobile app design services focus on crafting efficient project flows and addressing complex UI/UX design structures. Cynergy has streamlined our technical processes to tackle client challenges promptly and effectively.
            </p>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-end">
          <DropUsALine />
          </div>
        </div>
        <div className="row">
          {androidAppDesign.map((item,i)=>(
            <div className="col-md-6 my-2" key={i}>
                <AppCard heading={item.heading} height={206} hoverEffect="effect1" description={item.description} />
            </div>
          ))

          }
        </div>
      </div>

      <div className="WhyChooseUsMobile appMobilePaddingSmall">
        <div className="container">
          <h2 className="mainHeadingMobile">Why Choose Us</h2>
          <p className="text-center paragraphText">
          Cynergy employs strategic, creative, and technical methodologies to deliver exceptional user experiences that surpass client expectations.<br /> Our Android mobile app design services utilize innovative solutions to elevate brand visibility and drive revenue growth.
          </p>
          <div className="row mt-5">
            {whyChooseUs.map((item,i)=>(
              <div className="col-md-4 my-2">
                <AppCard heading={item.heading} height={255} isCenter={true} hoverEffect="effect1" description={item.description} />
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
