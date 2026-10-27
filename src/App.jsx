import React, { useState } from 'react';

export default function App() {
  const [formStatus, setFormStatus] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const personalInfo = {
    name: "Sahil Gangotia",
    role: "Python Full Stack Developer",
    bio: "Passionate Full Stack Developer specializing in building modern web applications using Python, HTML, CSS, JavaScript, React, Django, and MySQL.",
    github: "https://github.com/Sahil-Gangotia",
    linkedin: "https://www.linkedin.com/jobs/",
    email: "gangotiasahil@gmail.com",
    location: "Chandigarh, India",
  };

  const skills = [
    { name: "Python", category: "Backend" },
    { name: "Django & REST Framework", category: "Backend" },
    { name: "React.js", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "HTML5 & CSS", category: "Frontend" },
    { name: "MySQL / MariaDB", category: "Database" },
    { name: "Git & GitHub", category: "Tools" },
  ];

  const projects = [
    {
      title: "Aura Mystic",
      subtitle: "E-Commerce Perfume Web Application",
      description: "Full-stack e-commerce web app with interactive dynamic product showcase, cart management, and Django REST APIs.",
      tech: ["React", "Django REST", "MySQL", "CSS"],
      github: "https://github.com/Sahil-Gangotia/aura-mystic",
      live: "https://aura-mystic-nine.vercel.app/",
    },
    {
      title: "WorkVibe",
      subtitle: "Job Portal Platform",
      description: "React-based job search portal featuring candidate registration, job posting workflows, and recruiter role handling.",
      tech: ["React.js", "Django", "JavaScript", "CSS"],
      github: "https://github.com/Sahil-Gangotia",
      live: "https://workvibe-frontend-kwtr.vercel.app",
    },
    {
      title: "Student Management System",
      subtitle: "Web CRUD Application",
      description: "Student records management portal with user authentication, custom views, CRUD logic, and XAMPP MySQL integration.",
      tech: ["Python", "Django", "MySQL", "HTML/CSS"],
      github: "https://github.com/Sahil-Gangotia",
      live: "https://github.com/Sahil-Gangotia",
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus(true);
    setTimeout(() => setFormStatus(false), 5000);
    e.target.reset();
  };

  return (
    <div style={{ minHeight: '100vh', padding: '2rem 5%', color: '#f3f4f6', backgroundColor: '#02161b', fontFamily: 'sans-serif' }}>
      
      {/* Dynamic Keyframe Animations & Hover Styles */}
      <style>{`
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.4); transform: scale(1); }
          50% { box-shadow: 0 0 35px rgba(59, 130, 246, 0.8); transform: scale(1.03); }
          100% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.4); transform: scale(1); }
        }

        @keyframes textGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animated-gradient-text {
          background: linear-gradient(90deg, #60a5fa, #3b82f6, #9333ea, #60a5fa);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textGradient 6s ease infinite;
        }

        .interactive-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .interactive-card:hover {
          transform: translateY(-8px);
          border-color: #3b82f6 !important;
          box-shadow: 0 12px 30px -10px rgba(59, 130, 246, 0.3);
        }

        .animated-btn {
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .animated-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.15);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
        }

        input:focus, textarea:focus {
          border-color: #3b82f6 !important;
          outline: none;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
        }
      `}</style>

      {/* Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1.5rem', borderBottom: '1px solid #1f2937' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }} className="animated-gradient-text">
          {personalInfo.name}
        </h1>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ color: '#9ca3af', textDecoration: 'none' }}>GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: '#9ca3af', textDecoration: 'none' }}>LinkedIn</a>
          <a href="#contact" style={{ color: '#9ca3af', textDecoration: 'none' }}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '4rem 0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Animated Profile Photo */}
        <div style={{ marginBottom: '1.75rem' }}>
          <img 
            src="/profile.jpeg" 
            alt={personalInfo.name} 
            style={{ 
              width: '150px', 
              height: '150px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              border: '3px solid #3b82f6',
              animation: 'pulseGlow 4s infinite ease-in-out'
            }} 
          />
        </div>

        <span style={{ padding: '0.4rem 1.2rem', marginBottom: '1.2rem', fontSize: '0.85rem', background: '#0f2942', border: '1px solid #1e40af', color: '#60a5fa', borderRadius: '50px' }}>
          🚀 Available for Python Full Stack Roles
        </span>
        
        <h2 style={{ fontSize: '3.2rem', fontWeight: '800', margin: '0 0 1rem 0', letterSpacing: '-0.5px' }}>
          Hi, I'm <span className="animated-gradient-text">{personalInfo.name}</span>
        </h2>
        
        <p style={{ fontSize: '1.15rem', color: '#9ca3af', maxWidth: '620px', lineHeight: '1.6', margin: '0 0 2.2rem 0' }}>
          {personalInfo.bio}
        </p>
        
        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#projects" className="animated-btn" style={{ padding: '0.8rem 1.6rem', background: '#2563eb', color: 'white', fontWeight: '600', borderRadius: '8px', textDecoration: 'none' }}>
            View Projects
          </a>
          
          {/* View Resume Photo Modal Button */}
          <button 
            onClick={() => setShowResumeModal(true)} 
            className="animated-btn" 
            style={{ padding: '0.8rem 1.6rem', background: '#0284c7', color: 'white', fontWeight: '600', borderRadius: '8px', border: 'none', fontSize: '1rem' }}
          >
            📄 View Resume
          </button>
          
          <a href="#contact" className="animated-btn" style={{ padding: '0.8rem 1.6rem', background: '#111827', border: '1px solid #374151', color: 'white', fontWeight: '600', borderRadius: '8px', textDecoration: 'none' }}>
            Let's Connect
          </a>
        </div>
      </section>

      {/* Resume Photo Modal / Popup */}
      {showResumeModal && (
        <div 
          onClick={() => setShowResumeModal(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '1rem',
            boxSizing: 'border-box'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{ 
              position: 'relative', 
              maxHeight: '90vh', 
              maxWidth: '900px',
              width: '100%',
              backgroundColor: '#0a2328', 
              padding: '1rem', 
              borderRadius: '12px',
              border: '1px solid #3b82f6',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setShowResumeModal(false)}
              style={{
                alignSelf: 'flex-end',
                background: '#ef4444',
                color: 'white',
                border: 'none',
                padding: '0.4rem 0.8rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}
            >
              ✕ Close
            </button>

            {/* Resume Image from public folder */}
            <div style={{ overflowY: 'auto', width: '100%', maxHeight: '80vh', textAlign: 'center' }}>
              <img 
                src="/resume.jpeg" 
                alt="Sahil Gangotia Resume" 
                style={{ width: '100%', maxWidth: '750px', height: 'auto', borderRadius: '8px' }} 
              />
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section style={{ padding: '3rem 0' }}>
        <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', textAlign: 'center', borderBottom: '1px solid #1f2937', paddingBottom: '1rem', marginBottom: '2rem' }}>Technical Skills</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {skills.map((skill, index) => (
            <div key={index} className="interactive-card" style={{ padding: '1.25rem', background: '#0a2328', border: '1px solid #133a42', borderRadius: '12px' }}>
              <p style={{ fontWeight: '600', margin: '0 0 0.25rem 0', color: '#f9fafb' }}>{skill.name}</p>
              <span style={{ fontSize: '0.75rem', color: '#60a5fa' }}>{skill.category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '3rem 0' }}>
        <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', textAlign: 'center', borderBottom: '1px solid #1f2937', paddingBottom: '1rem', marginBottom: '2rem' }}>Featured Projects</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {projects.map((project, index) => (
            <div key={index} className="interactive-card" style={{ padding: '1.6rem', background: '#0a2328', border: '1px solid #133a42', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#60a5fa', margin: '0 0 0.25rem 0' }}>{project.title}</h4>
                <p style={{ fontSize: '0.8rem', color: '#9ca3af', margin: '0 0 1rem 0' }}>{project.subtitle}</p>
                <p style={{ fontSize: '0.95rem', color: '#d1d5db', lineHeight: '1.5', margin: '0 0 1.5rem 0' }}>{project.description}</p>
              </div>
              
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={{ padding: '0.25rem 0.6rem', background: '#06171b', border: '1px solid #1f2937', fontSize: '0.75rem', borderRadius: '6px', color: '#9ca3af', fontFamily: 'monospace' }}>{t}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', borderTop: '1px solid #133a42', paddingTop: '1rem' }}>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ flex: 1, textAlign: 'center', padding: '0.5rem', background: '#06171b', border: '1px solid #1e40af', color: '#60a5fa', fontSize: '0.85rem', fontWeight: '600', borderRadius: '6px', textDecoration: 'none' }}
                  >
                    GitHub Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ flex: 1, textAlign: 'center', padding: '0.5rem', background: '#1e40af', color: 'white', fontSize: '0.85rem', fontWeight: '600', borderRadius: '6px', textDecoration: 'none' }}
                  >
                    Live Demo 🚀
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '3rem 0', maxWidth: '700px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', textAlign: 'center', borderBottom: '1px solid #1f2937', paddingBottom: '1rem', marginBottom: '2rem' }}>Get In Touch</h3>
        
        <div style={{ background: '#0a2328', border: '1px solid #133a42', padding: '2rem', borderRadius: '16px' }}>
          <p style={{ textAlign: 'center', color: '#9ca3af', marginBottom: '2rem' }}>
            I'm currently looking for new opportunities as a Python Full Stack Developer. Feel free to reach out!
          </p>

          <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', color: '#60a5fa' }}>Your Name</label>
              <input 
                type="text" 
                required 
                placeholder="Enter your name" 
                style={{ width: '100%', padding: '0.75rem', background: '#06171b', border: '1px solid #1f2937', borderRadius: '8px', color: 'white', boxSizing: 'border-box' }} 
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', color: '#60a5fa' }}>Your Email</label>
              <input 
                type="email" 
                required 
                placeholder="Enter your email" 
                style={{ width: '100%', padding: '0.75rem', background: '#06171b', border: '1px solid #1f2937', borderRadius: '8px', color: 'white', boxSizing: 'border-box' }} 
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', color: '#60a5fa' }}>Message</label>
              <textarea 
                rows="4" 
                required 
                placeholder="Write your message here..." 
                style={{ width: '100%', padding: '0.75rem', background: '#06171b', border: '1px solid #1f2937', borderRadius: '8px', color: 'white', boxSizing: 'border-box', resize: 'vertical' }} 
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="animated-btn" 
              style={{ padding: '0.75rem', background: '#2563eb', color: 'white', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer', marginTop: '0.5rem' }}
            >
              Send Message
            </button>

            {formStatus && (
              <p style={{ textAlign: 'center', color: '#34d399', fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>
                ✅ Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>

          {/* Direct Info */}
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #133a42', flexWrap: 'wrap', gap: '1rem', textAlign: 'center' }}>
            <div>
              <span style={{ display: 'block', fontSize: '0.75rem', color: '#9ca3af' }}>EMAIL</span>
              <a href={`mailto:${personalInfo.email}`} style={{ color: '#60a5fa', textDecoration: 'none', fontSize: '0.9rem' }}>{personalInfo.email}</a>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '0.75rem', color: '#9ca3af' }}>LOCATION</span>
              <span style={{ color: '#f3f4f6', fontSize: '0.9rem' }}>{personalInfo.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '3rem 0', textAlign: 'center', color: '#6b7280', fontSize: '0.85rem', borderTop: '1px solid #1f2937', marginTop: '3rem' }}>
        © 2026 {personalInfo.name}. Built with React.
      </footer>

    </div>
  );
}