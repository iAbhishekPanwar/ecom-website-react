import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button, Navbar } from "react-bootstrap";

const Home = () => {
  // Sarcastic quotes from Chandler
  const sarcasticQuotes = [
    "Could I BE more sarcastic?",
    "Could I BE more skilled at web development?",
    "Well, I’m sorry, but I don’t do requests. I’m a Bing kind of guy.",
    "You know, I always thought Eddie was a funny guy, but then I lived with him.",
    "Oh, I’m sorry, did my back hurt your knife?",
    "I'm not great at advice. Can I interest you in a sarcastic comment?",
    "I’m not so good with the advice. Can I interest you in a sarcastic comment?",
    "I'm not Chandler, I'm Batman!",
    "I’m Chandler, could I be wearing any more clothes?",
    "I’m not being sarcastic. I’m just bitter and mean.",
  ];

  const [currentQuote, setCurrentQuote] = useState("");

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * sarcasticQuotes.length);
    setCurrentQuote(sarcasticQuotes[randomIndex]);
  };

  return (
    <>
      <Navbar />

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "50vh" }}
      >
        <Card style={{ width: "50rem" }} className="shadow-lg">
          <Card.Title className="text-center">
            Chandler's Sarcastic Quotes
          </Card.Title>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>{currentQuote}</p>
            </blockquote>
            <div className="text-center mt-3">
              <Button variant="info" onClick={getRandomQuote}>
                Get Another Quote
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Home;
