import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage/>;
    }

    return this.props.children;
  }
}

const ErrorPage = () => {
  return (
    <div>
      <h1>에러가 발생했습니다.</h1>
      <p>죄송합니다. 문제가 발생했습니다. 나중에 다시 시도해주세요.</p>
    </div>
  );
};
