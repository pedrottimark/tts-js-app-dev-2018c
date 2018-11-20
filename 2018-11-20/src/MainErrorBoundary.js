import React from 'react';
import DocumentTitle from 'react-document-title';

import ImageBrokenPlate from './ImageBrokenPlate';
import ImageSpinningPlate from './ImageSpinningPlate';

class MainErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasCaughtError: false};
  }

  componentDidCatch(error) {
    console.error(error.message);
    this.setState({hasCaughtError: true});
  }

  render() {
    const {title, className, isWaiting, hasError} = this.props;
    const {hasCaughtError} = this.state;
    return (
      <DocumentTitle title={title}>
        <main className={className}>
          {isWaiting ? (
            <ImageSpinningPlate />
          ) : hasError || hasCaughtError ? (
            <ImageBrokenPlate />
          ) : (
            this.props.children
          )}
        </main>
      </DocumentTitle>
    );
  }
}

export default MainErrorBoundary;
