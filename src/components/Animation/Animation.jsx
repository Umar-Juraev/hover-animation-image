import React, { useState, useEffect } from "react";
import { Container, Title, Ul, Cursor } from "./StyledAnimation";
import { fakeData } from "../../fakeData/fakeData";

const Animation = () => {
  const [position, setPosition] = useState({
    x: "",
    y: "",
  });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Container>
      <Title>National dishes of Uzbekistan</Title>
      <Ul>
        {fakeData.map((elem, i) => (
          <li key={i}>
            <span>{elem.name}</span>
            <div className='img-cont'>
              <img src={elem.img} alt={elem.name} />
            </div>
          </li>
        ))}
      </Ul>

      <div
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        className="cursor"
      ></div>
    </Container>
  );
};

export default Animation;
