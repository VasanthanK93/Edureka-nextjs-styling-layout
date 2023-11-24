const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-title">© 2023 Blog Name</p>
      <style jsx>{`
      .footer {
          background-color: #333;
          padding: 0.625rem;
      }
  
      .footer-title {
          color: white;
          font-size: 1rem;
          text-decoration: none;
          text-align: center;
      }
      `}</style>
    </footer>
  )
}

export default Footer;