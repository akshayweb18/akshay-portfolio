// import React from "react";
// import "./Project.css";

// const Project = ({ colors }) => {
//   const projects = [
//     {
//       img: "../aditya.png",
//       name: "Aditya Birla Capital",
//       role: "UI Developer — Mutual Funds Platform",
//       link: "https://mutualfund.adityabirlacapital.com/",
//     },
//     {
//       img: "../mahendra.png",
//       name: "Mahindra Manulife",
//       role: "Frontend Developer — Investment Portal",
//       link: "https://www.mahindramanulife.com/",
//     },
//     {
//       img: "/bajaj.jpg",
//       name: "Bajaj Finserv",
//       role: "UI Developer — Finance Dashboard",
//       link: "https://www.bajajfinserv.in/",
//     },
//     {
//       img: "../jm.png",
//       name: "JM Financial",
//       role: "UI/UX Developer — Wealth Management",
//       link: "https://jmfl.com",
//     },
//     {
//       img: "../anand.png",
//       name: "Anand Rathi",
//       role: "Frontend Developer — Trading Platform UI",
//       link: "https://anandrathi.com/",
//     },
//     {
//       img: "../money.png",
//       name: "Money Sukh",
//       role: "UI Developer — Brokerage Website",
//       link: "https://www.moneysukh.com/",
//     },
//   ];

//   return (
//     <section
//       className={
//         colors ? "projects-section light-theme" : "projects-section dark-theme"
//       }
//     >
//       <div className="container">
//         <h2 className="projects-title">Projects I Worked On</h2>
//         <p className="projects-subtitle">
//           These are some top companies where I contributed as a UI / Frontend Developer.
//         </p>

//         <div className="projects-grid">
//           {projects.map((p, i) => (
//             <a href={p.link} key={i} target="_blank" rel="noreferrer" className="project-card">
//               <div className="project-logo">
//                 <img src={p.img} alt={p.name} />
//               </div>

//               <h3 className="project-name">{p.name}</h3>
//               <p className="project-role">{p.role}</p>

//               <span className="view-project">View Project →</span>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Project;
import React from "react";

const Project = ({ colors }) => {
  const projects = [
    {
      img: "../aditya.png",
      name: "Aditya Birla Capital",
      role: "UI Developer — Mutual Funds Platform",
      link: "https://mutualfund.adityabirlacapital.com/",
    },
    {
      img: "../mahendra.png",
      name: "Mahindra Manulife",
      role: "Frontend Developer — Investment Portal",
      link: "https://www.mahindramanulife.com/",
    },
    {
      img: "/bajaj.jpg",
      name: "Bajaj Finserv",
      role: "UI Developer — Finance Dashboard",
      link: "https://www.bajajfinserv.in/",
    },
    {
      img: "../jm.png",
      name: "JM Financial",
      role: "UI/UX Developer — Wealth Management",
      link: "https://jmfl.com",
    },
    {
      img: "../anand.png",
      name: "Anand Rathi",
      role: "Frontend Developer — Trading Platform UI",
      link: "https://anandrathi.com/",
    },
    {
      img: "../money.png",
      name: "Money Sukh",
      role: "UI Developer — Brokerage Website",
      link: "https://www.moneysukh.com/",
    },
  ];

  return (
    <section
      className={
       colors ? "navbar-light profile" : "navbar-dark profile"
      }
    >
      <div className="container">
        <h2 className="projects-title">Projects I Worked On</h2>
        <p className="projects-subtitle">
          These are some top companies where I contributed as a UI/UX Developer - Frontend End Web Developer.
        </p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <a href={p.link} key={i} target="_blank" rel="noreferrer" className="project-card">
              <div className="project-logo">
                <img src={p.img} alt={p.name} />
              </div>

              <h3 className="project-name">{p.name}</h3>
              <p className="project-role">{p.role}</p>

              <span className="view-project">View Project →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;