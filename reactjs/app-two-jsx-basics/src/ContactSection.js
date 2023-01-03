import React from "react";
import Card from "./Card";

const ContactSection = () => {
    return (
        <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">
            We love new friends!
          </h2>
          <div className="row">
              <Card title="Card 1" buttonText="Card 1 Button" />
              <Card title="Card 2" buttonText="Card 2 Button" />
              <Card title="Card 3" buttonText="Card 3 Button" />
          </div>
        </div>
      </section>
    );
};

export default ContactSection;