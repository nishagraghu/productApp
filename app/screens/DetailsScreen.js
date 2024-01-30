import {  View } from 'react-native';
import FullBlog from '../components/FullBlog';

function DetailsScreen({route }) {
   
    const date  = route.params?.item;
    return (
      <View style={{ flex: 1 }}>
       <FullBlog 
       item={date} />
      </View>
    );
  }

  export default DetailsScreen;