import { Card, Stack, Text, Button } from "bumbag";
import { addNewItem, deleteItem, toggleComplete, reset } from "../reducers/todolistReducer";
import { useDispatch, useSelector } from "react-redux";
export default function ListItem(props) {
  const dispatch = useDispatch();
  return (
    <Card backgroundColor="warning" marginY="major-1" color="black" variant="shadowed">
      <Stack orientation="horizontal" spacing="mayor-5">
        <Text.Block>{props.title}</Text.Block>
        <Button
          palette="danger"
          variant="outlined"
          width="10px"
          onClick={() => {
            dispatch(deleteItem(props.index));
          }}
        >
          Delete
        </Button>
      </Stack>
    </Card>
  );
}
