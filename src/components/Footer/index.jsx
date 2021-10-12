import "./style.css";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <p className="copyright">
        Copyright &copy; {year} Mário Batalha - All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;