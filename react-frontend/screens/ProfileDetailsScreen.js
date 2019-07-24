import React from "react";
import { View, Text, Button } from "react-native";

let state = {
  currentUserId: 2, 
  campaigns: [
    {
      "id": 1,
      "name": "Feed the Bears",
      "org": "The Bear Feeders",
      "orgId": 1
    },
    {
      "id": 2,
      "name": "Save this One Penguin",
      "org": "Society for the Preservation of Penguins",
      "orgId": 2
    },
    {
      "id": 3,
      "name": "Help Me Plant a Tree",
      "org": "Inept Gardening Guy",
      "orgId": 3
    }
  ],
  orgs: [
    {
      "id": 1,
      "name": "The Bear Feeders",
      "about": "We are an organization devoted to feeding bears things. Things like berries... lunch meats... bear chow... definitely not humans. (But sometimes humans.)",
      "more": "Also one of us is a bear in a suit."
    },
    {
      "id": 2,
      "name": "Society for the Preservation of Penguins",
      "about": "As our name suggests, we are a group of enthusiasts that spends its time looking at pictures of penguins on the internet.",
      "more": "Penguins are cute. There's a video where one falls down."
    },
    {
      "id": 3,
      "name": "Inept Gardening Guy",
      "about": "I'm trying my best.",
      "more": "Probably should have made some more impressive seed data."
    }
  ]
}

export default class ProfileDetailsScreen extends React.Component {
  static navigationOptions = {
    title: `Profile - Details`,
  };

  render() {
    const id = this.props.navigation.getParam('orgId', state.currentUserId);
    const org = state.orgs.filter(el => el.id === id)[0];
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Our name: {org.name}</Text>
        <Text>About us: {org.about}</Text>
        <Text>More details: {org.more}</Text>
        <View style={{ flexDirection: "row" }}>
          <Button
            title="Campaigns"
            onPress={() =>
              this.props.navigation.navigate('ProfileCampaigns', {
                orgId: org.id,
              })}
          />
          <Button
            title="Details"
          />
        </View>
      </View>
    );
  }
}