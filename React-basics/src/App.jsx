// function App(){
//     return(
//     <div>
//      <h1>Hello world</h1>
//     <p>This is paragraph</p>
//     <span>This is a span</span>
//     </div>
//     )
// }

// export default App;

// import Button from "./Button";
// function App(){
//     return (
//         <>
//         <h1>Welcome My Website</h1>
//         <Button />
//         </>
//     )
// };

// export default App;


// function App() {
//     const currentPage = "Home";
//     let content;
//     if(currentPage=== "Home"){
//         content = <Home/>
//     }
//     else if(currentPage=== "About"){
//         content = <About/>
// }


// return(
//  <>
//      <h1>Welcome to my website</h1>
//      <div>{content}</div>
// </>

// )
// }

// export default App;


// import { Routes, Route, Link } from "react-router-dom";
// import About from "./about.jsx";
// import Home from "./home.jsx";
// import Contact from "./contact.jsx";
// import Services from "./services.jsx";
// import Blog from "./blog.jsx";

// export default function Website() {
//   return (
//     <div className="container">
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="logo">Welcome To My Website</div>
//         <ul className="nav-links">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/blog">Blog</Link></li>
//           <li><Link to="/services">Services</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>

//       {/* Page Content */}
//       <main className="content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>

//       {/* Footer */}
//       <footer className="footer">
//         <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Home");

  const pages = {
    Home: ["Welcome to Home", "Latest News", "Featured Post", "Highlights"],
    About: ["Who We Are", "Our Mission", "Our Team", "Our Values"],
    Blog: ["Latest Blog 1", "Latest Blog 2", "Tips & Tricks", "Updates"],
    Services: ["Web Development", "App Development", "SEO Optimization", "UI/UX Design"],
    Contact: ["Contact Form", "Email Us", "Our Address", "Follow Us"]
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">MyWebsite</h2>
        <ul className="nav-links">
          {Object.keys(pages).map((page) => (
            <li key={page}>
              <button
                className={activePage === page ? "active" : ""}
                onClick={() => setActivePage(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Page Content */}
      <main className="content">
        <h1>{activePage} Page</h1>
        <div className="cards">
          {pages[activePage].map((item, index) => (
            <div key={index} className="card">
              <h3>{item}</h3>
              <p>This is {item} content for {activePage} page.</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 MyWebsite | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
