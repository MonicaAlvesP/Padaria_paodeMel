import { MainContainer } from "./MainStyle";
import { Cakes } from "../Cakes";
import { Candy } from "../Candy";
import { Bread } from "../Bread";
import { HoneyBread } from "../HoneyBread";
import { Salty } from "../Salty";

function Main() {

  return (
    <MainContainer>
      <Cakes />
      <Candy />
      <Bread />
      <HoneyBread />
      <Salty />
    </MainContainer>
  );
}

export default Main;
