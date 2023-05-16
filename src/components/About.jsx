import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import abhishek from "./images/abhishek.jpg";

const AboutPage = () => {
  return (
    <>
      <Card style={{ width: "50rem" }} className="shadow-lg mx-auto mt-3">
        <div className="d-flex align-items-center">
          <Image
            src={abhishek}
            alt="about"
            className="p-3 rounded border"
            style={{ width: "20rem" }}
          />
          <div className="flex-grow-1">
            <Card.Title className="shadow-lg mx-auto mt-3">About Us</Card.Title>
            <Card.Body>
              Welcome to the extraordinary world of{" "}
              <strong>MaxTechies!!!</strong> We are an online store that claims
              to have the most mind-blowing products you never knew you needed.
              Our goal is to dazzle you with an extravagant and indulgent
              shopping experience. We pride ourselves on our exquisite selection
              of products, jaw-dropping prices, and customer service that will
              make you question your own existence.
              <br />
              <br />
              Whether you're seeking the hottest fashion trends, the most
              seductive electronics, or something completely outlandish, we've
              got it all. With our lightning-fast and incredibly unpredictable
              shipping, you can bet your wildest dreams that your purchase will
              arrive fashionably late and with a touch of mystique. At{" "}
              <strong>MaxTechies</strong>, we are committed to making your
              shopping experience as perplexing as possible. Our website is an
              enigma carefully crafted to confuse and challenge your sanity
              while you desperately search for what you think you need.
              <br />
              <br />
              If you dare to seek answers or guidance, our team of dark wizards
              masquerading as customer service representatives is always at your
              disposal. We take pleasure in offering our customers an illusion
              of value for their money, constantly conjuring new products out of
              thin air. We also unleash wicked deals and promotions on
              unsuspecting victims like yourself, so be sure to sign up for our
              newsletter to receive an occasional spellbinding surprise. Thank
              you for foolishly choosing <strong>MaxTechies</strong> as your
              gateway to the abyss of consumerism. We eagerly await the
              opportunity to amaze and bewilder you!
            </Card.Body>
          </div>
        </div>
      </Card>
    </>
  );
};

export default AboutPage;
