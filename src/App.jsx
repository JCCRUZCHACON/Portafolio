import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Menu from "./components/Menu";
import Social from "./components/Social";
import { useTranslation } from "react-i18next";
import WhatsAppBtn from "./components/WhatsAppBtn";


function App() {
  const [menuSlider, setMenuSlider] = useState(false);
  const [isContactModal, setIsContactModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  const handleMenuSlider = () => {
    setMenuSlider(!menuSlider);
  };

  const handleCloseContactForm = () => {
    setIsContactModal(!isContactModal);
  };

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleBtnOnTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const darkInLocal = localStorage.getItem("dark");
    darkInLocal === "false" ? setIsDarkMode(false) : setIsDarkMode(true);
  }, []);

  useEffect(() => {
    const darkInLocal = localStorage.getItem("dark");
    if (darkInLocal === "true") {
      localStorage.setItem("dark", "false");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("dark", "true");
      document.documentElement.classList.add("dark");
    }
  }, [isDarkMode]);

  return (
    <main className="bg-[url(/portfolio123.avif)] bg-cover bg-fixed bg-center min-h-screen w-full  font-montserrat text-slate-950 dark:text-white overflow-hidden relative">
      <div className="bg-gray-200/50 dark:bg-black/80 transition-colors">
        <WhatsAppBtn />
        <section className="bg-transparent fixed w-full h-[140px] backdrop-blur-xl z-50 min-[500px]:h-[88px] py-2">
          <Header
            setMenuSlider={setMenuSlider}
            menuSlider={menuSlider}
            handleCloseContactForm={handleCloseContactForm}
            handleMenuSlider={handleMenuSlider}
            handleDarkMode={handleDarkMode}
            isDarkMode={isDarkMode}
            handleChangeLanguage={handleChangeLanguage}
            t={t}
          />
        </section>
        <Menu
          menuSlider={menuSlider}
          handleCloseContactForm={handleCloseContactForm}
          handleMenuSlider={handleMenuSlider}
          handleDarkMode={handleDarkMode}
          isDarkMode={isDarkMode}
          t={t}
        />
        <MainPage
          handleCloseContactForm={handleCloseContactForm}
          isContactModal={isContactModal}
          t={t}
          language={i18n}
        />
        <section className="fixed min-[500px]:top-[95px]">
          <Social />
        </section>
        <div
          onClick={handleBtnOnTop}
          className="fixed bottom-4 right-4 text-3xl cursor-pointer bg-slate-950 dark:bg-zinc-900 flex justify-center items-center rounded-full hover:scale-110 transition-all"
        >
        </div>
      </div>

    </main>
  );
}

export default App;
