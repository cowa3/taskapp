import React from 'react';
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import styled from "styled-components";

function App() {

    return (
        <div>
            <Screen>
            <Header/>
                <VerticalLine/>
            <TaskList/>
            </Screen>
        </div>
    );
}

export default App;

const Screen = styled.div`
  display: flex;
`
const VerticalLine = styled.div`
  border-left: 0.3px solid gray;
`


