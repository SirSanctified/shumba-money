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
        <p>Welcoming all those who aspire</p>
      </div>
      <div className="first-section">
        <div className="content-f">
          <p>
            At Shumba, we believe true wealth comes from more than money in the
            bank. It includes financial independence, community and the freedom
            to express yourself. That's why we founded Shumba Money - to provide
            fashion, finances and community that unlock a richer life for all
            Zimbabweans, regardless of background.
          </p>
          <p>
            Here you'll find trendy style at fair prices, financial tools that
            build real wealth and a community that inspires each member to be
            their most authentic self. Our products are just the beginning. The
            real transformation happens within each person who joins our family,
            as aspirations become reality through the power of community,
            finances that work for you and fashion that expresses your true
            self.
          </p>
          <p>
            Walk with us on our journey to create a Zimbabwe where what's within
            each person - their spirit, talent and unique perspective - has the
            opportunity to flourish. You belong here.
          </p>
          <a href="/#Contact" className="btn btn-outline">
            Get Started <FaArrowRight />
          </a>
        </div>
        <div className="video-f">
          <Video source={videos.fashionMan} />
        </div>
      </div>
      <div className="history">
        <div className="heading">
          <h1>Our Origin Story</h1>
          <hr />
          <p>How It All Began</p>
        </div>
        <div className="history-content">
          <div className="image-history">
            <img src={images.history} alt="history" />
          </div>
          <div className="content-history">
            <p>
              Shumba Money started with a simple but radical idea: that
              Zimbabweans deserved access to financial services, fashion and
              community on their own terms.
            </p>
            <p>
              It was founded in 2020 by a group of passionate individuals who
              saw the need for a platform that seamlessly integrates various
              services under one roof. With a combined experience of over 10
              years in the industry, our team is dedicated to providing
              innovative solutions that cater to the diverse needs of our
              customers.We launched with three key services that aimed to uplift
              the financial, emotional and social wellbeing of Zimbabweans:
            </p>
            <ul
              style={{
                paddingLeft: "2rem",
                color: "var(--lightgray)",
                fontSize: "1rem",
              }}
            >
              <li>An affordable clothing line called Shumba Style</li>
              <li>
                A fast, convenient money transfer service called Shumba Money
              </li>
            </ul>
            <p>
              Since then we've expanded to offer event planning, fashion
              consultation, entertainment packages, marketing solutions and more
              - each innovation guided by our vision to positively transform
              lives through fashion, finances and community that empower.
            </p>
            <a href="/#services" className="btn" style={{marginTop: "2rem"}}>Explore Our Services <FaArrowRight /></a>
          </div>
        </div>
      </div>
      <div className="vision-and-mission">
        <div className="vision">
          <div className="heading">
            <h1>Our Aspiration</h1>
            <hr />
            <p>Where We're Headed</p>
          </div>
          <div className="vision-content">
            <div className="left-v">
              <img src={images.vision} alt="vision" />
            </div>
            <div className="right-v">
              <p>
                Our big dream is to transform Zimbabwe into a nation where
                looking and living your best is accessible to all.
              </p>
              <p>
                At Shumba Money, our aspiration is to become the leading
                platform in Zimbabwe that seamlessly integrates various
                services, making people's lives easier and more enjoyable. We
                aim to be at the forefront of innovation, constantly adapting to
                the changing landscape and delivering exceptional value to our
                customers.
              </p>
              <p>
                We envision a Zimbabwe where style, finance and passion unite us
                all - regardless of background.
              </p>
            </div>
          </div>
        </div>
        <div className="mission">
          <div className="heading">
            <h1>Our Purpose</h1>
            <hr />
            <p>Our Reason For Being</p>
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
              <p>
                We exist to unlock the power within every Zimbabwean to look and
                live they way they desire—free from constraints.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="values">
        <div className="heading">
          <h1>The Foundation of Our Enterprise</h1>
          <hr />
          <p>Principles That Guide Our Every Move</p>
        </div>
        <div className="values-content">
          <ul className="values-list">
            <li className="value">
              <h2>Accessibility</h2>
              <p>
                We believe everyone deserves opportunities to improve their
                finances and express their authentic self through fashion,
                regardless of background. We strive to make our services and
                products affordable and convenient for all.
              </p>
            </li>
            <li className="value">
              <h2>Empowerment</h2>
              <p>
                We exist to equip Zimbabweans with the tools, knowledge and
                community needed to take control of their money lives and
                identities on their own terms. Financial freedom starts within.
              </p>
            </li>
            <li className="value">
              <h2>Originality</h2>
              <p>
                We celebrate individuality and creating one's own unique path.
                Superficial trends have no place here; we value authenticity
                above all.
              </p>
            </li>
            <li className="value">
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
        <div className="team-intro">
          <div className="heading">
            <h1>Meet Leading Our Team</h1>
            <hr />
            <p>The Minds Behind Shumba Money</p>
          </div>
          <p>
            Together, our team of talented executives, brand visionaries and
            financial experts pour their passion into every product and
            experience we offer - driven by a common purpose: to positively
            transform lives through finances, fashion and community that
            empower.
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
