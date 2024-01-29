import { useNavigation } from '@react-navigation/native';

export default navigateToOtherScreen = (screenName, params) => {
    const navigation = useNavigation();
    navigation.navigate(screenName, params);
}