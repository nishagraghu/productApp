import {  View , Text} from 'react-native';


function DetailsScreen({route, navigation }) {
   
    const date  = route.params?.item;
    return (
      <View style={{ flex: 1 }}>
       <Text  
       testID='detailsScreenText'
       >Details Screen</Text>
      </View>
    );
  }

  export default DetailsScreen;