import React from "react";

export const NotFound = (): React.ReactElement => {
  return (
    <div id="message">
      <h2>404</h2>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <p>
        지정된 파일은 이 웹사이트에서 찾을 수 없습니다. URL에 오타가 있는지
        확인하고 다시 시도해주세요.
      </p>
    </div>
  );
};
