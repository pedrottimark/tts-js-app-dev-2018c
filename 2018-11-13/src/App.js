import React from 'react';

import './App.css';
import Author from './Author.js';
import Titles from './Titles.js';

import {
  fetchGetAuthor,
  fetchGetWorks,
  fetchGetReactions,
  fetchPutReaction,
} from './fetch.js';
import {findReactionObject, replaceReactionObject} from './logic';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authordisplay: '',
      reactions: null,
      workidsWaiting: [],
      works: null,
    };
  }

  componentDidMount() {
    const {authorid} = this.props;

    fetchGetAuthor(authorid)
      .then(({authordisplay}) => {
        this.setState({authordisplay});
      })
      .catch(error => {
        console.log(error.message);
      });

    fetchGetWorks(authorid)
      .then(works => {
        this.setState({works});
      })
      .catch(error => {
        console.log(error.message);
      });

    fetchGetReactions(authorid)
      .then(reactions => {
        this.setState({reactions});
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  // Click icon in table row.
  changeReaction = (workid, reactionString) => {
    this.setState(
      ({workidsWaiting}) => ({
        workidsWaiting: [...workidsWaiting, workid], // disable icons in table row
      }),
      () => {
        const reactionObjectPrev = findReactionObject(
          this.state.reactions,
          workid
        );

        fetchPutReaction({
          ...reactionObjectPrev,
          reaction:
            reactionObjectPrev.reaction === reactionString
              ? ''
              : reactionString,
        }).then(reactionObjectNext => {
          this.setState(({reactions, workidsWaiting}) => ({
            reactions: replaceReactionObject(reactions, reactionObjectNext),
            workidsWaiting: workidsWaiting.filter(
              workidWaiting => workidWaiting !== workid // enable icons in table row
            ),
          }));
        });
      }
    );
  };

  render() {
    const {authorid} = this.props;
    const {authordisplay, reactions, workidsWaiting, works} = this.state;
    return (
      <section>
        <Author authordisplay={authordisplay} authorid={authorid} />
        <Titles
          reactions={reactions}
          workidsWaiting={workidsWaiting}
          works={works}
        />
      </section>
    );
  }
}

export default App;
