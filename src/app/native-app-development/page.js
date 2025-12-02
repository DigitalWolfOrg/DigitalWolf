import Header from "../components/Header";
import Footer from "../components/Footer";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import MainBanner from "../components/MainBanner";
import WeCommitSlider from "../components/WeCommitSlider";
import MobileExperiences from "../components/MobileExperiences";
import TechAndTools from "../components/TechAndTools";
import {faqData,developmentProcess,cynergyKnack,whyChooseUs} from './data'
import DropUsALine from "../components/DropUsALine";
import AppCard from "../components/appCard";
import AppImageCard from "../components/AppImageCard";

const page = () => {
  
  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Native App Development" />

      <WeCommitSlider />

      <div style={{ backgroundColor: "#fffbf8" }} >
        <div className="container-fluid mobile-experiences appMobilePaddingSmall">
          <h2 className="text-center fs-1 mainHeadingMobile">
            Empowering Industries With <br /> Innovative Solutions
          </h2>
          <p className="text-center paragraphText">
          Cynergy is transforming industries through the development of forward-thinking, advanced solutions. By leveraging the latest technologies,
          <br /> Cynergy craft unique and powerful web and mobile applications that help businesses thrive. Our expertise has earned us global<br />
           recognition as we continue to create innovative digital experiences for brands and businesses worldwide.
          </p>
          <MobileExperiences />
        </div>
      </div>

      <div className="TechAndTools appMobilePaddingSmall">
        <h2 className="mainHeadingMobile">Development Process</h2>
        <p className="paragraphText">
        Our streamlined development process ensures efficiency and excellence at every stage
        </p>
        <div className="container mt-5">
          <div className="row">
            {developmentProcess.map((item,index)=>(
               <div className={`col-md-4 my-2`} key={index}>
                <AppCard heading={item.heading} hoverEffect="effect1" height={255} isCenter={true} description={item.description} />
             </div>
            ))}
          </div>
       

          <div className="row mt-5">
            <div className="col-md-12 d-flex align-items-center justify-content-center">
           <DropUsALine />
            </div>
          </div>
        </div>
      </div>

      <TechAndTools />

      <div style={{ backgroundColor: "#fffbf8" }}>
        <div className="container workingWithCynergy appMobilePadding">
          <h2 className="mainHeadingMobile">Cynergy’s Knack Of Skills</h2>
          <p className="text-center paragraphText">
          Cynergy’s expertise lies in crafting high-performance native apps that redefine user experiences. With a dedicated team and<br />
           innovative methodologies, Cynergy build fast, responsive, and secure applications tailored to iOS and Android platforms. <br />
           Our user-centric approach ensures compliance with industry standards, delivering feature-rich solutions<br />
            that empower businesses to thrive in competitive markets.
          </p>
          <div className="row mt-5">

              {cynergyKnack.map((item,i)=>(
                 <div className={`col-md-3 ${i > 0 ?'mgTop25':''}`} key={i}>
                  <AppImageCard heading={item.heading} imgUrl={`/images/${item.imgUrl}`} height={515} isCenter={true} hoverEffect="effect6" description={item.description} />

               </div>
              ))}
          </div>
          <div className="row mt-5">
            <div className="col-md-12 d-flex align-items-center justify-content-center">
            <DropUsALine />
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center OurChooseOpt appMobilePadding">
        <h2 className="mainHeadingMobile">Why Choose Us</h2>
        <p className="paragraphText">
        Cynergy brings a wealth of expertise and innovation to the world of web and app development. Our team is dedicated to providing top-tier,
        <br />
         cutting-edge native applications tailored to meet your business needs. Cynergy follows the latest trends and employs the most<br /> advanced development tools, ensuring that your app stands out in a competitive digital landscape.
          Cynergy’s goal is to drive your <br />business growth by crafting custom solutions that address your challenges while offering enhanced performance and scalability.
        </p>
        <div className="row mt-4">

           {whyChooseUs.map((item,i)=>(
            <div className="col-md-4 my-2" key={i}>
                <AppCard heading={item.heading} showLine={true} height={303} isCenter={true} hoverEffect="effect2" description={item.description} />
           
          </div>
           ))

           }   
        </div>
       
        <div className="row mt-5">
            <div className="col-md-12 d-flex align-items-center justify-content-center">
            <DropUsALine />
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
