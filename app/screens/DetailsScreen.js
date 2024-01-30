import {  View } from 'react-native';

function DetailsScreen({route, navigation }) {
   
    const date  = route.params?.item;
    return (
      <View style={{ flex: 1 }}>
       <FullBlog item={date} />
      </View>
    );
  }

  export default DetailsScreen;