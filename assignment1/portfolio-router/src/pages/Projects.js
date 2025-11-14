import React from "react";

export default function Projects() {
  const projects = [
    { 
      title: "AI Interview Preparation Coach", 
      desc: "A full-stack web app built using React, Node.js, MongoDB, and Gemini API. Features resume upload, job description analysis, real-time question generation, video recording, and AI-based feedback." 
    },
    { 
      title: "Tourist Places Search App", 
      desc: "React-based project with search functionality, external CSS/JS files, and dynamic display of tourist data." 
    },
    { 
      title: "Admin Dashboard (React + Fetch API)", 
      desc: "Interactive dashboard with sidebar navigation and dynamic content loading using REST APIs." 
    },
    { 
      title: "POWER BI Dashboard", 
      desc: "Interactive Power BI dashboard analyzing mobile sales, customer trends, and product performance across multiple datasets." 
    }
  ];

  return (
    <>
      {/* CSS inside the same file */}
      <style>{`
        .projects-container {
          padding: 40px 20px;
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f8ff, #eef1ff);
        }

        .projects-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 40px;
          color: #4b4bbf;
          animation: fadeIn 1s;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          padding: 0 20px;
        }

        .project-card {
          background: #ffffff;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          cursor: pointer;
          border-left: 6px solid #6a5acd;
          animation: slideUp 0.7s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.12);
        }

        .project-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 10px;
        }

        .project-desc {
          font-size: 1rem;
          color: #555;
          line-height: 1.5;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Actual Page Content */}
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>

        <div className="project-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
