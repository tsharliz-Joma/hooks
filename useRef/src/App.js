import "./App.css";
import StarRating from "./components/StarRating/StarRating";
import Checkbox from "./components/checkbox/Checkbox";
import Status from "./components/status/Status";
import Congrats from "./components/congrats/Congrats";
import Users from "./components/users/Users";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Number from "./components/number/Number";
import Message from "./components/message/Message";
import Form from "./components/form/Form";

function App({ name }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
  };
  return (
    <div className="App">
      <header>
        <h1>{name}</h1>
      </header>
      <Slider {...settings}>
        <div className="slide">
          <StarRating totalStars={5} />
        </div>
        <div className="slide">
          <Congrats />
        </div>
        <div className="slide">
          <Checkbox />
        </div>
        <div className="slide">
          <Status />
        </div>
        <div className="slide">
          <Users />
        </div>
        <div className="slide">
          <Number />
        </div>
        <div className="slide">
          <Message />
        </div>
        <div>
          <Form />
        </div>
      </Slider>
    </div>
  );
}

export default App;
