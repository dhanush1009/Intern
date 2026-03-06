import { 
  FaLightbulb, 
  FaBullseye, 
  FaUsers, 
  FaHandshake, 
  FaGraduationCap,
  FaRocket
} from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Main About Section */}
      <section className="about-main">
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h2>Create Your Tomorrow With Us</h2>
              <p>
                <strong>Shanruck Technologies</strong> provides immersive training programs designed to 
                help individuals develop practical skills required in today's competitive job market.
              </p>
              <p>
                We offer programs in web development, cybersecurity, UI/UX design, and programming technologies. 
                Our courses are designed especially for freshers and beginners who want to start a successful 
                career in the technology industry.
              </p>
              <p>
                Our experienced mentors focus on hands-on learning through real-world projects, industry 
                guidance, and career development support.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <FaGraduationCap className="placeholder-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="vision-container">
          <div className="vision-icon-wrapper">
            <FaLightbulb className="section-icon" />
          </div>
          <h2>Our Vision</h2>
          <p className="vision-content">
            We envision a future where every individual has the opportunity to discover their potential 
            and build a meaningful career. Shanruck Technologies aims to guide students with the right 
            tools, mentorship, and learning resources so they can confidently explore and pursue their 
            career goals.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-icon-wrapper">
            <FaBullseye className="section-icon" />
          </div>
          <h2>Our Mission</h2>
          <p className="mission-content">
            Our mission is to provide structured career support and skill-based training programs that 
            empower individuals to make informed career decisions. Through mentorship, practical learning, 
            and professional guidance, we help students unlock their full potential and build rewarding careers.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <FaRocket />
            </div>
            <h3>Innovation</h3>
            <p>
              We continuously evolve our curriculum to match industry trends and emerging technologies.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FaUsers />
            </div>
            <h3>Student-Centric</h3>
            <p>
              Every student's success is our priority. We provide personalized attention and support.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FaHandshake />
            </div>
            <h3>Integrity</h3>
            <p>
              We maintain the highest standards of honesty and transparency in everything we do.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FaGraduationCap />
            </div>
            <h3>Excellence</h3>
            <p>
              We are committed to delivering top-quality education and exceptional learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="difference-section">
        <h2>What Sets Us Apart</h2>
        <div className="difference-container">
          <div className="difference-item">
            <div className="difference-number">01</div>
            <h3>Beginner-Friendly Approach</h3>
            <p>
              Our programs are specifically designed for freshers with no prior coding experience. 
              We start from the basics and build up to advanced concepts.
            </p>
          </div>

          <div className="difference-item">
            <div className="difference-number">02</div>
            <h3>Industry-Experienced Mentors</h3>
            <p>
              Learn from professionals who have worked with top companies and have real-world 
              experience in their respective fields.
            </p>
          </div>

          <div className="difference-item">
            <div className="difference-number">03</div>
            <h3>Practical Project-Based Learning</h3>
            <p>
              We believe in learning by doing. Build real projects that you can showcase in 
              your portfolio to potential employers.
            </p>
          </div>

          <div className="difference-item">
            <div className="difference-number">04</div>
            <h3>Comprehensive Career Support</h3>
            <p>
              From resume building to interview preparation and job placement assistance, 
              we support you throughout your career journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
