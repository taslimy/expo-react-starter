import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import FeedScreen from "./screens/FeedScreen.js";
import ProfileCampaignsScreen from "./screens/ProfileCampaignsScreen.js";
import ProfileDetailsScreen from "./screens/ProfileDetailsScreen.js";
import CreateCampaignScreen from "./screens/CreateCampaignScreen.js";

const ProfileSubstack = createStackNavigator({
  ProfileCampaigns: ProfileCampaignsScreen,
  ProfileDetails: ProfileDetailsScreen
});

const BottomNavBar = createBottomTabNavigator({
  // # createBottomTabNavigator # // - Creates the bottom navigation you see on the app. You can add more nav by creating a new screen and setting it. you can also stack navigators in side of each other
  Feed: FeedScreen,
  CreateCampaign: CreateCampaignScreen,
  ProfileCampaigns: ProfileSubstack
});

export const MainNavigator = createStackNavigator(
  // # createStackNavigator # // - you can get navigations as props they all become global who knows why.
  {
    Feed: FeedScreen,
    ProfileCampaigns: ProfileCampaignsScreen,
    ProfileDetails: ProfileDetailsScreen,
    CreateCampaign: CreateCampaignScreen,
    BottomNavBar: BottomNavBar
  },
  {
    initialRouteName: "BottomNavBar"
  }
);
