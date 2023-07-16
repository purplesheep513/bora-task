import React from "react";
import { Link } from 'react-router-dom';

export const Info = (): React.ReactElement => {
  return (
    <>
      <section className="section1">
        <div className="info_container">
          <div className="photo_zone">
            <div className="img_container">
            </div>
          </div>
          <div className="info_zone">
            <h1>Bora YANG</h1>
          </div>
          <div className="info_zone">
            <h1>Abilities</h1>
          </div>
          <Link to='/ranking'>link</Link>
        </div>
      </section>
    </>
  );
};