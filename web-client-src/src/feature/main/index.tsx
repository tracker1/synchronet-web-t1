import Container from "@mui/material/Container";
import { App } from "../../app";
import { Counter } from "../counter/Counter";

export const MainSection = () => {
  return (
    <App title="Main">
      <Container>
        <h1>Main Menu</h1>
        <p>
          Welcome to this site.
        </p>
        <hr />
        <Counter />
      </Container>
    </App>
  );
}