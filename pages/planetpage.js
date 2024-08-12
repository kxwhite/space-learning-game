import React, { useState } from 'react';
import PlanetGenerator from '../components/planetgenerator';
import Planet from '../components/planet';

const planetsData = [
  { type: 'planet', name: "HTML", img: "/planetpage_assets/pixel_planet01.png", link: ["https://www.w3schools.com/html/exercise.asp","https://www.w3schools.com/html/html_exam.asp"], id: "planet1", description: "HTML (HyperText Markup Language) is the standard markup language used to create web pages. It provides the basic structure of a webpage, which is then enhanced and modified by other technologies like CSS (Cascading Style Sheets) and JavaScript. HTML elements are the building blocks of HTML pages and are represented by tags. These tags label pieces of content such as 'heading', 'paragraph', 'table', and so on."},
  { type: 'empty' },
  { type: 'planet', name: "CSS", img: "/planetpage_assets/pixel_planet02.png", link: ["https://www.w3schools.com/css/exercise.asp","https://www.w3schools.com/css/css_exam.asp"], id: "planet2", description: "CSS (Cascading Style Sheets) is a style sheet language used to describe the look and formatting of a document written in HTML. CSS allows you to control the layout, colors, fonts, and overall visual presentation of a webpage. By separating the content (HTML) from the presentation (CSS), you can make websites more flexible, easier to maintain, and more accessible." },
  { type: 'empty' },
  { type: 'empty' },
  { type: 'planet', name: "RUBY", img: "/planetpage_assets/pixel_planet03.png", link: ["https://www.codecademy.com/learn/learn-ruby","https://www.ruby.or.jp/en/certification/examination/"], id: "planet3", description: "Ruby is a dynamic, open-source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write. Ruby is known for its use in web development, particularly with the Ruby on Rails framework, which streamlines the creation of web applications." },
  { type: 'empty' },
  { type: 'planet', name: "JAVA", img: "/planetpage_assets/pixel_planet04.png", link: ["https://www.w3schools.com/java/exercise.asp?filename=exercise_syntax1","https://www.w3schools.com/java/java_exam.asp"], id: "planet4", description: "Java is a versatile, object-oriented programming language that is widely used in various domains, including web development, mobile applications, and enterprise-level applications. Java is known for its portability across platforms, meaning that code written in Java can run on any device that supports Java without needing to be recompiled." }
];

const Planets = () => {

  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const togglePlanet = (planetName) => {
    setSelectedPlanet((prev) => (prev === planetName ? null : planetName));
  };

  if (selectedPlanet) {
    const planet = planetsData.find((p) => p.name === selectedPlanet);
    return (
      <Planet
        name={planet.name}
        desc={planet.description}
        img={planet.img}
        linkPractice={planet.link[0]}
        linkCert={planet.link[1]}
        toggle={() => togglePlanet(planet.name)}
      />
    );
  }

  return (
    <div className="planet-background">
      <div className="planet-container">
        {planetsData.map((item, index) => (
          <div key={index} className={`planets ${item.type}`} id={item.id}>
            {item.type === "planet" ? (
              <PlanetGenerator
                name={item.name}
                img={item.img}
                toggle={() => togglePlanet(item.name)}
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Planets;
