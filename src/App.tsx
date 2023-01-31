import React from 'react';
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import styled from "styled-components";
import NewTask from "./components/NewTask";
import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <div>
            <Screen>
                <Header/>
                <VerticalLine/>
                <Routes>
                    <Route path="/" element={<TaskList/>}/>
                    <Route path="/newtask" element={<NewTask/>}/>
                </Routes>
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


