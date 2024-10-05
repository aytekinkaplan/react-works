import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p>Copyright {currentYear}. All rights reserved.</p>
    </div>
  );
}

export default Footer;
