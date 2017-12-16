import React from 'react';
import axios from 'axios';

// import components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default class Layout extends React.Component {
  // Constructor Function will hold this.state where app can retrieve state data. Otherwise you'd retreive data from Props if data is passed between components.
  constructor() {
    super();
    this.state = {
      hidebtn: '',
      posts: []
    }
  };

  // Before component mounts, load data from /posts and set it to state.
  componentWillMount() {
    axios.get('/posts').then(res => {
      this.setState({posts: res.data})
    })
  }

  // Handles button to load more content by concatinating more data to this.state.posts from /moreposts endpoint.
  handleMoreContent(e) {
    e.preventDefault();
    axios.get('/moreposts').then(res => {
      this.setState({
        hidebtn: 'hidebtn',
        posts: [...this.state.posts.concat(res.data)]
      })
    })
  }

  render() {
    return (
      <div className="background-main">
        {/* Loads NavBar component */}
        <Navbar/>


          <div className="container container-main">
            {/* Loop through this.state.posts by post. Since React is realtime, whenever state is changed, React will re-render only what is necessary, in our case, more post data */}
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


        {/* Button to add more data */}

        <div className="button-holder">
          <button onClick={this.handleMoreContent.bind(this)} className={"button-load-more " + this.state.hidebtn}>LOAD MORE STORIES</button>
        </div>

        {/* Loads Footer Component */}
        <Footer/>
      </div>
    )

  }
}
