const Header = () => {
  return (
    <header className="header">
      <span>Next.js Blog</span>
        <a className="link" href="/">Home</a>
        <a className="link" href="/about">About</a>
        <a className="link" href="/contact">Contact</a>
      <style jsx>{`
      .header {
          background-color: #333;
          padding: 0.625rem;
      }
  
      span {
          color: white;
          font-size: 1.5rem;
          text-decoration: none;
          padding-right: 1rem;
      }

      .link {
          color: white;
          font-size: 1rem;
          text-decoration: none;
          margin-left: 1rem !important;
      }
      `}</style>
    </header>
  )
}

export default Header;