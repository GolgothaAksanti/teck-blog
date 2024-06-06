const Footer = () => {
  return (
    <div className="bg-black relative bottom-0 text-white py-5">
      <div className="w-10/12 mx-auto">
        <p className="text-center">©{new Date().getFullYear()} Tech Mode All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
