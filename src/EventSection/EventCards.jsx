import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const EventCards = () => {
  return (
    <Wrapper>
      <CardContainer>
        <Card
          heading="Plan"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        />
        <Card
          heading="Play"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        />
        <Card
          heading="Connect"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        />
        <Card
          heading="Support"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="https://images.unsplash.com/photo-1576328077645-2dd68934d2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
        />
      </CardContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Inter", sans-serif;
  padding: 0.4rem;
  @media (min-width: 48rem) {
    padding: 0.8rem;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;
  max-width: 96rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 48rem) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

const Card = ({ heading, description, imgSrc }) => {
  return (
    <CardWrapper
      transition={{
        staggerChildren: 0.035,
      }}
      whileHover="hover"
      duration={0.5}
    >
      <CardImage
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <CardContent>
        <StyledArrow />
        <div>
          <h4>
            {heading.split("").map((l, i) => (
              <ShiftLetter letter={l} key={i} />
            ))}
          </h4>
          <p>{description}</p>
        </div>
      </CardContent>
    </CardWrapper>
  );
};

const CardContent = styled.div`
  padding: 1rem;
  position: relative;
  z-index: 20;
  height: 100%;
  color: #8d8d8d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: color 0.5s;

  &:hover {
    color: #fff;
  }
`;

const StyledArrow = styled(FiArrowRight)`
  font-size: 1.875rem;
  transition: transform 0.5s;
  margin-left: auto;
`;

const CardImage = styled.div`
  position: absolute;
  inset: 0;
  transition: filter 0.5s;
  filter: saturate(0%);
`;

const CardWrapper = styled(motion.div)`
  width: 100%;
  height: 16rem;
  background-color: #f8f9fa;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  &:hover ${CardImage} {
    filter: saturate(100%);
    transform: scale(1.1);
  }

  &:hover ${CardContent} {
    color: #fff;
  }

  &:hover ${StyledArrow} {
    transform: rotate(-45deg);
  }

  @media (min-width: 48rem) {
    height: 20rem;
  }
`;

const ShiftLetter = ({ letter }) => {
  return (
    <StyledShiftLetter>
      <LetterContainer
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </LetterContainer>
    </StyledShiftLetter>
  );
};

const StyledShiftLetter = styled.div`
  display: inline-block;
  overflow: hidden;
  height: 2.25rem;
  font-weight: 600;
  font-size: 1.875rem;
`;

const LetterContainer = styled(motion.span)`
  display: flex;
  flex-direction: column;
  min-width: 4px;
`;

export default EventCards;
