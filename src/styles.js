import styled from "styled-components";

export const Container = styled.div`
  margin: 3rem 10rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
`;

export const CompassLogo = styled.img`
  height: 2rem;
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
  font-family: sans-serif;
  margin-left: 0.8rem;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
`;

export const Option = styled.a`
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 100;
  color: rgba(0, 0, 0, 0.8);
  transition: 0.3s;
  margin-right: 0.2rem;
  padding: 0.6rem 2rem;
  border-radius: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Content = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
`;

export const CardHeader = styled.h1`
  max-width: 500px;
  font-size: 3rem;
  font-family: sans-serif;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
`;

export const CardContent = styled.p`
  font-size: 0.98rem;
  font-family: sans-serif;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.8);
`;

export const CardFooter = styled.div`
  margin-top: 2rem;
`;

export const Button = styled.a`
  font-family: sans-serif;
  font-size: 0.9rem;
  font-weight: 50;
  color: white;
  transition: 0.3s;
  margin-right: 1rem;
  padding: 0.8rem 2.5rem;
  border-radius: 5px;
  background-color: rgba(${(props) => (props.color ? props.color : "none")});
  &:hover {
    background-color: rgba(
      ${(props) =>
        props.color
          ? props.color.substring(0, props.color.length - 3) + ", 0.6"
          : "none"}
    );
    color: black;
    border: 1px solid grey;
  }
`;

export const Vector = styled.img`
  height: 320px;
  margin: 2rem 0 0 0;
`;

export const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 6rem;
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Icon = styled.img`
  height: 1.2rem;
  margin: 0 0.3rem;
`;

export const Companys = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Logo = styled.img`
  height: ${(props) => props.height};
  margin-right: 1.5rem;
`;
