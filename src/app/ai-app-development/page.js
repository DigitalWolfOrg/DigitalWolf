import Header from "../components/Header";
import Footer from "../components/Footer";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import MainBanner from "../components/MainBanner";
import IOSAppDesignServices from "../components/IosDesignServices";
import {faqData,aiSoftware,aiBenefits,sliderData} from './data'
import DropUsALine from "../components/DropUsALine";
import AppCard from "../components/appCard";
import AppImageCard from "../components/AppImageCard";
const Page = () => {

  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="AI App Development" />

      <div className="container app-testing appMobilePadding">
        <div className="row">
          <div className="col-md-6 d-flex align-items-start justify-content-center flex-column">
            <h2 className="mainHeadingMobile">Why is AI Important in Education?</h2>
            <p className="paragraphText my-3">
            AI is revolutionizing education by enhancing personalized learning, improving administrative efficiency, and enabling real-time data analytics. AI-powered tools can adapt to students' individual needs, providing tailored content and feedback.
              <br />
              <br />
              Additionally, AI automates administrative tasks, allowing educators to focus more on teaching. It also opens up opportunities for scalable, accessible education, making learning more engaging, effective, and inclusive for diverse learners around the world.
            </p>
            <DropUsALine />
          </div>
          <div className="col-md-6">
            <img
              src="./images/Group1648546.png"
              alt="Group1648546"
              className="w-100"
            />
          </div>
        </div>
      </div>

      <div className="container AISoftwareDevelopment appMobilePadding">
        <h2 className="mainHeadingMobile">
          AI software development
          <br /> services we provide
        </h2>
        <p className="paragraphText">
        Cynergy offers comprehensive AI software development services, including AI-based learning platforms, intelligent tutoring systems,
        <br /> adaptive learning solutions, and educational data analytics tools.Our team specializes in creating  machine learning models,<br /> natural language processing (NLP)  applications, and AI-powered chatbots to enhance student engagement, automate administrative tasks,<br /> and improve overall educational outcomes. Cynergy ensures that our AI solutions are scalable, secure,<br /> and tailored to the unique needs of educational institutions.
        </p>
        <div className="row mt-5">
          {aiSoftware.map((item,i)=>(
            <div className={`col-md-4 my-2`} key={i}>
          <AppImageCard heading={item.heading} imageStyle="2" hoverEffect="effect2" imgUrl={`/images/${item.imgUrl}`} isCenter={true} height={512} description={item.description} />
          
          </div>
          ))
          }
        </div>
      
      </div>

      <div className="KeyOfAi appMobilePaddingSmall">
        <div className="container">
          <h2 className="mainHeadingMobile">
            Key Applications of AI
            <br /> Technology in Education
          </h2>
          <p style={{ fontSize: "14px" }} className="paragraphText col-md-8">
          AI is revolutionizing education by enhancing personalized learning, automating administrative tasks, and providing real-time feedback. Key applications include intelligent tutoring systems, adaptive learning platforms, and data-driven insights, making education more accessible, efficient, and tailored to individual needs.
          </p>
          <div className="row mt-5">
            <div className="col-md-6 paddingRight3">
              <img
                src="./images/2353Group.png"
                alt="2353Group"
                className="w-100 h-100"
              />
            </div>
            <div className="col-md-6 footerSection">
              <h4 className="title-page-2">Intelligent Tutoring Systems (ITS):</h4>
              <p className="paragraphText">
              Intelligent tutoring systems use AI to provide personalized tutoring experiences. These systems assess student performance in real-time, adapt content delivery, and offer immediate feedback, improving learning outcomes. They simulate one-on-one interactions, enabling scalable, efficient learning for diverse subjects and skill levels.
              </p>
              <h4 className="title-page-2">Adaptive Learning Platforms:</h4>
              <p className="paragraphText">
              Adaptive learning platforms leverage AI to adjust educational content based on a learner's progress and performance. By analyzing student data, these systems dynamically tailor lessons, quizzes, and activities to individual needs. This personalized approach fosters deeper understanding, engagement, and retention for all learners.
              </p>
            </div>
          </div>
        </div>
      </div>

      <IOSAppDesignServices data={sliderData} heading="Artificial Intelligence (AI) <br /> Development Services" description="Cynergy’s Artificial Intelligence (AI) development services offer a wide range of benefits that empower businesses to enhance operational efficiency, improve decision-making, and drive innovation. By incorporating AI technologies into business processes, companies can streamline tasks, automate complex workflows, and reduce human error." />

      <div className="py-5 appMobilePaddingSmall" style={{backgroundColor: "#fffbf8"}}>
        <div className="row pt-5 col-12 d-flex justify-content-center" >
          <div className="col-md-6">
            <h2 className="mainHeadingMobile" style={{textAlign:'center'}} >Benefits of AI in Education</h2>
            <p className="paragraphText" style={{textAlign:'center'}}>
            One of the key advantages of AI development is enhanced efficiency. AI systems can handle repetitive, time-consuming tasks with greater accuracy and speed, freeing up human resources for more strategic activities. This leads to higher productivity and allows businesses to allocate their workforce where it matters most.
            </p>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            {aiBenefits.map((item,i)=>(
              <div className="col-md-6 my-2" key={i}>
              <AppCard heading={item.heading} hoverEffect="effect2" height={206} description={item.description} />
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

export default Page;
