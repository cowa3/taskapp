import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Home} from '@styled-icons/typicons/Home';
import {PencilSquare} from '@styled-icons/heroicons-solid/PencilSquare';

function App() {
    const [taskList, setTaskList] = useState<Task[]>([]);
    useEffect(() => {
        (async () => {

            console.log("useEffectが呼ばれたよ")
            const response = await fetch("/todos");
            const data = await response.json();
            setTaskList(data);
        })()
    }, []);

    const [checkedTags, setCheckedTags] = useState<number[]>([])
    const handleCheckTag = useCallback(
        (id: number) => {
            if (checkedTags.includes(id)) {
                setCheckedTags(prev => {
                    const index = prev.findIndex(val => val === id)
                    const newArr = [...prev]
                    newArr.splice(index, 1)
                    return newArr
                })
            } else {
                setCheckedTags(prev => {
                    return [...prev, id]
                })
            }
        },
        [checkedTags],
    )

    return (
        <div>
            <Header className="App">
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
            </Header>
            <div>
                <input
                    id={"1"}
                    type="checkbox"
                    name="inputNames"
                    checked={false}
                    // onChange={()=>log("hoge")}
                    // value=false
                />
                <label htmlFor="title">hogehoge</label>
                {taskList.map((task) => (
                    // <input type="checkbox" key="{task.id}" value="title"/>
                    // <label htmlFor="title">{task.title}</label>
                    // <li key={task.id}>{task.title}</li>
                    <div key={task.id}>
                        <input
                            id={task.id.toString()}
                            type="checkbox"
                            name="inputNames"
                            checked={checkedTags.includes(task.id)}
                            onChange={() => handleCheckTag(task.id)}
                        />
                        <label htmlFor="title">{task.title}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default App;

const LinkColor = "#807d7d";
const HeaderMarginVertical = "32px";
const HeaderMarginHorizontal = 0;
const IconWidth = "32px";
const LinkFontSize = "20px";
const MarginIconFontSize = "16px";

const Header = styled.div`
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
  //font-family: system-ui;
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