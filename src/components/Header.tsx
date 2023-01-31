import React from 'react';
import styled from "styled-components";
import {Home} from "@styled-icons/typicons/Home";
import {PencilSquare} from "@styled-icons/heroicons-solid/PencilSquare";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            <AppName className="App">
                <h1 className="Title">
                    Todo App
                </h1>
                <HeaderComponent>
                    <StyledLink
                        className="Home"
                        to="/"
                    >
                        <StyledHome/>
                        <MarginIcon>Home</MarginIcon>
                    </StyledLink>
                </HeaderComponent>
                <HeaderComponent>
                    <StyledLink
                        className="NewTask"
                        to="/newtask"
                    >
                        <StyledPencilSquare/>
                        <MarginIcon>New Task</MarginIcon>
                    </StyledLink>
                </HeaderComponent>
                </AppName>
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
  width: 100%;
`
const HeaderComponent = styled.div`
  margin: ${HeaderMarginVertical} ${HeaderMarginHorizontal};
`
const StyledLink = styled(Link)`
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
