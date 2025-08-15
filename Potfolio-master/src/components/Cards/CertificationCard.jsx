import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  border: 0.1px solid #854CE6;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    transform: translateY(-5px);
  }

  @media only screen and (max-width: 768px) {
    width: 300px;
    padding: 10px;
  }
`;

const Top = styled.div`
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  @media only screen and (max-width: 768px){
    height: 40px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px){
    font-size: 14px;
  }
`;

const Issuer = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px){
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px){
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px){
    font-size: 12px;
  }
`;

const Link = styled.a`
  color: #854CE6;
  font-size: 14px;
  text-decoration: underline;
  &:hover {
    opacity: 0.8;
  }
`;

const CertificationCard = ({ certification }) => {
  return (
    <Card>
      <Top>
        <Image src={certification.img} />
        <Body>
          <Title>{certification.title}</Title>
          <Issuer>{certification.issuer}</Issuer>
          <Date>{certification.date}</Date>
        </Body>
      </Top>
      <Description>{certification.desc}</Description>
      <Link href={certification.link} target="_blank" rel="noopener noreferrer">
        View Certificate
      </Link>
    </Card>
  );
};

export default CertificationCard;
