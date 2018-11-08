import React from 'react';

import './App.css';
import Author from './Author.js';
import Titles from './Titles.js';

import {fetchGetAuthor, fetchGetOpinions, fetchGetTitles} from './fetch.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: null,
      opinions: [],
      titles: [],
    };
  }

  componentDidMount() {
    const {authorid} = this.props;
    fetchGetOpinions(authorid)
      .then(opinions => {
        this.setState({opinions});
      })
      .catch(error => {
        console.log(error.message);
      });
    fetchGetAuthor(authorid)
      .then(author => {
        this.setState({author});
      })
      .catch(error => {
        console.log(error.message);
      });
    fetchGetTitles(authorid)
      .then(titles => {
        this.setState({titles});
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  render() {
    const {author, opinions, titles} = this.state;
    return (
      <section>
        <Author author={author} />
        <Titles opinions={opinions} titles={titles} />
      </section>
    );
  }
}

export default App;
