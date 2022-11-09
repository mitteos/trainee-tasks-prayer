import { AuthorizeScreen } from "../../screens/AuthorizeScreen";
import { Stack } from "../stack";

export const PublicStack = () => {
  return (
    <>
      <Stack.Group>
        <Stack.Screen
          name="Authorize"
          component={AuthorizeScreen}
        />
      </Stack.Group>
    </>
  );
};
