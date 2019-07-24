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
      "about": "We are an organization devoted to feeding bears things. Things like berries... lunch meats... bear chow... definitely not humans. (But sometimes humans.)"
    },
    {
      "id": 2,
      "name": "Society for the Preservation of Penguins",
      "about": "As our name suggests, we are a group of enthusiasts that spends its time looking at pictures of penguins on the internet."
    },
    {
      "id": 3,
      "name": "Inept Gardening Guy",
      "about": "I'm trying my best."
    }
  ]
}

export default class ProfileCampaignsScreen extends React.Component {
  static navigationOptions = {
    title: `Profile - Campaigns`,
  };

  render() {
    const id = this.props.navigation.getParam('orgId', state.currentUserId);
    const org = state.orgs.filter(el => el.id === id)[0];
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Our name: {org.name}</Text>
        <Text>About us: {org.about}</Text>
        <View style={{ flexDirection: "row" }}>
          <Button
            title="Campaigns"
          />
          <Button
            title="Details"
            onPress={() =>
              this.props.navigation.navigate('ProfileDetails', {
                orgId: org.id,
              })}
          />
        </View>
        {state.campaigns.filter(el => el.orgId === id).map(campaign => {
          return <Text key={campaign.id}>{campaign.name}</Text>
        })}
      </View>
    );
  }
}