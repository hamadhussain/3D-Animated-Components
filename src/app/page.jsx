import Image from "next/image";
import Front from "./Components/FrontPage/page";
import First from "./Components/FirstThree/page";
import Third from "./Components/ThirdThree/page";
import Second from "./Components/SecondThree/page";
export default function Home() {
  return (
    <>
      <Front />
      <First />
      <Second />
      <Third />
    </>
  );
}
