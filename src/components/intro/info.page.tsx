import React from "react";
import { Link } from "react-router-dom";
import my_photo from "../../assets/my_assets/photo.jpg";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { Tooltip } from "@mui/material";
import git from "../../assets/svg/git.svg";
import ts from "../../assets/svg/ts.svg";
import react from "../../assets/svg/react.svg";
import vite from "../../assets/svg/vite.svg";
import webpack from "../../assets/svg/webpack.svg";
import firebase from "../../assets/svg/firebase.svg";

export const Info = (): React.ReactElement => {
  return (
    <section className="section">
      <div className="info_container">
        <div className="photo_zone">
          <div className="img_container">
            <img src={my_photo} alt="myPhoto" />
          </div>
        </div>
        <div className="info_zone">
          <h2>양보라</h2>
          <h3>프론트 엔드 개발자</h3>
          <h4>phone : 010-3650-4707</h4>
          <h4>email : purplesheep513@gmail.com</h4>
        </div>
        <div className="info_zone">
          <h2>개발환경</h2>
          <div className="skill_card">
            <Card name={"TypeScript"} path={ts} />
            <Card name={"React"} path={react} />
            <Card name={"vite"} path={vite} />
            <Card name={"webpack"} path={webpack} />
            <Card name={"firebase"} path={firebase} />
          </div>
          <div>
            <section className="section2 middle">
              <a
                className="mgr10"
                href="https://github.com/purplesheep513/bora-task"
                target="_blank"
              >
                <Tooltip title="GitHub 바로가기">
                  <img
                    src={git}
                    className="pdt10"
                    style={{ width: 30, color: "#646cff" }}
                  />
                </Tooltip>
              </a>
              <Link to="/ranking">
                <Tooltip title="랭킹 바로가기">
                  <MilitaryTechIcon fontSize="large" />
                </Tooltip>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ name, path }): React.ReactElement => {
  return (
    <div className="flex-container flex-col items-center language">
      <div className="card_label">{name}</div>
      <img src={path} className="pdt5" style={{ width: 50 }} />
    </div>
  );
};
