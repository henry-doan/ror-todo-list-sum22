import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
// create components with styled, html element or other elements
// define the styled for that element 

// where the h1 is is where the html element you want to style
// inside of the back ticks `` you are writing css
export const MainTitle = styled.h1`
  color: purple;
  font-size: 12px;
  background: red;
` 

export const MainImage = styled.img`
  width: 300px;
  border-radius: 5px;
  border: 2px solid green;
`

export const MainHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  background: grey;
`

export const MainText = styled.h1`
  font-size: 42px;
  font-weight: 200;
  padding: 400;
  text-align: center;
`

export const MainNavLink = styled(Link)`
  color: gray;

`

export const ProfileImage = styled(Image)`
  width: 400px;

  @media (max-width: 1000px) {
    width: 200px;
  }
`

export const myTitle = styled.h1`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`