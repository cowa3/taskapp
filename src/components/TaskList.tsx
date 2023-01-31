import React, {useCallback, useEffect, useState} from 'react';
import styled from "styled-components";
import Task from "./Task";

export type TaskType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

function TaskList() {

    const [taskList, setTaskList] = useState<TaskType[]>([]);
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
                    <Task key={task.id} id={task.id} title={task.title} completed={task.completed}/>
                ))}
            </TaskCom>
        </Body>
    )
}

export default TaskList;

const TaskMarginVertical = "32px";

const TaskCom = styled.div`
  margin: ${TaskMarginVertical};
  width: 80%;
`
const Body = styled.div`
  display: flex;
  width: 100%;
`