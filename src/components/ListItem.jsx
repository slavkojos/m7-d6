import { Card, Stack, Text, Button } from "bumbag";
export default function ListItem(props) {
  return (
    <Card backgroundColor="warning" marginY="major-1" color="black" variant="shadowed">
      <Stack orientation="horizontal" spacing="mayor-5">
        <Text.Block>Hello world! bit of text</Text.Block>
        <Button palette="danger" variant="outlined" width="10px">
          Delete
        </Button>
      </Stack>
    </Card>
  );
}
