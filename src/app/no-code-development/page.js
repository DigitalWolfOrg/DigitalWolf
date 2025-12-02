import Header from "../components/Header";
import Footer from "../components/Footer";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import MainBanner from "../components/MainBanner";
import Link from "next/link";
import { faqData,empowerWithEase,cardData } from "./data";
import DropUsALine from "../components/DropUsALine";
import AppCard from "../components/appCard";
import AchievementCard from "../components/AchievementCard";

const page = () => {
 
  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="No-Code / Low-Code Development" />

      <div className="container LowCodeNoCode appMobilePadding">
        <div className="row">
          <div className="col-md-6 d-flex align-items-start justify-content-center flex-column">
            <h2 className="mainHeadingMobile">Low-Code/No-Code Mastery: Platforms We Excel In</h2>
            {/* <h3 className="my-2 subHeading" style={{fontWeight:'600'}}>Our Expertise in Action Services</h3> */}
            <p className="paragraphText my-3">
            Cynergy specializes in leading low-code/no-code platforms like Bubble, OutSystems, and Mendix, enabling businesses to quickly create powerful applications without extensive coding knowledge, streamlining workflows, and reducing development time.
            </p>
            <DropUsALine />
          </div>
          <div className="col-md-6 footerSection">
            <img
              src="./images/Group37653456.png"
              alt="Group37653456"
              className="w-100"
            />
          </div>
        </div>
      </div>

      <div className="DesignProcess appMobilePaddingSmall">
        <div className="container">
          <h2 className="text-center mainHeadingMobile">
            Empower with Ease: No-
            <br />
            Code/Low-Code
          </h2>
          <p className="text-center paragraphText">
          Cynergy’s low-code/no-code solutions empower businesses to rapidly create apps and automate processes with minimal coding.<br /> This approach accelerates development, enhances collaboration, and reduces the need for specialized technical expertise.
          </p>
          <div className="row">
            {empowerWithEase.map((item,i)=>(
                <div className="col-md-4 my-2" key={i}>
               <AppCard heading={item.heading} hoverEffect="effect2" isCenter={true} height={255} description={item.description} />
                </div>
            ))

            }
          </div>
        </div>
      </div>

      <div className="SuccessfullDeveloped appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mainHeadingMobile">
                Our Successfully <br /> Developed Projects
              </h2>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-end footerSection">
            <DropUsALine />
            </div>
          </div>

          <div className="mt-5">
            <AchievementCard data={cardData} />
          </div>

          {/* <div className="row mt-5">
            <div className="col-md-6">
              <div className="SuccessfullBox">
                <img src="./images/232343.png" alt="232343" className="w-100" />
                <h3 className="">App Store Preview</h3>
                <p className="paragraphText">
                  We may share the information that we collect, both personal
                  and non-personal, with third parties such as advertisers,
                  contest sponsors, promotional and marketing partners, and
                  others who provide our content or whose products or services
                  we think may interest you.
                </p>
                <img src="./images/Arrow17.svg" alt="Arrow17" className="Arrow17"/>
                <div className="d-flex gap-4 mt-4">
                  <button>#softwaredevelopment</button>
                  <button>#strategy</button>
                  <button>#design services</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 marginTopMobile">
            <div className="SuccessfullBox">
                <img src="./images/756834.png" alt="756834" className="w-100" />
                <h3 className="">KC Elite Ecommerce Store</h3>
                <p className="paragraphText">
                  We may share the information that we collect, both personal
                  and non-personal, with third parties such as advertisers,
                  contest sponsors, promotional and marketing partners, and
                  others who provide our content or whose products or services
                  we think may interest you.
                </p>
                <img src="./images/Arrow17.svg" alt="Arrow17" className="Arrow17"/>
                <div className="d-flex gap-4 mt-4">
                  <button>#softwaredevelopment</button>
                  <button>#strategy</button>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="SuccessfullBox">
                <img src="./images/748358.jpg" alt="748358" className="w-100" />
                <h3 className="">Cooper's Hawk</h3>
                <p className="paragraphText">
                  We may share the information that we collect, both personal
                  and non-personal, with third parties such as advertisers,
                  contest sponsors, promotional and marketing partners, and
                  others who provide our content or whose products or services
                  we think may interest you.
                </p>
                <img src="./images/Arrow17.svg" alt="Arrow17" className="Arrow17"/>
                <div className="d-flex gap-4 mt-4">
                  <button>#strategy</button>
                  <button>#design services</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 marginTopMobile">
            <div className="SuccessfullBox">
                <img src="./images/396874.png" alt="396874" className="w-100" />
                <h3 className="">Disfruta</h3>
                <p className="paragraphText">
                  We may share the information that we collect, both personal
                  and non-personal, with third parties such as advertisers,
                  contest sponsors, promotional and marketing partners, and
                  others who provide our content or whose products or services
                  we think may interest you.
                </p>
                <img src="./images/Arrow17.svg" alt="Arrow17" className="Arrow17"/>
                <div className="d-flex gap-4 mt-4">
                  <button>#softwaredevelopment</button>
                  <button>#design services</button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="my-4">
        <AppCta CtaHeading={"into an Innovative Mobile App."} />
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
