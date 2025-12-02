import Header from "../components/Header";
import Footer from "../components/Footer";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import MainBanner from "../components/MainBanner";
import TechAndTools from "../components/TechAndTools";
import Link from "next/link";
import { pwaDevelopmentService,faqData,developmentProcess,whyChooseUs } from "./data";
import DropUsALine from "../components/DropUsALine";
import AppCard from "../components/appCard";

const page = () => {

  return (  
    <>
      <Header />
      <MainBanner MainBannerHeading="PWA Development" />

      <div className="why-choose-us appMobilePadding">
        <div className="container">
          <div className="row webAppDevContainer">
            <div className="col-md-6 d-flex align-items-start justify-content-center flex-column gap-3">
              <h2 className="mainHeadingMobile">PWA Development Company</h2>
              <p className="paragraphText col-md-11">
              With a history of delivering excellence, Cynergy specializes in creating seamless Progressive Web Apps (PWA) that unify iOS, Android, and web platforms through a single codebase. Cynergy’s innovative approach integrates cutting-edge features to craft PWAs that are fast, reliable, and highly engaging, ensuring an exceptional user experience. Designed with scalability and adaptability in mind, Cynergy solutions meet diverse user needs and industry demands, helping businesses stay ahead in an ever-evolving digital landscape.
              </p>
             <DropUsALine />
            </div>
            <div className="col-md-6">
              <img
                src="./images/Group1707479745.png"
                alt="why-choose-us"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container WebAppDevelopmentServices appMobilePadding">
        <div className="row">
          <div className="col-md-6 ">
            <h2 className="mainHeadingMobile">PWA Development Services</h2>
          </div>
          <div className="col-md-6 paddingLeft3 d-flex align-items-center justify-content-center">
            <p className="paragraphText col-md-11">
            Combining all essential elements of creating Progressive Web Apps (PWAs), Cynergy offers a premium process that includes personalized architecture, efficient development workflows, and seamless data migration. Cynergy’s expertise ensures your PWA stands out with intuitive design and high-performance capabilities.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 paddingRight3">
            <img
              src="./images/Group1707479693.png"
              alt="Group1707479693"
              className="w-100 h-100"
            />
          </div>
          <div className="col-md-6 paddingLeft3 d-flex align-items-center justify-content-center flex-column">
            {pwaDevelopmentService?.map((item,index)=>(
                <div className="my-2" key={index}>
                  <AppCard heading={item.heading} height={168} hoverEffect="effect4" description={item.description} />
                </div>
            ))}
            
          
          </div>
        </div>
      </div>

      <div className="DevelopmentProcess appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="mainHeadingMobile">Development Process</h2>
              <p className="paragraphText">
              Transforming your PWA idea into reality requires a structured and agile methodology. Cynergy’s fine-tune every stage of the process to deliver feature-rich progressive web apps (PWAs) with user-focused solutions. From evaluation and design to testing, deployment, and ongoing maintenance, Cynergy’s approach ensures optimal performance, functionality, and user experience.
              </p>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-end">
            <DropUsALine />
            </div>
          </div>

          <div className="row mt-5">
            {developmentProcess?.map((item,index)=>(
              <div className="col-md-6 my-2" key={index}>
                  <AppCard heading={item.heading} height={231}  hoverEffect="effect5" description={item.description} />
            </div>
            ))}

            
           
          </div>
        </div>
      </div>

      <TechAndTools desc="Elevate your web applications with the latest tools and cutting-edge technologies designed to drive your business forward. Harness the power of modern tech stacks to deliver world-class progressive web app (PWA) solutions, offering exceptional experiences for both your users and partners under one comprehensive platform." />

      <div
        className="container second-section WebAppSolutions appMobilePadding"
        style={{ backgroundColor: "#fff" }}
      >
        <h2 className="mainHeadingMobile">Web App Solutions</h2>
        <p className="paragraphText">
          Cynergy’s progressive web app (PWA) development services leverage cutting-edge technology to deliver<br /> high-performing and visually appealing PWAs. These solutions empower businesses to stand <br />out among competitors by providing advanced functionality and user-centric designs.
        </p>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="accordion mt-5" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header w-100">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <span className="subHeading">
                      Offline Functionality
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  Access your app’s features even without an internet connection. Cynergy develops PWAs that allow seamless offline interactions, ensuring consistent user engagement.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <span className="subHeading">

                    Cross-Platform Compatibility
                    </span>
                  
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  Cynergy’s PWAs are built using standardized web technologies, making them accessible across multiple platforms and devices without requiring separate versions.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <span className="subHeading">

                    Improved Performance
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  By optimizing loading speeds and enhancing interactions, Cynergy delivers PWAs that provide reliable, smooth, and fast user experiences for your audience.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <span className="subHeading">

                    Add Link Experience
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  Enhance connectivity between your web app and other platforms or devices with link-sharing capabilities. Cynergy designs PWAs that offer easy linking for a cohesive user journey.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    <span className="subHeading">
                    
                    Seamless Integration
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  Cynergy’s PWAs integrate effortlessly with existing systems and platforms, ensuring smooth transitions and enhanced functionality. This reduces disruptions and maximizes efficiency.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    <span className="subHeading">
                    Lower Development & Maintenance
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  PWAs reduce costs by eliminating the need for separate native app versions. Their single-codebase design simplifies maintenance and upgrades, ensuring long-term value for your business.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

      <div className="IosChoose appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="mainHeadingMobile">Why Choose Us</h2>
              <p className="paragraphText">
              Cynergy combines innovative strategies and advanced technology to help startups and established businesses achieve their digital goals. Cynergy’s PWA development services ensure seamless transformation and sustainable success across diverse industries.
              </p>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-end">
            <DropUsALine />
            </div>
            </div>
            <div className="row mt-4">
            {whyChooseUs.map((item, index) => (
                <div className="col-md-4 my-2" key={index}>
                  <AppCard heading={item.heading} showLine={true} height={303} isCenter={true} hoverEffect="effect5" description={item.description} />
              </div>
            ))
            }
            </div>
          
           
        </div>
      </div>

      <div className="my-4">
        <AppCta CtaHeading={"Cynergy’s Service Scope?"} />
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
