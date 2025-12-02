import Header from "../components/Header";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import Link from "next/link";
import {faqData,developerAdequacies,whyChooseUs} from './data'
import DropUsALine from "../components/DropUsALine";
import AppCard from "../components/appCard";

const page = () => {
  
  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Android Development" />

      <div
        className="container-fluid webAppDev appMobilePadding"
        style={{ backgroundColor: "#FFFBF8" }}
      >
        <div className="row">
          <div className="col-md-6 d-flex align-items-start justify-content-center flex-column gap-4">
            <h2 className="mainHeadingMobile">Android App Developer</h2>
            <p className="paragraphText">
            Create an exceptional Android app with cutting-edge features and sleek designs. Cynergy’s team of experienced developers is committed to crafting high-quality, innovative Android applications that drive user engagement and business success. From startups to large enterprises, 
            Cynergy offers comprehensive solutions tailored to meet your unique business goals, leveraging the latest technology. 
            </p>
            <DropUsALine />
          </div>
          <div className="col-md-6">
            <img src="/images/androidDev.png" alt="androidDev" className="w-100" />
          </div>
        </div>
      </div>

      <div className="container midMobileAdd appMobilePadding">
        <h2 className="text-center mainHeadingMobile">Premium Android <br /> App Development Services</h2>
        <p className="text-center paragraphText">
        Cynergy builds feature-rich Android apps using advanced tech stacks. Our expert developers consistently<br /> exceed industry standards, delivering creative and robust Android applications that enhance user experiences.<br /> Cynergy focuses on developing powerful, reliable apps that align with your vision and business objectives.
        </p>
        <div style={{marginTop:'5rem'}} className="row">
          <img
            src="./images/lines-1.png"
            alt="lines-1"
            className="lines-1 z-1"
          />
          <img
            src="./images/lines-2.png"
            alt="lines-2"
            className="lines-2 z-1"
          />
          <img
            src="./images/lines-3.png"
            alt="lines-3"
            className="lines-3 z-1"
          />
          <img
            src="./images/lines-4.png"
            alt="lines-4"
            className="lines-4 z-1"
          />
          <div style={{marginTop:'-4%'}} className="col-md-3 d-flex align-items-center justify-content-evenly flex-column">
            <div className="panelBoxLeft">
              <h4 className="lineHeading">Custom Android App Development</h4>
              <p className="smallParaText m-0">
              Our Android app developers specialize in crafting custom applications designed to deliver a dynamic user experience and drive business growth. Cynergy creates fully functional apps that solve real-world problems while providing an intuitive interface and seamless performance. Hire a dedicated Android developer to create apps that set you apart in the global market.
              </p>
            </div>
            <div className="panelBoxLeft m-0">
              <h4 className="lineHeading">Design and Development</h4>
              <p className="smallParaText">
              Cynergy invests in designing engaging, user-friendly interfaces that provide exceptional user experiences. Our Android app developers focus on creating appealing layouts and intuitive wireframes that keep your users engaged, ensuring both form and function are perfectly balanced in your app.
              </p>
            </div>
          </div>
          <div className="col-md-6 mgTop25">
            <img
              src="./images/image85.png"
              alt="image85"
              className="w-100 z-3 position-relative mid-mob"
            />
          </div>
          <div className="col-md-3 d-flex mgTop25 align-items-center justify-content-evenly flex-column">
            <div className="panelBoxRight m-0">
              <h4 className="lineHeading">Stringent Testing Process</h4>
              <p className="smallParaText">
              Quality is our top priority. Cynergy employs a rigorous testing process to ensure that every Android app is free from bugs and performs seamlessly. Our comprehensive testing strategies ensure that your app is optimized for performance, providing users with a flawless experience and eliminating any barriers to smooth operation.
              </p>
            </div>
            <div className="panelBoxRight m-0">
              <h4 className="lineHeading">Maintenance and Update</h4>
              <p className="smallParaText">
              Our Android app developers provide ongoing maintenance and updates to ensure your app stays current and performs optimally. Hire Cynergy’s experts to guarantee your app remains secure, efficient, and aligned with evolving user needs and technological advancements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="DevelopmentProcess appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="mainHeadingMobile">Developers Adequacies</h2>
              <p className="paragraphText">
              Cynergy’s experienced developers bring creative and practical solutions to every project, ensuring it meets your business needs and growth objectives. Hire our dedicated developers to craft powerful web applications that help your business thrive and expand on a global scale.
              </p>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-end">
            <DropUsALine />
            </div>
          </div>

          <div className="row mt-5">
            {developerAdequacies.map((item,i)=>(
              <div className="col-md-6 my-2" key={i}>
                <AppCard heading={item.heading} hoverEffect="effect5" height={231} description={item.description} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container androidDeveloper appMobilePadding">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-start">
            <img
              src="./images/androiddeveloper.png"
              alt="androiddeveloper"
              className="w-100 androiddeveloperImg"
            />
          </div>
          <div className="col-md-6 footerSection">
            <h2 className="text-end mainHeadingMobile">Android Developers</h2>
            <p className="text-end paragraphText">
            Our Android developers bring a wealth of expertise and advanced technical skills to every project. From creating powerful apps to optimizing performance, our team delivers reliable and scalable solutions. Cynergy offers a broad range of Android app developers with diverse expertise to suit your specific project needs.
            </p>
            <div className="row mt-5 lines-andrd">
              <div className="col-md-11 line-area1">
                <h3 style={{fontWeight: '700',color:'#2b90c3'}} className="text-end mt-2">Junior Developer</h3>
                <p className="text-end navHeading">
                Cynergy’s junior Android developers work under the guidance of senior developers to bring your app ideas to life. With a focus on performance and security, they contribute to building high-quality apps that meet your requirements.
                </p>
                <h3 style={{fontWeight: '700'}} className="text-end mt-5">Mid-Level Developers</h3>
                <p className="text-end navHeading">
                Mid-level developers focus on refining your app’s functionality and ensuring a smooth development process. They work under the leadership of senior developers to deliver high-performance apps with the latest features.{" "}
                </p>
                <h3 style={{fontWeight: '700'}} className="text-end mt-5">Seniors Developers</h3>
                <p className="text-end navHeading">
                Cynergy’s senior Android developers have deep expertise and a proven track record in building complex, high-performing Android apps. They handle advanced app functionalities, optimize performance, and integrate new features to keep your app competitive in the market.
                </p>
              </div>
              <div className="col-md-1 line-area2">
                <img
                  src="./images/Group1707479692.png"
                  alt="Group1707479692"
                  className="line-android"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="IosChoose appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="mainHeadingMobile">Why Choose Us</h2>
              <p className="paragraphText">
              Engage with our top-tier Android developers to enhance your app’s performance, functionality, and overall user experience. Here's why businesses choose us:
              </p>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-end">
            <DropUsALine />
            </div>

            {whyChooseUs.map((item,i)=>(
              <div className="col-md-4 my-2" key={i}>
              <AppCard heading={item.heading} hoverEffect="effect5" height={303} isCenter={true} showLine={true} description={item.description} />
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
