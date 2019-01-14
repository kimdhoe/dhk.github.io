/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'

const Card = ({ image, number, type, createdAt }) => (
  <Container to={`/sol-lewitt/wall-drawing-${number}`}>
    <Image image={image} number={number} type={type} />
    <Meta number={number} createdAt={createdAt} />
  </Container>
)

export default Card

const Container = styled(Link)`
  margin-bottom: 2%;
  width: 31%;
  color: black;
  text-decoration: none;
  @media (max-width: 768px) {
    width: 47.5%;
  }
`

const Image = ({ image, number, type }) => (
  <ImageContainer>
    <Img src={image} alt={`Sol LeWitt ${type} #${number}`} />
  </ImageContainer>
)

const Meta = ({ number, createdAt }) => (
  <MetaContainer>
    <CreatedAt>
      {createdAt}
    </CreatedAt>
    <WorkNumber number={number} />
  </MetaContainer>
)

const ImageContainer = styled.div`
  border: 3px solid #333;
  transition: all 120ms ease-out;
  @media (min-width: 769px) {
    ${Container}:hover & {
      box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.3);
      transform: scale(1.02);
    }
  }
`

const Img = styled.img`
  width: 100%;
`

const MetaContainer = styled.div`
  margin: 0.2em 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const CreatedAt = styled.p`
  margin: 0;
  font-weight: 300;
  font-size: 0.8em;
  letter-spacing: 0.03em;
`

const WorkNumber = ({ number }) => (
  <Number>
    #{number}
  </Number>
)

const Number = styled.p`
  margin: 0;
  font-size: 1.1em;
  font-weight: 600;
`
