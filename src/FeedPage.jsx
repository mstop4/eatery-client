import React from 'react'
import Feed from './Components/Feed.jsx'

class FeedPage extends React.Component {

  render = () => {
    return(
      <Feed
        album={this.props.album}
      />
    )
  }
}

export default FeedPage