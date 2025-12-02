import Header from "../components/Header";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import TechAndTools from "../components/TechAndTools";
import Link from "next/link";
import {section2Data,section3Data,section5Data,chooseUsData,faqData} from './data'
import DropUsALine from "../components/DropUsALine";
import AppCard from "../components/appCard";
import Image from "next/image";

const page = () => {

  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Web App Development" />

      <div className="container-fluid webAppDev appMobilePadding">
        <div className="row webAppDevContainer">
          <div className="col-md-6 d-flex align-items-start flex-column gap-4 webAppDevContainerFirst">
            <h2 className="mainHeadingMobile">
              Web App Development
              <br /> Company
            </h2>
            <p className="paragraphText col-md-11">
            As a premier web application development company, we specialize in delivering exceptional solutions that drive growth for businesses and enterprises. Cynergy’s expertise spans the creation of custom apps, innovative digital products, and tailored professional services that cater to diverse industry needs. With a strong foundation and an experienced team, we craft web applications that combine robust functionality, security, and adaptability to stay ahead of evolving market trends.
             {/* We are committed to designing unique, scalable infrastructures that empower businesses to achieve their goals. At the heart of Cynergy’s approach lies the belief that effective strategies and ongoing app optimization are key to fostering business success. Partner with us to transform your vision into a high-performing web application that delivers measurable results. */}
            </p>
            <DropUsALine />
          </div>
          <div className="col-md-6">
          <img src="./images/image82.png" alt="image82" className="w-100" />
            {/* <Image src="/images/image82.png" alt="image82" layout="responsive" width={100} height={100} /> */}
          </div>
        </div>
      </div>

      <div className="container highAndroid appMobilePadding" >
        <h2 className="text-center mainHeadingMobile">
          Web Application
          <br /> Development Services
        </h2>
        <p className="text-center paragraphText">
        Empower your business with cutting-edge web-based solutions designed to thrive in the ever-evolving digital landscape.<br /> Cynergy’s expertise lies in crafting seamless and scalable web applications tailored to drive exceptional business outcomes. <br />From user-friendly portals to robust enterprise solutions, we redefine possibilities in web app development.
        </p>
        <div className="row">
          {section2Data.map((item,index)=>(
            <div className="col-md-6 my-2" key={index}>
            <AppCard heading={item.heading} hoverEffect="effect1" description={item.description} />
          </div>
          ))

          }
        </div>
      </div>


      <div className="DesignProcess appMobilePaddingSmall">
        <div className="container">
          <h2 className="text-center mainHeadingMobile">Web App Process</h2>
          <p className="text-center paragraphText">
          Cynergy’s structured and efficient web app development process ensures the creation of <br /> innovative and high-performing web applications. From initial concepts to deployment,<br /> Cynergy focuses on delivering seamless solutions that meet your business goals and exceed industry standards.
          </p> 
          <div className="row">
            {section3Data?.map((item,i)=>(
              <div className="col-md-4 my-2" key={i}>
              <AppCard heading={item.heading} height={370} hoverEffect="effect2" isCenter={true} description={item.description} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <TechAndTools />

      <div className="iosDesignProcess appMobilePaddingSmall" style={{ background: "#fff" }}>
        <div className="container">
          <h2 className="mainHeadingMobile">
            Web App Development
            <br /> With{" "}
            <span style={{ color: "#d35e1e" }}>Digital Wolf</span>
          </h2>
          <p className="text-center paragraphText">
          Our expert development team provides meticulous, detail-oriented services to enhance your web application's credibility and performance.<br /> Cynergy prioritize the integrity and security of each development phase, ensuring robust and reliable web solutions.
          </p>
          <div className="row">
            {section5Data?.map((item,i)=>(
                  <div className="col-md-6 my-2" key={i}>
                  <AppCard heading={item.heading} height={295} hoverEffect="effect3" description={item.description} />
                  </div>
            ))}
          </div>
        </div>
      </div>

      <div className="WhyChooseUsMobile appMobilePaddingSmall">
        <div className="container">
          <h2 className="mainHeadingMobile">Why Choose Us</h2>
          <p className="text-center paragraphText">
          With years of expertise in web application development, Cynergy stands out for delivering exceptional web solutions.
          <br /> Our capabilities extend beyond web apps to include web portals, ensuring a robust framework
          <br /> and innovative design that transforms your digital vision into reality.
          </p>
          <div className="row mt-5">
            {chooseUsData?.map((item,i)=>(
               <div className="col-md-4 my-2">
                  <AppCard heading={item.heading} height={255} hoverEffect="effect2" isCenter={true} description={item.description} />
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
