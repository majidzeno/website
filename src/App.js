import React, { Component } from "react";
import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faFacebook,
  faGooglePlus,
  faGithub,
  faLinkedin,
  faMedium,
  faInstagram,
  faCodepen,
  faStackOverflow
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Particles from "react-particles-js";

library.add(
  faTwitter,
  faFacebook,
  faGooglePlus,
  faGithub,
  faLinkedin,
  faMedium,
  faInstagram,
  faCodepen,
  faStackOverflow
);

class App extends Component {
  state = {
    mainClass: "App"
  };
  changeClass = containerClass => {
    this.setState({
      mainClass: `App ${containerClass}`
    });
  };
  render() {
    return (
      <div className={this.state.mainClass}>
        <Particles className="particles" />
        <section className="landingPage">
          <div className="profile">
            <div className="profile__text">
              <p className="bold">Majid Eltayeb</p>
              <p className="light">Frontend Engineer</p>
            </div>
            <div className="social__container">
              <a
                href="https://twitter.com/majidzeno"
                className="twitter"
                target="__blank"
                onMouseOver={() => this.changeClass("color-twitter")}
                onMouseOut={() => this.changeClass()}>
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
              <a
                href="https://www.facebook.com/majid.zeno"
                className="facebook"
                target="__blank"
                onMouseOver={() => this.changeClass("color-facebook")}
                onMouseOut={() => this.changeClass()}>
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
              <a
                href="https://plus.google.com/+MajidEltayebZ"
                className="googleplus"
                target="__blank"
                onMouseOver={() => this.changeClass("color-googleplus")}
                onMouseOut={() => this.changeClass()}>
                <FontAwesomeIcon icon={["fab", "google-plus"]} />
              </a>
              <a
                href="https://github.com/majidzeno"
                className="github"
                target="__blank"
                onMouseOver={() => this.changeClass("color-github")}
                onMouseOut={() => this.changeClass()}>
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
              <a
                href="https://www.linkedin.com/in/majidzeno/"
                className="linkedin"
                target="__blank"
                onMouseOver={() => this.changeClass("color-linkedin")}
                onMouseOut={() => this.changeClass()}>
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
              <a
                href="https://medium.com/@majidzeno"
                className="medium"
                target="__blank"
                onMouseOver={() => this.changeClass("color-medium")}
                onMouseOut={() => this.changeClass()}>
                <FontAwesomeIcon icon={["fab", "medium"]} />
              </a>
              <a
                href="https://www.instagram.com/majidzeno/"
                className="instagram"
                target="__blank"
                onMouseOver={() => this.changeClass("color-instagram")}
                onMouseOut={() => this.changeClass()}>
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
              <a
                href="https://codepen.io/majidzeno/"
                className="codepen"
                target="__blank"
                onMouseOver={() => this.changeClass("color-codepen")}
                onMouseOut={() => this.changeClass()}>
                <FontAwesomeIcon icon={["fab", "codepen"]} />
              </a>
              <a
                href="https://stackoverflow.com/users/6669995/majid-eltayeb"
                className="envelope"
                target="__blank"
                onMouseOver={() => this.changeClass("color-envelope")}
                onMouseOut={() => this.changeClass()}>
                <FontAwesomeIcon icon={["fab", "stack-overflow"]} />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
