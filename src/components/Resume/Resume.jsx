/**
 * RESUME COMPONENT
 * 
 * This component displays your resume/CV information.
 * 
 * CUSTOMIZATION:
 * - Update all sections with your actual information
 * - Add/remove sections as needed
 * - Modify styling in Resume.css
 */

import './Resume.css';
import '../../styles/animations.css';

function Resume() {
  return (
    <section className="resume section">
      <div className="container">
        {/* Resume Header */}
        <div className="resume-header slide-up">
          <h1 className="resume-name">Tristan Brideweser</h1>
          <div className="resume-contact">
            <p><strong>Mobile:</strong> (845)-537-5697</p>
            <p><strong>Email:</strong> <a href="mailto:tristan.brideweser@gmail.com">tristan.brideweser@gmail.com</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/tristanbrideweser" target="_blank" rel="noopener noreferrer">https://github.com/tristanbrideweser</a></p>
          </div>
        </div>

        {/* Education Section */}
        <div className="resume-section slide-up-delay-1">
          <h2 className="section-title">Education</h2>
          <div className="resume-item">
            <h3 className="item-title">Purdue University – West Lafayette, IN</h3>
            <ul className="item-list">
              <li><strong>MSE</strong>, Master of Science in Interdisciplinary Engineering / Robotics <em>(Exp. May 2027)</em></li>
              <li><strong>MBT</strong>, Master of Business & Technology <em>(Exp. May 2027)</em></li>
              <li><strong>BS</strong>, Bachelor of Science in Data Science & Applied Statistics; <strong>Minor:</strong> Design & Innovation <em>(May 2025)</em></li>
            </ul>
            <p className="item-note"><strong>Relevant Coursework:</strong> Artificial Intelligence, Autonomous Systems, Data Mining & Machine Learning, Accounting for Managers, DevOps & Technology Solutions</p>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="resume-section slide-up-delay-2">
          <h2 className="section-title">Work Experience</h2>
          
          <div className="resume-item">
            <h3 className="item-title">Project Lead | The Data Mine Corporate Partners Program – Purdue University</h3>
            <p className="item-period"><em>Dec 2022 – Present</em></p>
            <ul className="item-list">
              <li><strong>Johnson & Johnson Innovative Medicine:</strong> Applied GenAI methods to identify subgroups within biomedical datasets, improving model interpretability for clinical insights.</li>
              <li><strong>CTB, Inc.:</strong> Built predictive maintenance models for poultry houses, achieving &gt;85% anomaly detection accuracy and reducing downtime risk.</li>
              <li><strong>Knudsen Institute:</strong> Designed ARIMA + DTW clustering dashboards to analyze procurement trends in the automotive supply chain, forecasting surge events 2 weeks earlier.</li>
              <li><strong>MISO:</strong> Developed regression models with &gt;80% accuracy to forecast transmission line ratings, supporting compliance with FERC Order 881.</li>
            </ul>
          </div>

          <div className="resume-item">
            <h3 className="item-title">Teaching Assistant | Mitchell E. Daniels School of Business – Purdue University</h3>
            <p className="item-period"><em>Feb 2024 – May 2024</em></p>
            <ul className="item-list">
              <li>Designed a Python–Qualtrics survey tool to assess student development in leadership and client relationship skills, used by 200+ students per semester.</li>
            </ul>
          </div>

          <div className="resume-item">
            <h3 className="item-title">Admissions Representative | Office of Admissions – Purdue University</h3>
            <p className="item-period"><em>Sept 2023 – Present</em></p>
            <ul className="item-list">
              <li>Deliver presentations to 10,000+ students and families annually, improving Purdue's admission yield.</li>
            </ul>
          </div>

          <div className="resume-item">
            <h3 className="item-title">Artificial Intelligence Research Intern | Weslabs.ai – Boston, MA (Remote)</h3>
            <p className="item-period"><em>May 2023 – Sept 2023</em></p>
            <ul className="item-list">
              <li>Built database infrastructure for AI-driven educational applications and performed market research to identify potential clients.</li>
            </ul>
          </div>
        </div>

        {/* Research & Projects Section */}
        <div className="resume-section slide-up-delay-3">
          <h2 className="section-title">Research & Projects</h2>
          
          <div className="resume-item">
            <h3 className="item-title">Undergraduate Researcher | Purdue UAS Research and Testing (PURT)</h3>
            <p className="item-period"><em>Aug 2024 – Dec 2024</em></p>
            <ul className="item-list">
              <li>Improved autopilot accuracy of UAS platforms using Python-based Kalman filtering, reducing flight time by 10%.</li>
            </ul>
          </div>

          <div className="resume-item">
            <h3 className="item-title">Algorithms Team Lead & Outreach Coordinator | Autonomous Robotics Club of Purdue (ARC)</h3>
            <p className="item-period"><em>Jan 2023 – May 2025</em></p>
            <ul className="item-list">
              <li>Directed algorithm research subteam of 10 students developing Kalman filters and Viterbi algorithms, enabling a robotic hand to perform piano pieces.</li>
              <li>Coordinated partnerships with faculty and industry sponsors, securing funding and resources.</li>
            </ul>
          </div>

          <div className="resume-item">
            <h3 className="item-title">Co-Founder & Data Scientist | Spoke & Wing, LLC (Startup Project)</h3>
            <p className="item-period"><em>Jan 2022 – May 2023</em></p>
            <ul className="item-list">
              <li>Developed predictive model estimating ~$25–30M lifetime savings and co-patented an aviation fuel tank regulator to minimize leakage rates.</li>
              <li><strong>1st Place</strong> – Design & Innovation Challenge 2023</li>
              <li><strong>2nd Place</strong> – Moonshot Pitch Challenge 2024</li>
            </ul>
          </div>
        </div>

        {/* Leadership & Service Section */}
        <div className="resume-section slide-up-delay-1">
          <h2 className="section-title">Leadership & Service</h2>
          
          <div className="resume-item">
            <h3 className="item-title">Mentor | Purdue FIRST Program</h3>
            <p className="item-period"><em>Aug 2025 – Present</em></p>
            <ul className="item-list">
              <li>Assisting K-12 robotics teams in design, coding, and strategy.</li>
            </ul>
          </div>

          <div className="resume-item">
            <h3 className="item-title">Executive Ambassador | The Data Mine – Purdue University</h3>
            <p className="item-period"><em>Sept 2023 – Jan 2025</em></p>
            <ul className="item-list">
              <li>Collaborated with corporate partners, faculty, and prospective students while enhancing student development opportunities.</li>
            </ul>
          </div>

          <div className="resume-item">
            <h3 className="item-title">Eagle Scout | Boy Scouts of America</h3>
            <p className="item-period"><em>Awarded June 2021</em></p>
            <ul className="item-list">
              <li>Demonstrated leadership, project planning, and community service.</li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="resume-section slide-up-delay-2">
          <h2 className="section-title">Skills</h2>
          <div className="resume-item">
            <p><strong>Technical:</strong> Python, R, Git, ROS2, Fanuc/Yamaha Robotics, Fusion 360, EAGLE</p>
            <p><strong>Business & Leadership:</strong> Agile Project Management, Team Leadership, Strategic Communication</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

