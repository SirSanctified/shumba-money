import { FaArrowRight } from "react-icons/fa";
import { images, videos } from "../assets";
import { Video } from "../components";
import { MdCheckCircleOutline } from "react-icons/md";

const Clothing = () => (
  <section className="clothing">
    <div className="intro">
      <p>
        Tired of expensive fashion labels that don't reflect your independent
        spirit? At Shumba Clothing we celebrate self-expression through stylish
        and affordable threads yet elevated made just for you - the hustler, the
        risk-taker, the one who lives life on your own terms.
      </p>
      <div className="clothing-image">
        <div className="bgColor" />
        <img src={images.stylishWoman} alt="" />
      </div>
    </div>
    <div className="list">
      <div className="left">
        <img src={images.trendy} alt="" />
      </div>
      <div className="right">
        <div className="heading">
          <h3>Our Collection</h3>
          <hr style={{ color: "var(--gray)" }} />
        </div>
        <div>
          <p>
            From printed tees and hoodies to distressed denim and sneakers, we
            curate looks that match your energetic and free-wheeled attitude.
            Our designer labels you'll love without the hefty price tag.
            Kickstart your personal style and self-confidence with timeless
            wardrobe essentials including:
          </p>
          <ul>
            <li>
              <MdCheckCircleOutline color="orange" />
              Classic tees in graphic prints and solid colors,
            </li>
            <li>
              <MdCheckCircleOutline color="orange" />
              Versatile denim in on-trend washes,
            </li>
            <li>
              <MdCheckCircleOutline color="orange" />
              Sleek hoodies and sweatshirts,
            </li>
            <li>
              <MdCheckCircleOutline color="orange" />
              Oversized button-ups and shirts,
            </li>
            <li>
              <MdCheckCircleOutline color="orange" />
              Chunky sneakers and canvas shoes,
            </li>
            <li>
              <MdCheckCircleOutline color="orange" />
              Stylish accessories like hats, belts and jewellery,
            </li>
            <li>
              <MdCheckCircleOutline color="orange" />
              And even more.{" "}
            </li>
          </ul>
          <p>All at prices that won't break the bank.</p>
        </div>
      </div>
    </div>
    <div className="hlapo">
      <div className="heading">
        <h3>Wear what makes you feel powerful</h3>
        <hr style={{ color: "var(--gray)" }} />
        <p>
          Find your tribe and identify with a community that celebrates
          entrepreneurial spirit, hustle and independence through fashion. Wear
          what makes you feel powerful, motivated and ready to take on the world
          - because that's the energy Shumba Clothing aims to evoke with every
          piece.
        </p>
        <p>
          Come as you are - we've got the threads to help you own it. Shop the
          latest arrivals now and treat yourself to some new self-expression!
        </p>
      </div>
      <img src={images.hlapo} alt="" />
    </div>
  </section>
);

const Consultation = () => (
  <section className="consultation">
    <div className="intro">
      <p>
        Looking to update your style but not sure where to start? Our fashion
        experts strive to bring out the confidence and inner glow that comes
        from feeling comfortable and attractive in your own skin. We help
        clients dress their personal best while staying true to who they are -
        because a stylish life begins within. Whether you're looking for a new
        wardrobe or just need some styling tips, we've got you covered.
      </p>
      <div className="video">
        <Video source={videos.consultation} />
      </div>
    </div>
    <div className="second__div">
      <div className="left">
        <div className="heading">
          <h3>Where We Start</h3>
          <hr style={{ color: "var(--gray)" }} />
        </div>
        <p>
          We start with an honest assessment of your current style and the
          pieces in your closet. Then our stylist creates a personalized style
          blueprint just for you, considering your body shape, complexion,
          lifestyle and budget.
        </p>
      </div>
      <div className="right">
        <div className="heading">
          <h3>We Aim To make you comfortable in your own skin.</h3>
          <hr style={{ color: "var(--gray)" }} />
        </div>
        <p>
          We aim to bring out the best version of you by helping you feel
          confident and comfortable in your own skin. Our goal is never to
          change who you are - rather, we simply want to provide the tools to
          fully and authentically express yourself through fashion and
          self-presentation.
        </p>
      </div>
    </div>
    <div className="outro">
      <a href="/#Contact" className="btn btn-outline">
        Talk To Us Now <FaArrowRight />
      </a>
      <p>
        Trust the experts at Shumba Fashion for an honest yet uplifting makeover
        experience that leaves you feeling and looking your very best! Book your
        complimentary consultation today.
      </p>
    </div>
  </section>
);

