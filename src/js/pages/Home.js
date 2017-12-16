import React from 'react';

// import components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default class Layout extends React.Component {
  // Set initial state to access data throughout the React App. This is usually filled with an API call inside of a ComponentWillMount() function with ReactJS lifecycle stages.
  constructor() {
    super();
    this.state = {
      hidebtn: '',
      posts: [
        {
          title: 'I am A Post Title, Hear me Roar!',
          contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          image: '../../images/Layer1.png',
          link: '#'
        }, {
          title: 'I Run A Pretty Tight Ship Around Here. With A Pool Table. Its A Gaming Ship.',
          contents: 'the shock to my already overstrained nervous system was terrible in the extreme, and with a superhuman effort I strove to break my awful bonds. It was an effort of the mind, of the will, of the nerves; not muscular, for I could not move even so much as my little finger, but none the less mighty for all that.',
          image: '../../images/Layer2.png',
          link: '#'
        }, {
          title: 'The One Where Michael Leaves.',
          contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          image: '../../images/Layer3.png',
          link: '#'
        }, {
          title: 'Bringing Up Buster',
          contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          image: '../../images/Layer4.png',
          link: '#'
        }, {
          title: 'I am A Post Title hear Me Roar!',
          contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          image: '../../images/Layer5.png',
          link: '#'
        }, {
          title: 'For British Eyes Only',
          contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          image: '../../images/Layer6.png',
          link: '#'
        }
      ]
    }
  };

  // Handles button to load more content by concatinating more data to this.state.posts.
  // This would be the same as retreiving data from an API and pushing it to your state.
  handleMoreContent(e) {
    e.preventDefault();
    // update state
    this.setState({
      hidebtn: 'hidebtn',
      posts: [...this.state.posts.concat([
          {
            title: 'Hey Look Another Post',
            contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            image: '../../images/Layer5.png',
            link: '#'
          }, {
            title: 'Yet Another One',
            contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            image: '../../images/Layer1.png',
            link: '#'
          }, {
            title: 'To Be Or Not To Be',
            contents: 'To be, or not to be: that is the question: Whether tis nobler in the mind to suffer The slings and arrows of outrageous fortune',
            image: '../../images/Layer6.png',
            link: '#'
          }, {
            title: 'ALL CAPS IS ANNOYING',
            contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            image: '../../images/Layer4.png',
            link: '#'
          }, {
            title: 'The winter up here is terrible',
            contents: 'No sunlight, so cold, much polution, very sad.',
            image: '../../images/Layer3.png',
            link: '#'
          }, {
            title: 'Luke, I am your father.',
            contents: 'NOOOO!',
            image: '../../images/Layer2.png',
            link: '#'
          }
        ])]
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
