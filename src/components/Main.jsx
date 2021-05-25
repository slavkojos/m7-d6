import { Button, Container, Flex, Card, Input, InputField, Group, Heading, Box } from "bumbag";
import ListContainer from "./ListContainer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewItem, deleteItem, toggleComplete, reset } from "../reducers/todolistReducer";

export default function Main() {
  const list = useSelector((state) => state.todolist);
  const dispatch = useDispatch();
  const [taskInput, setTaskInput] = useState("");
  return (
    <Card width="50%" color="white" backgroundColor="primary">
      <Box alignX="center" alignY="center" marginY="major-2">
        <Heading use="h4">TODO List</Heading>
      </Box>
      <Group marginY="major-3">
        <Input
          width="100%"
          placeholder="Add new task..."
          onChange={(e) => {
            setTaskInput(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            dispatch(addNewItem(taskInput));
            setTaskInput("");
          }}
          palette="warning"
        >
          Add
        </Button>
      </Group>
      <ListContainer list={list} />
    </Card>
  );
}
