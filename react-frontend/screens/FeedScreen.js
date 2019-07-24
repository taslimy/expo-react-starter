import React from "react";
import { View, Text, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

let state = {
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
  ]
}

export default class FeedScreen extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <ScrollView>
        {state.campaigns.map(campaign => {
          return <View key={campaign.id} style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{campaign.name}</Text>
            <Text>{campaign.org}</Text>
            <Button
              title="SEE MORE FROM THIS ORG"
              onPress={() =>
                navigation.navigate('ProfileCampaigns', {
                  orgId: campaign.orgId,
                })}
            />
          </View>
        })}
      </ScrollView>
    );
  }
}