const Marketing = () => (
  <section className="markerting">
    <div className="intro">
      <img src={images.marketing} alt="" />
      <p>
        Are your marketing efforts failing to generate the leads and sales you
        need? In today's fast-paced business world, effective marketing and
        advertising are essential to success. More sales start with Shumba. Let
        the experts at Shumba marketing revamp your entire digital strategy from
        the ground up. Our full-service agency provides innovative solutions to
        boost your reach, visibility and bottom line. Leave the technical jargon
        and analytics to our pros so you can focus on running your business and
        serving clients, knowing Shumba is boosting your bottom line through
        on-point execution.
      </p>
    </div>
    <div className="outro">
      <div className="methods">
        <div className="heading">
          <h3>Why Shumba Marketing</h3>
          <hr />
        </div>
        <p>
          We start by conducting an audit of your current website, social media
          presence, online ads and other digital marketing channels. From there,
          we craft a comprehensive plan customized to your specific business
          goals and target audience. At Shumba Marketing, we don't just dabble
          in the latest trends - our strategies are data-driven, based on what
          truly gets proven business results.
        </p>
      </div>
      <img src={images.planning} alt="" />
    </div>
  </section>
);

const Entertainment = () => (
  <section className="entertainment">
    <div className="intro">
      <div className="left">
        <img src={images.entertainment} alt="" />
      </div>
      <div className="right">
        <div className="heading">
          <h3>Life is too short not to enjoy it to the fullest!</h3>
          <hr style={{ color: "var(--gray)" }} />
        </div>
        <p>
          Are you looking for the hottest concerts, comedy clubs and festivals?
          Want to rub shoulders with A-list celebrities at exclusive parties and
          galas? As a member of Shumba Entertainment, you'll have an "insider's
          pass" to the best cultural experiences Zimbabwe has to offer.
        </p>
      </div>
    </div>
    <div className="second__div">
      <div className="reason">
        <div className="heading">
          <h3>Why Should You Consider Us</h3>
          <hr style={{ color: "var(--gray)" }} />
        </div>
        <p>
          We work directly with event promoters to obtain tickets to sold-out
          concerts featuring top international and local artists before they hit
          the general public. Our partnerships with venues give members
          discounts, perks and VIP upgrades to major festivals, theatre
          productions and more.
        </p>
      </div>
      <div className="sponsored">
        <div className="heading">
          <h3>What We Sponsor</h3>
          <hr style={{ color: "var(--gray)" }} />
        </div>
        <p>
          Shumba sponsors exclusive celebrity bashes where members can mingle
          with artists, actors and influencers. We also provide first access to
          concert tickets, concert meet & greets, swag bags, event giveaways and
          entertainment news.
        </p>
      </div>
    </div>
    <div className="outro">
      <img src={images.happy} alt="" />
      <div className="cta">
        <p>
          For a low monthly membership fee, Shumba Entertainment connects you to
          an exclusive community of like-minded culture lovers. Join today and
          unleash your inner party animal!
        </p>
        <button
          className="btn"
          onClick={() =>
            alert(
              "We are yet to create a community for you. For the meantime, follow us on social media to stay up-to-date."
            )
          }
        >
          Join Now <FaArrowRight />
        </button>
      </div>
    </div>
  </section>
);

const EventPlanning = () => (
  <section className="planning">
    <div className="intro">
      <img src={images.event} alt="" />
      <div>
        <div className="heading">
          <h3>Let Us Handle It</h3>
          <hr style={{ color: "var(--gray)" }} />
        </div>
        <p>
          Are you planning a wedding, conference, product launch, fundraiser or
          any other major event that needs to go off without a hitch? Let
          Shumba's renowned event experts handle every detail so you can fully
          enjoy this special day. From venue selection and decor to menus,
          entertainment and photography, our team of seasoned event managers has
          the expertise, creative flair and calm authority to orchestrate an
          unforgettable experience that leaves lasting memories and positive
          impressions.
        </p>
      </div>
    </div>
    <div className="second__div">
      <div className="left">
        <div className="heading">
          <h3>Why Us</h3>
          <hr style={{ color: "var(--gray)" }} />
        </div>
        <p>
          With meticulous organization, budget management and problem-solving
          skills, we ensure your vision comes to life exactly as you envisioned
          - without you having to lose sleep over any of the execution. From
          intimate gatherings to large-scale productions, our event specialists
          tailor plans to meet your desired vibe, budget and aesthetic while
          managing every vendor, supply and schedule item on your to-do list.
        </p>
      </div>
      <div className="right">
        <div className="heading">
          <h3>What You Have To Do</h3>
          <hr style={{ color: "var(--gray)" }} />
        </div>
        <p>
          Relinquish your event anxiety and trust the professionals at Shumba
          Event Planning to handle all logistics so you can sit back, relax and
          look forward to a truly magical day. Our goal is to make your vision a
          reality while exceeding your highest expectations - so you'll want to
          work with us again for every significant occasion that marks your
          journey through life. Give us your vision - we'll make it a reality.
        </p>
      </div>
    </div>
  </section>
);

