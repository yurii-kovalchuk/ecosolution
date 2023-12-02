import Header from "../Header/Header";
import Main from "../../sections/Main/Main";
import About from "../../sections/About/About";
import Cases from "../../sections/Cases/Cases";
import Questions from "../../sections/Questions/Questions";
import ContactUs from "../../sections/ContactUs/ContactUs";
import Electricity from "../../sections/Electricity/Electricity";

function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Electricity />
      <Cases />
      <Questions />
      <ContactUs />
    </>
  );
}

export default App;
