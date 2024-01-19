import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import JoinRide from "./screens/joinRide"
import HostRide from "./screens/hostRide";
import AvailableRides from "./screens/availableRides";
import ProfileCreation from "./screens/profile-creation";
import Remove from "./screens/remove";
import InterestedRider from "./screens/interestedRider";
import DetailInput from "./screens/details";
import Accept from "./screens/accept";
import Dashboard from "./screens/profile-page";


const screens  = {
    joinride :{
        screen: JoinRide
    },
    hostride :{
        screen: HostRide
    },
    availablerides:{
        screen: AvailableRides
    },
    profilecreation:{
        screen: ProfileCreation
    },
    requestride:{
        screen: Request

    },
    remove: {
        screen: Remove
    },
    interestedrider:{
        screen: InterestedRider    
    },
    details:{
        screen: DetailInput
    },
    accept:{
        screen: Accept
    },
    profilepage:{
        screen: Dashboard
    },

};

const Stack = createStackNavigator(screens);
export default createAppContainer(Stack);