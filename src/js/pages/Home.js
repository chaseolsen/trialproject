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
      id: 1,
      title: 'I am A Post Title, Hear me Roar!',
      contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '../../images/Layer1.png',
      link: '#'
    },
    {
      id: 2,
      title: 'I Run A Pretty Tight Ship Around Here. With A Pool Table. Its A Gaming Ship.',
      contents: 'the shock to my already overstrained nervous system was terrible in the extreme, and with a superhuman effort I strove to break my awful bonds. It was an effort of the mind, of the will, of the nerves; not muscular, for I could not move even so much as my little finger, but none the less mighty for all that.',
      image: '../../images/Layer2.png',
      link: '#'
    },
    {
      id: 3,
      title: 'The One Where Michael Leaves.',
      contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '../../images/Layer3.png',
      link: '#'
    },
    {
      id: 4,
      title: 'Bringing Up Buster',
      contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '../../images/Layer4.png',
      link: '#'
    },
    {
      id: 5,
      title: 'I am A Post Title hear Me Roar!',
      contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '../../images/Layer5.png',
      link: '#'
    },
    {
      id: 6,
      title: 'For British Eyes Only',
      contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '../../images/Layer6.png',
      link: '#'
    }]


  }
};


  render() {
    console.log('yes')
    let content = [];
    this.state.posts.forEach((post, i) => {
      if ((i + 1) % 3 == 0){
        content.push(
          <div className="row" key={post.id}>
            <article key={post.id} className="col-md-4 post-container">
              <img className="post-image" src={post.image} />
              <div className="post-content">
                <h2 className="post-title">{post.title}</h2>
                <h4 className="post-paragraph">{post.contents}</h4>
                <a className="post-link" href={post.link}><h4 className="post-link-text">Read More</h4></a>
              </div>
            </article>
          </div>
        )
      } else {
        content.push(
          <article key={post.id} className="col-md-4 post-container">
            <img className="post-image" src={post.image} />
            <div className="post-content">
              <h2 className="post-title">{post.title}</h2>
              <h4 className="post-paragraph">{post.contents}</h4>
              <a className="post-link" href={post.link}><h4 className="post-link-text">Read More</h4></a>
            </div>
          </article>
        );
      }
    });
    console.log(content);
    return (
      <div>
        <div className="background-main">
        <Navbar />
          <div className="container container-top">
            {content}
          </div>
        <Footer />
        </div>
      </div>
    );


  }
}
