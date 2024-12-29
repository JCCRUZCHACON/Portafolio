import ProjectUnit from "./ProjectUnit";

const Projects = ({ t }) => {

  return (
    <main>
      <h2 className="text-center text-3xl p-8" id="projects">
        {t("eng.titleProjects")}
      </h2>
      <section className="min-h-screen p-3 grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4 mb-8">


<ProjectUnit 
        title={'Bookink Hotels App'}
        img={'bg-[url(/booking-app.jpg)]'}
        gitHub={"https://github.com/JCCRUZCHACON/Booking-Front-Hotel"}
        demo={"https://booking-app-hotel.netlify.app/"}
        info={'Full stack hotel booking app'}
        skill1={<i className="bx bxl-javascript"></i>}
          skill2={<i className="bx bxl-html5"></i>}
          skill3={<i className="bx bxl-css3"></i>}
          skill4={<i className="bx bxl-react"></i>}
          skill5={<i class='bx bxl-redux' ></i>}
          skill6={<i class='bx bxl-nodejs'></i>}
        />

<ProjectUnit 
        title={'Barber Shop App'}
        img={'bg-[url(/barber-shop-app.jpg)]'}
        gitHub={"https://github.com/JCCRUZCHACON/Booking-Barber-Shop"}
        demo={"https://barber-shop-app1.netlify.app/"}
        info={'Full stack barber shop app'}
        skill1={<i className="bx bxl-javascript"></i>}
          skill2={<i className="bx bxl-html5"></i>}
          skill3={<i className="bx bxl-css3"></i>}
          skill4={<i className="bx bxl-react"></i>}
          skill5={<i class='bx bxl-redux' ></i>}
          skill6={<i class='bx bxl-nodejs'></i>}
        />

<ProjectUnit 
        title={'E-commerce'}
        img={'bg-[url(/e-comerce.png)]'}
        gitHub={"https://github.com/JCCRUZCHACON/E-commerce"}
        demo={"https://e-commercee-1.netlify.app/"}
        info={'This amazing page will provided you all that you need to select and buy products.'}
        skill1={<i className="bx bxl-javascript"></i>}
          skill2={<i className="bx bxl-html5"></i>}
          skill3={<i className="bx bxl-css3"></i>}
          skill4={""}
          skill5={""}
          skill6={""}
        />

<ProjectUnit
          title={"Pokedex"}
          img={"bg-[url(/pokedex.png)]"}
          gitHub={"https://github.com/JCCRUZCHACON/Pokedex"}
          demo={"https://pokedex28.netlify.app/"}
          info={
            "Look info about pokemons, their skills, attacks and all their stadistics."
          }
          skill1={<i className="bx bxl-javascript"></i>}
          skill2={<i className="bx bxl-html5"></i>}
          skill3={<i className="bx bxl-css3"></i>}
          skill4={<i className="bx bxl-react"></i>}
          skill5={<i className="bx bxl-tailwind-css"></i>}
          skill6={""}
        />

<ProjectUnit
          title={"USERS"}
          img={"bg-[url(/CRUD.jpg)]"}
          gitHub={""}
          demo={"https://users-crud-api.netlify.app/"}
          info={
            "Create, read, update and delete users with this amazing web app."
          }
          skill1={<i className="bx bxl-javascript"></i>}
          skill2={<i className="bx bxl-html5"></i>}
          skill3={<i className="bx bxl-css3"></i>}
          skill4={<i className="bx bxl-react"></i>}
          skill5={<i className="bx bxl-tailwind-css"></i>}
          skill6={""}
        />

        
        <ProjectUnit
          title={"Weather App"}
          img={"bg-[url(/weather-time.png)]"}
          gitHub={"https://github.com/JCCRUZCHACON/weather-app"}
          demo={"https://weather-time-1.netlify.app/"}
          info={
            "Do you wanna know the weather in your zone? look this app. you can check another places too."
          }
          skill1={<i className="bx bxl-javascript"></i>}
          skill2={<i className="bx bxl-html5"></i>}
          skill3={<i className="bx bxl-css3"></i>}
          skill4={<i className="bx bxl-react"></i>}
          skill5={<i className="bx bxl-tailwind-css"></i>}
          skill6={""}
        />

        </section>
    </main>
  );
};

export default Projects;
        
        


       