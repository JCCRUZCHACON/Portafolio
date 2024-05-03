import HamburguerMenu from "./HamburguerMenu";
import MenuDarkLanguage from "./MenuDarkLanguage";

const Header = ({
  handleMenuSlider,
  handleDarkMode,
  isDarkMode,
  menuSlider,
  handleChangeLanguage,
  t,
}) => {
  return (
    <nav className="h-full flex w-[min(100%,_1024px)] mx-auto justify-between p-4  relative ">
      <section className="flex gap-2 items-center">
        <div className="w-12">
        <img className="w-[100px] h-[30px] hover:translate-x-1" src="/cohete.svg" alt="Cohete" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-center leading-none">
            
          </h3>
          <h6 className="font-light text-sm text-center">
            {t("eng.profession")}
          </h6>
        </div>
      </section>
      <section className="absolute bottom-0 w-full left-0 min-[500px]:bottom-auto min-[500px]:left-auto min-[500px]:w-auto min-[500px]:relative">
        <MenuDarkLanguage
          handleDarkMode={handleDarkMode}
          isDarkMode={isDarkMode}
          handleChangeLanguage={handleChangeLanguage}
          t={t}
          idLng={"headerLng"}
        />
      </section>
      <HamburguerMenu
        handleMenuSlider={handleMenuSlider}
        menuSlider={menuSlider}
      />
    </nav>
  );
};
export default Header;
