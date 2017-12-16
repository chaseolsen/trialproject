import React from 'react';
import axios from 'axios';

// import components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default class Layout extends React.Component {
  // Set initial state to access data throughout the React App. This is usually filled with an API call inside of a ComponentWillMount() function with ReactJS lifecycle stages.
  constructor() {
    super();
    this.state = {
      hidebtn: '',
      posts: []
    }
  };

  // Before component mounts, load data from /posts and set it to state.
  componentWillMount(){
    axios.get('/posts').then(res => {
      this.setState({ posts : res.data })
    })
  }

  // Handles button to load more content by concatinating more data to this.state.posts from /moreposts.
  handleMoreContent(e) {
    e.preventDefault();
    axios.get('/moreposts').then(res => {
      this.setState({
        hidebtn : 'hidebtn',
        posts: [...this.state.posts.concat(res.data)]
      })
    })
  }


  render() {
    return (
      <div className="background-main">
        <Navbar/>
        <div className="container">

          <div className="container-main">
            {/* Loop through this.state.posts by post */}
            {this.state.posts.map(function(post) {
              return (
                <div key={post.title} className="post-container">
                  <img className="post-image" src={post.image}/>
                  <div className="post-content">
                    <h2 className="post-title">{post.title}</h2>
                    <h4 className="post-paragraph">{post.contents}</h4>
                    <a className="post-link" href={post.link}>
                      <h4 className="post-link-text">Read More</h4>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Button to add more data */}
        <div onClick={this.handleMoreContent.bind(this)} className={"load-more-btn " + this.state.hidebtn}>
          <h4>LOAD MORE STORIES</h4>
        </div>


        <Footer/>
      </div>
    )

  }
}
