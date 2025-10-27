import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "Carseal Application",
      subtitle: "Safety Compliance & Notification System",
      description: "Windows-based C# application replacing paper-based carseal tracking with role-based access and automated workflows.",
      tech: ["C#", "SQL Server", "SMTP"],
      highlights: [
        "Multi-step approval workflow with automated email notifications",
        "Role-based access for Operator, Team Lead, Foreman, and Auditor",
        "Excel data import for legacy data migration"
      ]
    },
    {
      title: "Lab Data Interface",
      subtitle: "Real-Time OPC Monitoring System",
      description: "Data interface connecting to Kepware using OPC tags for real-time lab sample data display.",
      tech: ["C#", "Kepware", "OPC"],
      highlights: [
        "Real-time data monitoring and display",
        "Immediate feedback and validation"
      ]
    },
    {
      title: "Live Database",
      subtitle: "DeltaV Graphic Rebuild Tracker",
      description: "Full-featured application to track and manage DeltaV HMI graphics rebuilds across multiple units.",
      tech: ["C#", "SQL Server"],
      highlights: [
        "Relational database architecture",
        "Real-time progress updates and filtering",
        "Project management tools for engineers"
      ]
    },
    {
      title: "10Gb Ethernet MAC Refactor",
      subtitle: "Capstone Project",
      description: "Refactored legacy 10Gb Ethernet MAC from Verilog to Chisel, creating a modern, modular IP core.",
      tech: ["Chisel", "Verilog", "FPGA"],
      highlights: [
        "Implemented 10GBASE-R Physical Coding Sublayer (PCS)",
        "Full validation on FPGA system",
        "Compatible with commercial ASICs"
      ]
    }
  ];

  const skills = {
    "Languages": ["C#", "Python", "Java", "SQL", "JavaScript", "React", "Node.js", "C", "C++", "HTML", "CSS"],
    "Technologies": ["Visual Studio", "GitHub", "Linux", "Kepware", "SolidWorks"],
    "Data & Analysis": ["SQL Server", "PostgreSQL", "Oracle", "Azure", "Power BI", "Excel", "Pandas", "NumPy"]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Sreo Debnath</h1>
          <p className="text-xl mb-6">Software Engineering Student | Automation Engineer</p>
          <p className="text-lg mb-8 text-blue-100">
            Building industrial automation solutions and modern software applications
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:debnathshreosi@gmail.com" className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition">
              <Mail size={18} />
              Email
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              <Github size={18} />
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            I'm a Software Engineering student at the University of Calgary with hands-on experience in industrial automation and software development. Currently working as an Automation Engineering Student at CNRL, I specialize in building desktop applications that bridge the gap between real-time industrial systems and data management.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-start gap-3">
              <MapPin className="text-blue-600 mt-1" size={20} />
              <div>
                <p className="font-semibold text-gray-800">Location</p>
                <p className="text-gray-600">Calgary, AB</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-blue-600 mt-1" size={20} />
              <div>
                <p className="font-semibold text-gray-800">Phone</p>
                <p className="text-gray-600">204-881-4349</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-blue-600 mt-1" size={20} />
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-600 break-all">debnathshreosi@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Education & Experience</h2>
          
          <div className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-800">University of Calgary</h3>
                <p className="text-blue-600 font-semibold">BSc. in Software Engineering</p>
              </div>
              <span className="text-gray-600">2020 - 2026</span>
            </div>
            <p className="text-gray-700">GPA: 3.02 | Dean's List (2020-2021) | Entrance Scholarship 2020</p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Automation Engineering Student</h3>
                <p className="text-blue-600 font-semibold">CNRL, Kirby & Jackfish, AB</p>
              </div>
              <span className="text-gray-600">Jan 2024 - Apr 2025</span>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Developed custom desktop applications using C# Forms and SQL Server Management Studio to handle large datasets, improving data management and operational efficiency</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Integrated real-time data into desktop applications using Kepware and OPC tags, enhancing system responsiveness and real-time monitoring</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Designed, coded, and debugged software for real-life industrial automation applications, implementing security measures to protect sensitive information</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Projects</h2>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-800 mb-1">{project.title}</h3>
              <p className="text-blue-600 font-semibold mb-3">{project.subtitle}</p>
              <p className="text-gray-700 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <ul className="space-y-1">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-2 text-gray-600 text-sm">
                    <span className="text-blue-600">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Technical Skills</h2>
          <div className="grid gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="bg-white text-gray-700 px-3 py-1 rounded border border-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="mb-4">Let's connect and build something great together!</p>
          <div className="flex justify-center gap-4">
            <a href="mailto:debnathshreosi@gmail.com" className="hover:text-blue-400 transition">
              debnathshreosi@gmail.com
            </a>
            <span>|</span>
            <span>204-881-4349</span>
          </div>
          <p className="mt-4 text-gray-400 text-sm">© 2025 Sreo Debnath. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}