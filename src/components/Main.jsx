import { Button, Container, Flex, Card, Input, InputField, Group, Heading, Box } from "bumbag";
import ListContainer from "./ListContainer";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewItem, deleteItem, toggleComplete, reset } from "../reducers/todolistReducer";
import { v4 as uuid } from "uuid";

export default function Main() {
  const dispatch = useDispatch();
  const taskInputRef = useRef();
  const [taskInput, setTaskInput] = useState("");
  const [buttonState, setButtonState] = useState(true);
  return (
    <Card width="50%" color="white" backgroundColor="primary">
      <Box alignX="center" alignY="center" marginY="major-2">
        <Heading use="h4">TODO List</Heading>
      </Box>
      <Group marginY="major-3">
        <Input
          width="100%"
          placeholder="Add new task..."
          ref={taskInputRef}
          onChange={(e) => {
            console.log(buttonState);
            setTaskInput(e.target.value);
            if (taskInputRef.current.value.length > 0) {
              setButtonState(false);
            } else {
              setButtonState(true);
            }
          }}
        />
        <Button
          disabled={buttonState}
          onClick={() => {
            dispatch(addNewItem({ index: uuid(), title: taskInput }));
            taskInputRef.current.value = "";
            setTaskInput("");
            setButtonState(true);
          }}
          palette="warning"
        >
          Add
        </Button>
      </Group>
      <ListContainer />
    </Card>
  );
}
