import {
  BiLogoLinkedin,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";
import founder from "../assets/Shumba/founder.jpg";
import melusi from "../assets/images/melusi.webp";
import evelyn from "../assets/images/evelyn.jpeg";

const teamMembers = [
  {
    name: "Marshall Tatenda Mushayikwa",
    position: "Founder & CEO",
    image: founder,
    description:
      "Vision without execution is just a hallucination, but execution without vision just passes the time. At Shumba Money, our vision is to empower people through fashion and finances, and we execute that vision through every product and service we offer.",
    socials: [
      {
        icon: <BiLogoLinkedin />,
        link: "https://linkedin.com/in/marshall-tatenda-mushayikwa/",
      },
      {
        icon: <BiLogoTwitter />,
        link: "https://twitter.com",
      },
      {
        icon: <BiLogoFacebook />,
        link: "https://facebook.com/",
      },
      {
        icon: <BiLogoInstagram />,
        link: "https://instagram.com",
      },
    ],
  },
  {
    name: "Melusi Togo",
    position: "Co-founder & COO",
    image: melusi,
    description:
      "We founded Shumba Money to level the playing field and provide tools that everyone deserves access to, regardless of background. If we can make stylish self-expression or sending money just a little easier for even one person, it's worth all the effort.",
    socials: [
      {
        icon: <BiLogoLinkedin />,
        link: "https://linkedin.com/in/",
      },
      {
        icon: <BiLogoTwitter />,
        link: "https://twitter.com",
      },
      {
        icon: <BiLogoFacebook />,
        link: "https://facebook.com/",
      },
      {
        icon: <BiLogoInstagram />,
        link: "https://instagram.com",
      },
    ],
  },
  {
    name: "Evelyn Rushinga",
    position: "Fashion Director",
    image: evelyn,
    description:
      "I joined Shumba Money to help people find the courage to dress how they truly want - not how they think they should. Style is self-expression, and I believe fashion has the power to inspire people to become the best version of themselves.",
    socials: [
      {
        icon: <BiLogoLinkedin />,
        link: "https://linkedin.com/in/",
      },
      {
        icon: <BiLogoTwitter />,
        link: "https://twitter.com",
      },
      {
        icon: <BiLogoFacebook />,
        link: "https://facebook.com/",
      },
      {
        icon: <BiLogoInstagram />,
        link: "https://instagram.com",
      },
    ],
  },
];

export default teamMembers;
