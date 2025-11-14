import React from "react";

export default function Home() {
  return (
    <>
      {/* Inline CSS inside the same file */}
      <style>{`
        .home-container {
          width: 100%;
          min-height: 100vh;
          padding: 50px 20px;
          background: linear-gradient(135deg, #f7f7ff, #e7eaff);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-section {
          max-width: 900px;
          text-align: center;
          padding: 40px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          animation: fadeIn 1s ease-in-out;
        }

        .title {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .title span {
          color: #6a5acd;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #555;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #444;
          margin-bottom: 30px;
        }

        .buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .btn {
          padding: 12px 25px;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 10px;
          text-decoration: none;
          transition: 0.3s;
        }

        .btn.primary {
          background: #6a5acd;
          color: white;
        }

        .btn.primary:hover {
          background: #5848d3;
        }

        .btn.secondary {
          border: 2px solid #6a5acd;
          color: #6a5acd;
        }

        .btn.secondary:hover {
          background: #6a5acd;
          color: white;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="home-container">
        <div className="hero-section">
          <h1 className="title">
            Hi — I'm <span>Pragati Bhardwaj</span>
          </h1>

          <p className="subtitle">
            Full Stack Developer | Programmer analyst
          </p>

          <p className="description">
            I’m a passionate full-stack developer specializing in Java, Spring Boot,
            REST APIs, MongoDB/MySQL, and frontend technologies like React and
            JavaScript. I recently built an AI-powered Interview Preparation Coach app
            using Gemini API with real-time question generation, resume analysis,
            and video-based answer evaluation.
          </p>

          <div className="buttons">
            <a href="/projects" className="btn primary">View My Projects</a>
            <a href="/contact" className="btn secondary">Contact Me</a>
          </div>
        </div>
      </div>
    </>
  );
}
