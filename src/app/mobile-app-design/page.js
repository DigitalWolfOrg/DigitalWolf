import Header from "../components/Header";
import Footer from "../components/Footer";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import MainBanner from "../components/MainBanner";
import { faqData,topNotch,benefits } from "./data";
import DropUsALine from "../components/DropUsALine";
import AppCard from "../components/appCard";

const page = () => {
 
  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Mobile App Design" />

      <div className="why-choose-us appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-start justify-content-center flex-column">
              <h2 className="mainHeadingMobile">Why Choose Us</h2>
              <p className="paragraphText my-3 col-md-11">
              Cynergy specializes in creating intuitive and visually appealing mobile app designs that offer seamless user experiences. Our expert team combines creativity with the latest design trends to ensure your app stands out in the competitive marketplace. With a user-centric approach, Cynergy focuses on understanding your audience and building designs that are not only aesthetically pleasing but also functional. Cynergy’s deliver high-quality, responsive, and scalable designs tailored to your business needs, ensuring your app’s success on both iOS and Android platforms. Choose us for innovative mobile app designs that drive results.
              </p>
              <DropUsALine />
            </div>
            <div className="col-md-6 footerSection">
              <img
                src="./images/why-choose-us.png"
                alt="why-choose-us"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{overflowX:'hidden'}} className="container py-5 my-5 appMobilePaddingSmall">
       
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <h2 className="mainHeadingMobile text-center">
              Top Notch Team of <br /> Digital Wolf
            </h2>
            <p className="paragraphText text-center">
            Cynergy stands out for its unmatched creativity and expertise in delivering cutting-edge solutions for designing exceptional user interfaces that elevate user experiences to the highest level.
            </p>
          </div>
        </div>

        <div className="row mt-5">
            {topNotch.map((item,i)=>(
              <div className="col-md-6 my-2" key={i}>
              <AppCard heading={item.heading} hoverEffect="effect1" height={206} description={item.description} />
              </div>
            ))}
           
        </div>
      </div>

      <div className="specialists-for-platforms appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-8 py-5">
              <h2 className="mainHeadingMobile">Specialists for Platforms</h2>
              <p className="paragraphText">
              Cynergy brings together a top-tier team of designers who focus on creating seamless and effective operational mechanisms tailored to meet our clients' needs. From modern UI designs to sleek layouts, our experts develop intuitive, unique designs that enhance user experience and drive engagement.
              </p>
            </div>
            <div className="col-md-4 mgBottom d-flex align-items-center justify-content-end">
            <DropUsALine />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="m-1 inner-blog-section-1 row">
                <div className="col-md-6">
                  <h3 className="cardHeading">Native Android App Design</h3>
                  <p style={{color:'white',fontSize:'16px',lineHeight:'27px',marginTop:'20px',height:'235px'}} className="hide-scrollbar">
                  Native apps are crafted specifically for one mobile operating system, such as iOS or Android, and cannot be used on other platforms. At Cynergy, we specialize in creating compelling and user-friendly UX designs that attract and engage users quickly on their native platforms.
                  </p>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
            <div className="col-md-6 mgTop25">
              <div className="m-1 inner-blog-section-2 row">
                <div className="col-md-6">
                  <h3>Cross-Platform Android App Design</h3>
                  <p style={{color:'#454545',fontSize:'16px',lineHeight:'27px',marginTop:'20px',height:'235px'}} className="hide-scrollbar">
                  Cross-platform apps are designed to function across multiple operating systems like iOS and Android using a unified code base. Cynergy delivers efficient cross-platform designs that ensure a smooth user experience, making apps versatile and accessible on a variety of devices.
                  </p>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container benefits-cynergy appMobilePadding">
        <div className="row">
          <div className="col-md-5">
            <img
              src="./images/benefits-cynergy.png"
              alt="benefits-cynergy"
              className="w-100 h-100"
            />
          </div>
          <div className="col-md-7 paddingLeft3 footerSection">
            <h2 className="mainHeadingMobile">
              Benefits Of Cynergy <br /> Studios
            </h2>
            <div className="row">
                <div className="col-md-6 d-flex flex-column">
                {benefits.slice(0,2).map((item,i)=>(
                 <div className={`col-md-12`} style={{margin:i==0?'4rem 0 1rem 0':''}} key={i}>
                    <AppCard heading={item.heading} isCenter={true} showLine={true} height={270} hoverEffect="effect8" description={item.description}  />
                  </div>
                ))}
                </div>
                <div className="col-md-6 d-flex flex-column">
                {benefits.slice(2,4).map((item,i)=>(
                 <div className={`col-md-12 mt-3`} key={i}>
                    <AppCard heading={item.heading} isCenter={true} showLine={true} height={270} hoverEffect="effect8" description={item.description}  />
                  </div>
                ))}
                </div>
            </div>
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
