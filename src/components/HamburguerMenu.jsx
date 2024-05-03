const HamburguerMenu = ({ handleMenuSlider }) => {
  
  return (
    <div
      onClick={handleMenuSlider}
      className="h-10 cursor-pointer  
      "
    >
      <i className="bx bx-menu text-4xl"></i>
      
    </div>
  );
};
export default HamburguerMenu;
