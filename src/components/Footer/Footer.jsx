import React from "react";
import "../Footer/Footer.scss";

export default function Footer() {
  const service = ["Email Marketing", "Campaigns", "Branding"];
  const furniture = ["Beds", "Chair", "All"];

  const follow = [
    { name: "Facebook", url: "https://www.facebook.com/" },
    { name: "Twitter", url: "https://www.twitter.com/" },
    { name: "Instagram", url: "https://www.instagram.com/" },
  ];

  return (
    <div className="Footer">
      <div className="Footer__Section">
        <h1 className="Footer__Section__LogoName">Panto</h1>
        <p className="Footer__Section__Descp">
          The advantage of hiring a workspace with us is that it gives you
          comfortable service and all-around facilities.
        </p>
        <div className="Footer__Section__Service">
          <ul>
            <li><strong>Service</strong></li>
            {service.map((elem) => (
              <li key={elem}>{elem}</li>
            ))}
          </ul>
          <ul>
            <li><strong>Furniture</strong></li>
            {furniture.map((elem) => (
              <li key={elem}>{elem}</li>
            ))}
          </ul>
          <ul>
            <li><strong>Follow us</strong></li>
            {follow.map((elem) => (
              <li key={elem.name}>
                <a
                  href={elem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={elem.name}
                >
                  {elem.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
