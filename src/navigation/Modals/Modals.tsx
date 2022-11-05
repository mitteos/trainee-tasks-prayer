import React from "react";
import { AddDeskModal } from "src/components/Desk";
import { UserSettingsModal } from "src/components/User";
import {Stack} from "../stack";

export const Modals = () => {
  return (
    <>
      <Stack.Group screenOptions={{presentation: "modal"}}>
        <Stack.Screen
          name="AddModal"
          component={AddDeskModal}
          options={{
            title: "Add Desk"
          }}
        />
        <Stack.Screen
          name="UserSettings"
          component={UserSettingsModal}
          options={{
            title: "Settings",
          }}
        />
      </Stack.Group>
    </>
  );
};
