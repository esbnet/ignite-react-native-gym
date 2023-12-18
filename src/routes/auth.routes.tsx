import Home from "@/screens/Home";
import SignIn from "@/screens/SignIn";
import SignUp from "@/screens/SignUp";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

type AuthRoutesProps = {
  signIn: undefined;
  signUp: undefined;
  home: undefined;
};

export type AuthNavigatorRoutesProps =
  NativeStackNavigationProp<AuthRoutesProps>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesProps>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
      <Screen name="home" component={Home} />
    </Navigator>
  );
}
