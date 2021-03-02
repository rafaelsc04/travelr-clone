import {
  Container,
  Header,
  Brand,
  CompassLogo,
  Title,
  Navigation,
  Option,
  Content,
  Footer,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Vector,
  Button,
  Social,
  Icon,
  Logo,
  Companys,
} from "./styles";
import compass from "./assets/compass-128.png";
import travel from "./assets/travel.png";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import instagram from "./assets/instagram.png";
import google from "./assets/google.png";
import wsj from "./assets/the-wall-street-journal.png";
import netflix from "./assets/netflix.png";
import unicef from "./assets/unicef.png";
import amazon from "./assets/amazon.png";

function App() {
  return (
    <Container>
      <Header>
        <Brand>
          <CompassLogo src={compass} alt="" />
          <Title>travelr.</Title>
        </Brand>
        <Navigation>
          <Option>Home</Option>
          <Option>About us</Option>
          <Option>Contact</Option>
          <Option>Get started</Option>
        </Navigation>
      </Header>
      <Content>
        <Card>
          <CardHeader>Live your life by a compass not a clock.</CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            rhoncus efficitur turpis at efficitur. Mauris ac metus laoreet,
            egestas leo ac, lacinia leo. Mauris et sapien ac nunc vulputate
            fermentum. Proin sed facilisis dui.
          </CardContent>
          <CardFooter>
            <Button color="235, 162, 52, 1">Get started</Button>
            <Button color="71, 71, 71, 1">Watch demo</Button>
          </CardFooter>
        </Card>
        <Vector src={travel} alt="" />
      </Content>
      <Footer>
        <Social>
          <a href="/facebook">
            <Icon src={facebook} alt="facebook" />
          </a>
          <a href="/twitter">
            <Icon src={twitter} alt="twitter" />
          </a>
          <a href="/instagram">
            <Icon src={instagram} alt="instagram" />
          </a>
        </Social>
        <Companys>
          <Logo height="30px" src={google} alt="google" />
          <Logo height="30px" src={amazon} alt="amazon" />
          <Logo height="30px" src={wsj} alt="the wall street journal" />
          <Logo height="25px" src={unicef} alt="unicef" />
          <Logo height="30px" src={netflix} alt="netflix" />
        </Companys>
      </Footer>
    </Container>
  );
}

export default App;