const Events = () => (
  <section className="events">
    <div className="intro">
      <p>
        Get connected to the livewire social scene of Beitbridge with insider
        access to exclusive parties, concerts, festivals, and secret events you
        won't find anywhere else! As a Shumba member, you'll be first in line
        for tickets to the coolest gigs featuring both local and international
        artists.
      </p>
      <img src={images.eNews} alt="" />
    </div>
    <div className="second__div">
      <div className="left">
        <div className="heading">
          <h3>What You'll Get To Enjoy</h3>
          <hr style={{ color: "var(--gray)" }} />
        </div>
        <p>
          Join VIP pools, mingle with celebrities at exclusive bashes, and get
          invites to members-only gatherings where Beitbridge's influential
          people connect. From epic outdoor festivals to hidden bar pop-ups,
          Shumba members are always in the know about what's happening over the
          Limpopo.
        </p>
      </div>
      <div className="right">
        <div className="heading">
          <h3>We Are Beitbridge's Best</h3>
          <hr style={{ color: "var(--gray)" }} />
        </div>
        <p>
          With direct relationships with popular venues, promoters and event
          planners, we give you the inside track on Beitbridge's buzziest events
          before the masses. Expand your social life and meet like-minded people
          through Shumba's carefully curated events designed for those who seek
          an enriching good time.
        </p>
      </div>
    </div>
    <div className="cta">
      <p>
        Get hooked up at the city's hottest parties where memories - and new
        friendships - are made.
      </p>
      <button
        className="btn btn-outline"
        onClick={() =>
          alert(
            "We are yet to create a community for you. For the meantime, follow us on social media to stay up-to-date."
          )
        }
      >
        Get Started <FaArrowRight />
      </button>
    </div>
  </section>
);

const News = () => (
  <section className="news">
    <div className="intro">
      <div className="left">
        <p>
          Break into the inner circle of celebrity culture and join the
          thousands choosing Shumba as their #1 source for inside dirt, unhinged
          interviews that go where no reporter has gone before, and
          recommendations tuned exactly to your tastes in TV, movies and music.
        </p>
        <button
          className="btn"
          onClick={() =>
            alert(
              "We are yet to create a community for you. For the meantime, follow us on social media to stay up-to-date."
            )
          }
        >
          Join Now <FaArrowRight />
        </button>
      </div>
      <div className="right">
        <img src={images.news} alt="" />
      </div>
    </div>
    <div className="second__div">
      <div className="left">
        <div className="heading">
          <h3>Why Join</h3>
          <hr style={{ color: "var(--gray)" }} />
        </div>
        <p>
          Get addicted to juicy behind-the-scenes scoops delivered straight to
          your phone, read once-in-a-lifetime celebrity profiles written by our
          crack team of entertainment journalists, and discover rising stars set
          to dominate the headlines tomorrow in exclusive long-form features you
          won't find anywhere else.
        </p>
      </div>
      <div className="left">
        <div className="heading">
          <h3>What's In Fo You</h3>
          <hr style={{ color: "var(--gray)" }} />
        </div>
        <p>
          Join the Shumba community where entertainment buffs come together to
          dish the dirt, debate the latest controversies and shape the stories
          we cover to keep you always ahead of the curve. There's never been a
          better time to elevate your entertainment obsession and get the latest
          news.
        </p>
      </div>
    </div>
  </section>
);

