import React from 'react';
import styled from "styled-components";
import {Home} from "@styled-icons/typicons/Home";
import {PencilSquare} from "@styled-icons/heroicons-solid/PencilSquare";

function Header() {
    return (
        <div>
            <AppName className="App">
                <h1 className="Title">
                    Todo App
                </h1>
                <HeaderComponent>
                    <Link
                        className="Home"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <StyledHome/>
                        <MarginIcon>Home</MarginIcon>
                    </Link>
                </HeaderComponent>
                <HeaderComponent>
                    <Link
                        className="NewTask"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <StyledPencilSquare/>
                        <MarginIcon>New Task</MarginIcon>
                    </Link>
                </HeaderComponent>
                <Header/>
            </AppName>
            <VerticalLine/>
        </div>
    )
}

export default Header;

const LinkColor = "#807d7d";
const HeaderMarginVertical = "32px";
const HeaderMarginHorizontal = 0;
const IconWidth = "32px";
const LinkFontSize = "20px";
const MarginIconFontSize = "16px";

const AppName = styled.div`
  margin: ${HeaderMarginVertical};
`
const HeaderComponent = styled.div`
  margin: ${HeaderMarginVertical} ${HeaderMarginHorizontal};
`
const Link = styled.a`
  text-decoration: none;
  color: ${LinkColor};
  font-weight: bold;
  font-size: ${LinkFontSize};
  display: inline-flex;
  align-items: center;
`
const StyledHome = styled(Home)`
  color: ${LinkColor};
  width: ${IconWidth};
`
const StyledPencilSquare = styled(PencilSquare)`
  color: ${LinkColor};
  width: ${IconWidth};
`
const MarginIcon = styled.div`
  margin-left: ${MarginIconFontSize};
`
const VerticalLine = styled.div`
  border-left: 0.3px solid gray;
`