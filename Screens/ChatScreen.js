import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Modal,
} from "react-native";
import TopBar from "../Components/Topbar";
import { useContext } from "react";
import { GlobalContext } from "../Utils/Context/context";
import ChatComponent from "../Components/ChatComponent";
import ModalMenu from "../Components/ModalMenu";

function ChatScreen(props) {
  const { name, modalVisible, setModalVisible, allchatrooms, setAllChatrooms } =
    useContext(GlobalContext);

  return (
    <>
      <TopBar navigation={props.navigation} />
      <View style={styles.listcontainer}>
        {allchatrooms && allchatrooms.length > 0 ? (
          <FlatList
            data={allchatrooms}
            renderItem={({ item }) => <ChatComponent item={item} />}
            keyExtractor={(item) => item.id}
          />
        ) : null}
      </View>
      <View style={styles.bottomContainer}>
        <Pressable
          onPress={() => {
            setModalVisible(true);
          }}
          style={styles.createGroupButton}
        >
          <View>
            <Text style={styles.text}>Create New Group</Text>
          </View>
        </Pressable>
      </View>{" "}
      {modalVisible && <ModalMenu />}
    </>
  );
}
export default ChatScreen;
const styles = StyleSheet.create({
  listcontainer: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    margin: 5,
    height: "75%",
  },
  text: {
    fontSize: 20,
    color: "#333",
    textAlign: "center",
  },
  bottomContainer: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    margin: 5,
  },
  createGroupButton: {
    backgroundColor: "#FF9149",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
