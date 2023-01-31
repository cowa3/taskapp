import React, {useCallback, useState} from 'react';
import styled from "styled-components";

type Props = {
    id: number;
    title: string;
    completed: boolean;
}

function Task(prop: Props) {

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
        <Chk key={prop.id}>
            <ChkBox
                id={prop.id.toString()}
                type="checkbox"
                name="inputNames"
                checked={checkedTags.includes(prop.id)}
                onChange={() => handleCheckTag(prop.id)}
            />
            <Title htmlFor="title">{prop.title}</Title>
        </Chk>
    )
}

export default Task

const TaskMarginVertical = "32px";
const TaskMarginHorizontal = 0;

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