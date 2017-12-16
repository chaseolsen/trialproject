import React from 'react';

// import components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';




export default class Layout extends React.Component {
  // Set initial state to access data throughout the React App. This is usuall set in a ComponentWillMount function that sets the state, see example below.
  constructor(){
  super();
  this.state = {
    posts:
    [{
      title: 'I am A Post Title, Hear me Roar!',
      contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '../../images/Layer1.png',
      link: '#'
    },
    {
      title: 'I Run A Pretty Tight Ship Around Here. With A Pool Table. Its A Gaming Ship.',
      contents: 'the shock to my already overstrained nervous system was terrible in the extreme, and with a superhuman effort I strove to break my awful bonds. It was an effort of the mind, of the will, of the nerves; not muscular, for I could not move even so much as my little finger, but none the less mighty for all that.',
      image: '../../images/Layer2.png',
      link: '#'
    },
    {
      title: 'The One Where Michael Leaves.',
      contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '../../images/Layer3.png',
      link: '#'
    },
    {
      title: 'Bringing Up Buster',
      contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '../../images/Layer4.png',
      link: '#'
    },
    {
      title: 'I am A Post Title hear Me Roar!',
      contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '../../images/Layer5.png',
      link: '#'
    },
    {
      title: 'For British Eyes Only',
      contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '../../images/Layer6.png',
      link: '#'
    }]


  }
};

handlemorecontent(e){
  this.setState ({
    posts: [...this.state.posts.concat([{
      title: 'Hey Look Another Post',
      contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '../../images/Layer5.png',
      link: '#'
    },
    {
      title: 'Yet Another One',
      contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '../../images/Layer1.png',
      link: '#'
    },
    {
      title: 'To Be Or Not To Be',
      contents: 'To be, or not to be: that is the question: Whether tis nobler in the mind to suffer The slings and arrows of outrageous fortune',
      image: '../../images/Layer6.png',
      link: '#'
    }
  ])]
  })
}


  render() {
    return (
  <div className="background-main">
    <Navbar />

      <div className="container container-top">
        <div className="row">
        {this.state.posts.map(function(post) {


          return (

            <div key={post.title}>

              <div className="col-md-4 post-container">
                <img className="post-image" src={post.image} />
                <div className="post-content">
                  <h2 className="post-title">{post.title}</h2>
                  <h4 className="post-paragraph">{post.contents}</h4>
                  <a className="post-link" href={post.link}><h4 className="post-link-text">Read More</h4></a>
                </div>
              </div>

            </div>

          );
        })}
        </div>
      </div>

      <div onClick={this.handlemorecontent.bind(this)} className="load-more-btn"><h4>LOAD MORE STORIES</h4></div>

    <Footer />
  </div>
)

  }
}
