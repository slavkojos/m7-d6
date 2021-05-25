import { List, Box } from "bumbag";
import ListItem from "./ListItem";

export default function ListContainer(props) {
  return (
    <Box>
      {props.list.map()}
      <ListItem />
    </Box>
  );
}
