import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getPostsBySubreddit } from '../services/redditAPI';

const Context = createContext();
const { Provider, Consumer } = Context;

function RedditProvider(props) {
  const [postsBySubreddit, setPostsBySubreddit] = useState({
    frontend: {},
    reactjs: {},
  });
  const [selectedSubreddit, setSelectedSubreddit] = useState('reactjs');
  const [shouldRefreshSubreddit, setShouldRefreshSubreddit] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, [selectedSubreddit, shouldRefreshSubreddit]);

  const fetchPosts = () => {
    if (!shouldFetchPosts()) return;

    setShouldRefreshSubreddit(false);
    setIsFetching(true);

    getPostsBySubreddit(selectedSubreddit)
      .then(handleFetchSuccess, handleFetchError);
  };

  const shouldFetchPosts = () => {
    const posts = postsBySubreddit[selectedSubreddit];

    if (!posts.items) return true;
    if (isFetching) return false;
  
    return shouldRefreshSubreddit;
  };

  const handleFetchSuccess = (json) => {
    const lastUpdated = Date.now();
    const items = json.data.children.map((child) => child.data);

    setPostsBySubreddit({
      ...postsBySubreddit,
      [selectedSubreddit]: { items, lastUpdated },
    });
    setShouldRefreshSubreddit(false);
    setIsFetching(false);
  };

  const handleFetchError = (error) => {
    setPostsBySubreddit({
      ...postsBySubreddit,
      [selectedSubreddit]: {
        error: error.message,
        items: [],
      },
    });
    setShouldRefreshSubreddit(false);
    setIsFetching(false);
  };

  const handleSubredditChange = (selectedSubreddit) => {
    setSelectedSubreddit(selectedSubreddit);
  };

  const handleRefreshSubreddit = () => {
    setShouldRefreshSubreddit(true);
  };

  const { children } = props;
  const context = {
    postsBySubreddit,
    selectedSubreddit,
    shouldRefreshSubreddit,
    isFetching,
    selectSubreddit: handleSubredditChange,
    fetchPosts,
    refreshSubreddit: handleRefreshSubreddit,
    availableSubreddits: Object.keys(postsBySubreddit),
    posts: postsBySubreddit[selectedSubreddit].items,
  };

  return (
    <Provider value={context}>
      {children}
    </Provider>
  );
}

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { RedditProvider as Provider, Consumer, Context };