const Money = () => (
  <section className="money-transfer">
    <div className="intro">
      <p>
        Tired of stressful trips to the bank or post office to send money? At
        Shumba Money, we're revolutionizing how Zimbabweans send funds across
        the country in the simplest way possible.
      </p>
      <img src={images.moneyHeld} alt="" />
    </div>
    <div className="second__div">
      <div className="left">
        <div className="heading">
          <h3>How We Make It Possible</h3>
          <hr style={{ color: "var(--gray)" }} />
        </div>
        <p>
          With our network of over 40 agent locations nationwide, you can walk
          in and easily transfer cash in minutes. Simply fill out a simple form
          with the recipient's details and amount, pay a small fee, and cash is
          in the other person's hand within the hour.
        </p>
      </div>
      <div className="right">
        <div className="heading">
          <h3>Why Shumba Money</h3>
          <hr style={{ color: "var(--gray)" }} />
        </div>
        <div>
          <p>
            Our network of trusted partners act as pickup locations for
            recipients, so funds can be collected nearby without long commutes.
            For senders, we offer multiple payment options for added
            convenience, with agents located in major towns and city centers
            across Zimbabwe.
          </p>
          <p>
            With Shumba's trusted name, you can be assured your transfers and
            information are secure and private every step of the way. And our
            agents are standing by to assist you with any questions.
          </p>
        </div>
      </div>
    </div>
    <div className="outro">
      <p>
        Say goodbye to complicated money transfers. With Shumba's extensive
        agent network, sending cash within Zimbabwe has never been easier or
        more hassle-free.
      </p>
    </div>
  </section>
);

const services = [
  {
    name: "Clothing",
    sub: "Affordable Urban Fashion Made For The Free-Spirited Go-Getter",
    description:
      "Tired of expensive fashion labels that don't reflect your independent spirit? At Shumba Clothing we celebrate self-expression through stylish and affordable threads yet elevated made just for you - the hustler, the risk-taker, the one who lives life on your own terms.",
    jsx: <Clothing />,
  },
  {
    name: "Fashion Consultation",
    sub: "Look and Feel Your Best with the Help of Our Professional Image Consultants",
    description:
      "Our fashion experts strive to bring out the confidence and inner glow that comes from feeling comfortable and attractive in your own skin. We help clients dress their personal best while staying true to who they are - because a stylish life begins within.",
    jsx: <Consultation />,
  },
  {
    name: "Marketing",
    sub: "Grow Your Business Reach and Revenue Through Cutting-Edge Digital Strategies",
    description:
      "In today's fast-paced business world, effective marketing and advertising are essential to success. More sales start with Shumba. Let the experts at Shumba marketing revamp your entire digital strategy from the ground up.",
    jsx: <Marketing />,
  },
  {
    name: "Entertainment",
    sub: "Your Passport to the Best Live Shows, Festivals and Celebrity Parties",
    description:
      "Life is too short not to enjoy it to the fullest! Are you looking for the hottest concerts, comedy clubs and festivals? Want to rub shoulders with A-list celebrities at exclusive parties and galas? As a member of Shumba Entertainment, you'll have an \"insider's pass\" to the best cultural experiences Zimbabwe has to offer.",
    jsx: <Entertainment />,
  },
  {
    name: "Event Planning",
    sub: "Leave the Stress Behind and Trust Our Experts to Orchestrate Your Perfect Day",
    description:
      "Are you planning a wedding, conference, product launch, fundraiser or any other major event that needs to go off without a hitch? Let Shumba's renowned event experts handle every detail so you can fully enjoy this special day. From venue selection and decor to menus, entertainment and photography, our team of seasoned ...",
    jsx: <EventPlanning />,
  },
  {
    name: "Beitbridge Events",
    sub: " Insider Access to the Hottest Parties, Gigs and Get-Togethers in Zimbabwe's Party Capital",
    description:
      "Get connected to the livewire social scene of Beitbridge with insider access to exclusive parties, concerts, festivals, and secret events you won't find anywhere else! As a Shumba member, you'll be first in line for tickets to the coolest gigs featuring both local and international artists.",
    jsx: <Events />,
  },
  {
    name: "Entertainment News",
    sub: "Get the Juicy Gossip, Unfiltered Interviews and Exclusive Recommendations Reserved Just for Members",
    description:
      "Break into the inner circle of celebrity culture and join the thousands choosing Shumba as their #1 source for inside dirt, unhinged interviews that go where no reporter has gone before, and recommendations tuned exactly to your tastes in TV, movies and music.",
    jsx: <News />,
  },
  {
    name: "Money Transfer",
    sub: "Sending Funds was Never This Easy or Convenient",
    description:
      "Tired of stressful trips to the bank or post office to send money? At Shumba Money, we're revolutionizing how Zimbabweans send funds across the country in the simplest way possible.With our network of over 40 agent locations nationwide, you can walk in and easily transfer cash in minutes.",
    jsx: <Money />,
  },
];

export default services;
