import React from "react";

export default function Contact() {
  return (
    <>
      {/* CSS in the same file */}
      <style>{`
        .contact-container {
          padding: 50px 20px;
          background: linear-gradient(135deg, #eef1ff, #f5f8ff);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .contact-card {
          background: #ffffff;
          padding: 40px;
          border-radius: 20px;
          max-width: 600px;
          width: 90%;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          text-align: center;
          animation: fadeIn 1s ease;
        }

        .contact-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #4b4bbf;
          margin-bottom: 25px;
        }

        .contact-info {
          font-size: 1.1rem;
          margin-bottom: 18px;
          color: #444;
        }

        .contact-link {
          color: #6a5acd;
          font-weight: 600;
          text-decoration: none;
        }

        .contact-link:hover {
          text-decoration: underline;
        }

        .icon {
          font-size: 1.5rem;
          margin-right: 8px;
          color: #6a5acd;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Page Content */}
      <div className="contact-container">
        <div className="contact-card">
          <h1 className="contact-title">Contact Me</h1>

          <p className="contact-info">
            📱 <strong>Mob no.:</strong> 8210675536
          </p>

          <p className="contact-info">
            📧 <strong>Email:</strong>{" "}
            <a 
              href="mailto:impragatibhardwaj@gmail.com" 
              className="contact-link"
            >
              impragatibhardwaj@gmail.com
            </a>
          </p>

          <p className="contact-info">
            🔗 <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/impragatibhardwaj/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              www.linkedin.com/in/impragatibhardwaj
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
