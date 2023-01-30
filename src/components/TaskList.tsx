import React, {useCallback, useEffect, useState} from 'react';
import styled from "styled-components";

type Task = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

function TaskList() {

    const [taskList, setTaskList] = useState<Task[]>([]);
    const [checkedTags, setCheckedTags] = useState<number[]>([])

    useEffect(() => {
        (async () => {
            const response = await fetch("/todos");
            const data = await response.json();
            setTaskList(data);
        })()
    }, []);

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
        <Body>
            <TaskCom>
                {taskList.map((task) => (
                    <Chk key={task.id}>
                        <ChkBox
                            id={task.id.toString()}
                            type="checkbox"
                            name="inputNames"
                            checked={checkedTags.includes(task.id)}
                            onChange={() => handleCheckTag(task.id)}
                        />
                        <Title htmlFor="title">{task.title}</Title>
                    </Chk>
                ))}
            </TaskCom>
        </Body>
    )
}

export default TaskList;

const TaskMarginVertical = "32px";
const TaskMarginHorizontal = 0;

const TaskCom = styled.div`
  margin: ${TaskMarginVertical};
  width: 80%;
`
const Chk = styled.p`
  margin: ${TaskMarginVertical} ${TaskMarginHorizontal};
  cursor: pointer;
  font-size: 32px;
  user-select: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  height: 60px;
  display: flex;
`
const ChkBox = styled.input`
  margin-left: 20px;
  transform: scale(2);
`
const Title = styled.label`
  padding-left: 20px;
  margin: 0px 12px;
  font-weight: bold;
  font-size: 28px;
  display: flex;
  align-items: center;
`
const Body = styled.div`
  display: flex;
`