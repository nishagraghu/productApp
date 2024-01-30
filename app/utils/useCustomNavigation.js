import { useNavigation } from '@react-navigation/native';


// screenName, params as props
export default useCustomNavigation = (screenName, params) => {
    const navigation = useNavigation();
    console.log('screenName', screenName);
    return () => navigation.navigate(screenName, params);
}