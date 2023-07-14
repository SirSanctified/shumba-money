import React from "react";
import { motion } from "framer-motion";
import "./AboutPage.css";
import { Video } from "../../components";
import { images, videos } from "../../assets";
import { FaArrowRight } from "react-icons/fa";
import { teamMembers } from "../../constants";

const AboutPage = () => {
  const transition = { duration: 1, type: "tween" };
  return (
    <main className="AboutPage">
      <div className="heading">
        <h1>About Shumba Money</h1>
        <hr />
      </div>
      <div className="first-section">
        <div className="content-f">
          <p>
            Welcome to Shumba Money, your one-stop destination for all things
            clothing, fashion consultation, marketing and advertising,
            entertainment, entertainment news, Beitbridge events, event
            planning, and transfering money within Zimbabwe. We are a dynamic
            start-up that aims to revolutionize the way you experience these
            aspects.
          </p>
        </div>
        <div className="video-f">
          <Video source={videos.fashionMan} />
        </div>
      </div>
      <div className="history">
        <div className="heading">
          <h1>Our Background</h1>
          <hr />
        </div>
        <div className="history-content">
          <div className="image-history">
            <img src={images.history} alt="history" />
          </div>
          <div className="content-history">
            <p>
              Shumba Money was founded in 2020 by a group of passionate
              individuals who saw the need for a platform that seamlessly
              integrates various services under one roof. With a combined
              experience of over 10 years in the industry, our team is dedicated
              to providing innovative solutions that cater to the diverse needs
              of our customers.
            </p>
          </div>
        </div>
      </div>
      <div className="vision-and-mission">
        <div className="vision">
          <div className="heading">
            <h1>Our Vision</h1>
            <hr />
          </div>
          <div className="vision-content">
            <div className="left-v">
              <img src={images.vision} alt="vision" />
            </div>
            <div className="right-v">
              <p>
                Our vision is to become the leading platform in Zimbabwe that
                seamlessly integrates various services, making people's lives
                easier and more enjoyable. We aim to be at the forefront of
                innovation, constantly adapting to the changing landscape and
                delivering exceptional value to our customers.
              </p>
            </div>
          </div>
        </div>
        <div className="mission">
          <div className="heading">
            <h1>Our Mission</h1>
            <hr />
          </div>
          <div className="mission-content">
            <div className="left-m">
              <img src={images.mission} alt="mission" />
            </div>
            <div className="right-m">
              <p>
                Our mission is to empower individuals and businesses in Zimbabwe
                by providing them with convenient and reliable services. We aim
                to simplify the way people access clothing, marketing and
                advertising, entertainment, entertainment news, Beitbridge
                events, and financial transactions, making their lives easier
                and more enjoyable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="values">
        <div className="heading">
          <h1>Our values</h1>
          <hr />
        </div>
        <div className="values-content">
          <ul className="values-list">
            <li className="value">
              <span>icon</span>
              <h2>Accessibility</h2>
              <p>
                We believe everyone deserves opportunities to improve their
                finances and express their authentic self through fashion,
                regardless of background. We strive to make our services and
                products affordable and convenient for all.
              </p>
            </li>
            <li className="value">
              <span>icon</span>
              <h2>Empowerment</h2>
              <p>
                We exist to equip Zimbabweans with the tools, knowledge and
                community needed to take control of their money lives and
                identities on their own terms. Financial freedom starts within.
              </p>
            </li>
            <li className="value">
              <span>icon</span>
              <h2>Originality</h2>
              <p>
                We celebrate individuality and creating one's own unique path.
                Superficial trends have no place here; we value authenticity
                above all.
              </p>
            </li>
            <li className="value">
              <span>icon</span>
              <h2>Transformation</h2>
              <p>
                We aim to positively change lives through education, community
                and resources that uplift the financial, emotional and social
                wellbeing of our members. We want to help transform Zimbabwe,
                one person at a time.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="team">
        <div className="heading">
          <h1>Meet Our Team</h1>
          <hr />
          <p>
            At Shumba Money, we believe that a strong team is the backbone of
            any successful venture. Our team consists of talented professionals
            from various backgrounds, including fashion, marketing,
            entertainment, and finance. Together, we bring a wealth of knowledge
            and expertise to the table, ensuring that we deliver the best
            possible experience to our customers.
          </p>
        </div>
        <ul className="team-members">
          {teamMembers.map((member) => (
            <li className="member" key={member.name + member.position}>
              <div className="socials_image">
                <motion.ul
                  className="socials"
                  initial={{ y: -100 }}
                  whileInView={{
                    transition: transition,
                    y: 0,
                  }}
                  exit={{ transition: transition, y: 100 }}
                >
                  {member.socials.map((social, index) => (
                    <li className="social" key={index}>
                      <a href={social.link} className="social-link">
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </motion.ul>
                <img src={member.image} alt={member.name} />
              </div>
              <h6>
                {member.name} - <span>{member.position}</span>
              </h6>
              <p>{member.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="cta">
        <p>
          Join us on this exciting journey as we redefine the people&#39;s
          experiences. Together, we can build a brighter future for all.
        </p>
        <a className="btn" href="/#Contact">
          Get In Touch With Us <FaArrowRight />
        </a>
      </div>
    </main>
  );
};

export default AboutPage;
