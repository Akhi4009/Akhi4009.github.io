import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold  text-white text-lg">
           <span className="font-playfair font-semibold  text-yellow text-lg">Email: </span> akhileshyadav870765@gmail.com
          </p>
          <p className="font-semibold  text-white text-lg">
           <span className="font-playfair font-semibold  text-yellow text-lg">Contact: </span> 8948228957
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2023 AKY. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
