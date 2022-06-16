import styled from 'styled-components';

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