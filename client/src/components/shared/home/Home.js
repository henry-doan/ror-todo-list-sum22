import HomeTitle from './HomeTitle';
import Features from './Features';
import Prices from './Prices';

// import the styled components that we are using
import { MainTitle, MainImage, myTitle } from '../../styles/shared';

// import an image you can call it whatever you want 
// from where it is located and the name and file ext
import ListImg from '../../styles/images/kelly-sikkema--1_RZL8BGBM-unsplash.jpg';

// different ways of styling 
// css, not recommend


// inline stying in jsx, not recommend
// styling as a module 
  // camelcase 

// Most used and recommend 
// styled components - custom styling
// styled libraries - package to style 
const Home = () => (
  <>
    {/* inline styles */}
    <h1 style={{ color: 'green', fontSize: '48px' }}>Hello World</h1>

    {/* styling as a module to pull in the hash of styles */}
    <h1 style={style.title}>Hello World</h1>
    <h1 style={style.subTitle}>Hello World</h1>
    {/* <h1 className='myTitle'>Hello World</h1> */}
    <myTitle>Hello World</myTitle>

    {/* using the styled component as a html element */}
    <MainTitle>Hello Mars</MainTitle>

    <MainImage src='https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80' />
    {/* from local machine  */}
    <MainImage src={ListImg} />

    {/* <video src></video> */}
    {/* <audio src></audio> */}
    
    <HomeTitle />
    <Features />
    <Prices />
  </> 
)

// styling as a module
const style = {
  title: { 
    color: 'blue',
    fontSize: '32px',
    background: 'gold',
  },
  subTitle: {
    color: 'red',
    fontSize: '16px',
  }
}

export default Home;