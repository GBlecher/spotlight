import { useAuth } from "@clerk/clerk-expo";
import {styles} from "../../styles/auth.styles";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {

    const {signOut} = useAuth();
  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity onPress={() => signOut()}>
        <Text style={{color: "white"}}>sign out</Text>
      </TouchableOpacity>
    </View>
  );
}
