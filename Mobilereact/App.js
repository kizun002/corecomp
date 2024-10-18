import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyActivityIndicator from './MyActivityIndicator';
import MyButton from './MyButton';
import MyFlatList from './MyFlatList';
import MyImage from './MyImage';
import MyImageBackground from './MyImageBackground';
import MyKeyboardAvoidingView from './MyKeyaboardAvoidingView';
import MyModal from './MyModal';
import MyPressable from './MyPressable';
import MyRefreshControl from './MyRefreshControl';
import MyScrollView from './MyScroolView';
import MySectionList from './MySectionList';
import MyStatusBar from './MyStatusBar';
import MySwitch from './MySwitch';
import MyText from './MyText';
import MyTextInput from './MyTextInput';
import MyTouchableHighlight from './MyTouchableHighlight';
import MyTouchableOpacity from './MyTouchableOpacity';
import MyTouchableWithoutFeedback from './MyTouchableWithoutFeedback';
import MyView from './MyView';
import MyVirtualizedList from './MyVirtualizedList';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MyActivityIndicator/> */}
      {/* <MyButton/> */}
      {/* <MyFlatList/> */}
      {/* <MyImage/> */}
      {/* <MyImageBackground/> */}
      {/* <MyKeyboardAvoidingView/> */}
      {/* <MyModal/> */}
      {/* <MyPressable/> */}
      {/* <MyPressable/> */}
      {/* <MyRefreshControl/> */}
      {/* <MyScrollView/> */}
      {/* <MySectionList/> */}
      {/* <MyStatusBar/> */}
      {/* <MySwitch/> */}
      {/* <MyText/> */}
      {/* <MyTextInput/> */}
      {/* <MyTouchableHighlight/> */}
      {/* <MyTouchableOpacity/> */}
      {/* <MyTouchableWithoutFeedback/> */}
      {/* <MyView/> */}
      <MyVirtualizedList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
