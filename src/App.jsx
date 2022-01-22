import React, { Component } from "react";
import "./App.css";
import { getData } from "./data/database";
import backgroundLinght from "./assets/images/background-light.jpg";
import backgroundDark from "./assets/images/background-dark.jpg";
import Scene from "./componets/Scene";
import ImageViewer from "./componets/ImageViewer";
import { getStoragedData } from "./data/localStorage";

class App extends Component {
  state = {
    theme: "light",
    language: "pt-BR",
    data: null,
    sectionActive: 0,
    imageViewer: null,
  };
  sectionsHeights;
  timer;

  init = () => {
    this.windowResize();
    window.addEventListener("resize", this.windowResize, false);
    window.addEventListener("keydown", this.onKeyDown, false);
    document
      .querySelector("#app main")
      .addEventListener("scroll", this.onMainScroll, false);
    document.querySelector("#app .background-image").classList.add("loaded");
    if (document.querySelector("#app .section-background-image"))
      document
        .querySelector("#app .section-background-image")
        .classList.add("loaded");
  };

  windowResize = () => {
    this.sectionsHeights = [];
    document.querySelectorAll("#app main section").forEach((section) => {
      this.sectionsHeights.push(section.offsetHeight);
    });
  };

  onMainScroll = (e) => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      const scrollPos = Math.ceil(e.target.scrollTop);
      let top = 0;
      let bottom = 0;
      for (let i = 0; i < this.sectionsHeights.length; i++) {
        top = bottom - (bottom === 0 ? 0 : 0.5 * this.sectionsHeights[i]);
        bottom += this.sectionsHeights[i];
        if (
          scrollPos >= top &&
          scrollPos < bottom - 0.5 * this.sectionsHeights[i]
        ) {
          this.setState({ ...this.state, sectionActive: i });
          break;
        }
      }
    }, 300);
  };

  componentDidMount() {
    getData()
      .then((data) => {
        const dataByLanguage = data.find(
          (d) => d.language.code === this.state.language
        );
        this.setState(
          {
            ...this.state,
            theme:
              dataByLanguage && dataByLanguage.theme
                ? dataByLanguage.theme
                : this.state.theme,
            data: dataByLanguage ? dataByLanguage : data[0],
          },
          () => this.init()
        );
      })
      .catch((error) => {
        console.log("ERRRO", error);
      });
  }

  getHeightSum = (index) => {
    let heightSum = 0;
    for (let i = 0; i < this.sectionsHeights.length; i++) {
      if (i === index) break;
      heightSum += this.sectionsHeights[i];
    }
    return heightSum;
  };

  onKeyDown = (e) => {
    if (e.which === 34 || e.which === 40 || e.which === 39) {
      const newIndex = this.state.sectionActive + 1;
      if (this.sectionsHeights[newIndex]) {
        document.querySelector("#app main").scrollTop =
          this.getHeightSum(newIndex);
        // this.setState({ ...this.state, sectionActive: newIndex });
      }
    } else if (e.which === 33 || e.which === 38 || e.which === 37) {
      const newIndex = this.state.sectionActive - 1;
      if (this.sectionsHeights[newIndex]) {
        document.querySelector("#app main").scrollTop =
          this.getHeightSum(newIndex);
        // this.setState({ ...this.state, sectionActive: newIndex });
      }
    } else if (e.which === 27 && this.state.imageViewer) {
      //ESC
      this.setState({ ...this.state, imageViewer: null });
    }
  };

  onThemeChange = (theme) => {
    this.setState({ ...this.state, theme });
  };

  onLanguageChange = (language) => {
    const data = getStoragedData();
    if (data) {
      const dataByLanguage = data.find((d) => d.language.code === language);
      if (dataByLanguage)
        this.setState(
          {
            ...this.state,
            language,
            data: dataByLanguage,
          },
          () => {
            this.windowResize();
            this.onMenuChange(this.state.sectionActive);
          }
        );
    }
  };

  onMenuChange = (index) => {
    document.querySelector("#app main").scrollTop = this.getHeightSum(index);
  };

  onChildAction = (object) => {
    const key = Object.keys(object)[0];
    this.setState({ ...this.state, [key]: object[key] });
  };

  render() {
    const { data, language, theme, sectionActive, imageViewer } = this.state;
    return (
      <>
        {data ? (
          <>
            <div id="app" className={`${theme !== "dark" ? "" : theme}`}>
              <picture
                className="background-image"
                style={{
                  backgroundImage:
                    "url(" +
                    (theme === "dark" ? backgroundDark : backgroundLinght) +
                    ")",
                }}
              />
              <header>
                <div className="options">
                  <div
                    className="options-language"
                    onClick={() =>
                      this.onLanguageChange(language === "en" ? "pt-BR" : "en")
                    }
                  >
                    {language === "en" ? "português" : "english"}
                  </div>
                  <div
                    className="options-theme"
                    onClick={() =>
                      this.onThemeChange(theme === "dark" ? "light" : "dark")
                    }
                  ></div>
                  {/* <div className="options-color black"></div>
                  <div className="options-color white"></div>
                  <div className="options-color red"></div>
                  <div className="options-color orange"></div>
                  <div className="options-color green"></div>
                  <div className="options-color blue"></div> */}
                </div>
                <div className="title">
                  <div className="name">{data.profile.name}</div>
                  <div className={"hole " + language}>{data.profile.role}</div>
                </div>
                <div className="menu">
                  {data.script.map((scene, index) => (
                    <div
                      key={"menu-" + index}
                      className={`item${
                        sectionActive === index ? " active" : ""
                      }`}
                      onClick={() => this.onMenuChange(index)}
                    >
                      {scene.label}
                    </div>
                  ))}
                </div>
              </header>
              <main>
                {data.script.map((scene, index) => (
                  <section key={"section-" + index}>
                    {scene.backgroundImage && (
                      <picture
                        className="section-background-image"
                        style={{
                          backgroundImage: "url(" + scene.backgroundImage + ")",
                        }}
                      />
                    )}
                    <div className="content">
                      <div className="content-title">{scene.label}</div>
                      <Scene
                        key={"scene-" + scene.number}
                        scene={scene}
                        onChildAction={this.onChildAction}
                      />
                    </div>
                  </section>
                ))}
              </main>
            </div>
            {imageViewer && (
              <ImageViewer
                images={imageViewer.images}
                index={imageViewer.index}
                onChildAction={this.onChildAction}
              />
            )}
          </>
        ) : (
          <div id="loading" className={`${theme !== "dark" ? "" : theme}`}>
            <div>{language === "pt-BR" ? "CARREGANDO" : "LOADING"}</div>
          </div>
        )}
      </>
    );
  }
}

export default App;
