import { List, Box, Card, Button } from "bumbag";
import ListItem from "./ListItem";
import { useSelector, useDispatch } from "react-redux";
import { addNewItem, deleteItem, toggleComplete, reset } from "../reducers/todolistReducer";

export default function ListContainer(props) {
  const list = useSelector((state) => state.todolistReducer);
  const dispatch = useDispatch();
  return (
    <Box>
      {list.length > 0 ? (
        <Box>
          {list.map((item) => {
            return <ListItem key={item.index} index={item.index} title={item.title} />;
          })}
          <Button
            palette="danger"
            onClick={() => {
              dispatch(reset());
            }}
          >
            Reset
          </Button>
        </Box>
      ) : (
        <Card color="white" alignX="center" backgroundColor="primary">
          No more tasks! Yay
        </Card>
      )}
    </Box>
  );
}
