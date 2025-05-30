import ProjectUnit from "./ProjectUnit";
import openaiLogo from "../assets/openai-color.svg";


const Projects = ({ t }) => {

  return (
    <main>
      <h2 className="text-center text-3xl p-8" id="projects">
        {t("eng.titleProjects")}
      </h2>
      <section className="min-h-screen p-3 grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4 mb-8">

<ProjectUnit 
  title="ChatBot OpenAI App"
  img="bg-[url(/chatbot.png)]"
  // gitHub="https://github.com/JCCRUZCHACON/WEB-CHATBOT-PERSONALIZADO-FRONTEND"
  demo="https://web-chat-personalizado-front.netlify.app/#/negocio/empresa-de-abastecimiento-de-alimentos"
  info="Full stack app: Pagina Web con chatbot personalizado multifuncional para cualquier negocio."
  
  skills={[
    <img
      src={openaiLogo}
      alt="OpenAI"
      title="OpenAI"
      className="w-6 h-6 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md hover:brightness-110"
    />,
    <i
      className="bx bxl-javascript text-yellow-400 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="JavaScript"
    />,
    <i
      className="bx bxl-html5 text-orange-500 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="HTML5"
    />,
    <i
      className="bx bxl-css3 text-blue-600 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="CSS3"
    />,
    <i
      className="bx bxl-react text-cyan-400 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="React"
    />,
    <i
      className="bx bxl-redux text-purple-500 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="Redux"
    />,
    <i
      className="bx bxl-nodejs text-green-600 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="Node.js"
    />
  ]}
/>


<ProjectUnit 
  title={'Barber Shop App'}
  img={'bg-[url(/barber-shop-app.jpg)]'}
  gitHub={"https://github.com/JCCRUZCHACON/Booking-Barber-Shop"}
  demo={"https://barber-shop-app1.netlify.app/"}
  info={'Full stack barber shop app'}

  skills={[
    <i
      className="bx bxl-javascript text-yellow-400 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="JavaScript"
    />,
    <i
      className="bx bxl-html5 text-orange-500 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="HTML5"
    />,
    <i
      className="bx bxl-css3 text-blue-600 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="CSS3"
    />,
    <i
      className="bx bxl-react text-cyan-400 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="React"
    />,
    <i
      className="bx bxl-redux text-purple-500 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="Redux"
    />,
    <i
      className="bx bxl-nodejs text-green-600 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="Node.js"
    />
  ]}
/>


<ProjectUnit 
  title={'Bookink Hotels App'}
  img={'bg-[url(/booking-app.jpg)]'}
  gitHub={"https://github.com/JCCRUZCHACON/Booking-Front-Hotel"}
  demo={"https://booking-app-hotel.netlify.app/"}
  info={'Full stack hotel booking app'}
          
  skills={[
    <i
      className="bx bxl-javascript text-yellow-400 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="JavaScript"
    />,
    <i
      className="bx bxl-html5 text-orange-500 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="HTML5"
    />,
    <i
      className="bx bxl-css3 text-blue-600 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="CSS3"
    />,
    <i
      className="bx bxl-react text-cyan-400 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="React"
    />,
    <i
      className="bx bxl-redux text-purple-500 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="Redux"
    />,
    <i
      className="bx bxl-nodejs text-green-600 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="Node.js"
    />
  ]}
/>


<ProjectUnit 
  title={'E-commerce'}
  img={'bg-[url(/e-comerce.png)]'}
  gitHub={"https://github.com/JCCRUZCHACON/E-commerce"}
  demo={"https://e-commercee-1.netlify.app/"}
  info={'This amazing page will provided you all that you need to select and buy products.'}
  
  skills={[
    <i
      className="bx bxl-javascript text-yellow-400 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="JavaScript"
    />,
    <i
      className="bx bxl-html5 text-orange-500 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="HTML5"
    />,
    <i
      className="bx bxl-css3 text-blue-600 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="CSS3"
    />
  ]}
/>


<ProjectUnit 
  title={'merchandise management'}
  img={'bg-[url(/logistc-app.png)]'}
  demo={"https://gestion-textil.netlify.app/"}

  skills={[
    <i
      className="bx bxl-javascript text-yellow-400 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="JavaScript"
    />,
    <i
      className="bx bxl-html5 text-orange-500 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="HTML5"
    />,
    <i
      className="bx bxl-css3 text-blue-600 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="CSS3"
    />,
    <i
      className="bx bxl-react text-cyan-400 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="React"
    />,
    <i
      className="bx bxl-redux text-purple-500 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="Redux"
    />,
    <i
      className="bx bxl-nodejs text-green-600 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="Node.js"
    />
  ]}
/>


<ProjectUnit 
  title={'Verified Users by Email App'}
  img={'bg-[url(/user-verfied.jpg)]'}
  gitHub={"https://github.com/JCCRUZCHACON/GEN5-FRONT-USER-VERIFED"}
  demo={"https://front-login-users.netlify.app/#/login"}
  info={'Full stack user verified app'}

  skills={[
    <i
      className="bx bxl-javascript text-yellow-400 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="JavaScript"
    />,
    <i
      className="bx bxl-html5 text-orange-500 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="HTML5"
    />,
    <i
      className="bx bxl-css3 text-blue-600 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="CSS3"
    />,
    <i
      className="bx bxl-react text-cyan-400 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="React"
    />,
    <i
      className="bx bxl-redux text-purple-500 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="Redux"
    />,
    <i
      className="bx bxl-nodejs text-green-600 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="Node.js"
    />
  ]}       
/>


<ProjectUnit
  title={"Creates Users"}
  img={"bg-[url(/create-users.jpg)]"}
  gitHub={"https://github.com/JCCRUZCHACON/Create-users"}
  demo={"https://create-users-1.netlify.app/"}
  info={"Create, read, update and delete users with this amazing web app."}

  skills={[
    <i
      className="bx bxl-javascript text-yellow-400 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="JavaScript"
    />,
    <i
      className="bx bxl-html5 text-orange-500 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="HTML5"
    />,
    <i
      className="bx bxl-css3 text-blue-600 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="CSS3"
    />,
    <i
      className="bx bxl-react text-cyan-400 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="React"
    />,
    <i className="bx bxl-tailwind-css text-blue-600 text-3xl transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"></i>
  ]}      
/>

        
<ProjectUnit
  title={"Weather App"}
  img={"bg-[url(/weather-time.png)]"}
  gitHub={"https://github.com/JCCRUZCHACON/weather-app"}
  demo={"https://weather-time-1.netlify.app/"}
  info={"Do you wanna know the weather in your zone? look this app. you can check another places too."}

  skills={[
    <i
      className="bx bxl-javascript text-yellow-400 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="JavaScript"
    />,
    <i
      className="bx bxl-html5 text-orange-500 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="HTML5"
    />,
    <i
      className="bx bxl-css3 text-blue-600 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="CSS3"
    />,
    <i
      className="bx bxl-react text-cyan-400 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
      title="React"
    />,
    <i className="bx bxl-tailwind-css text-blue-600 text-3xl transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"></i>
  ]}  
/>

</section>
</main>
  );
};

export default Projects;
        
        


       