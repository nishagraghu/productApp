// import { StyleSheet, Text, View ,Appearance ,useColorScheme,TouchableOpacity } from 'react-native';
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// // fetchUserByData
// import { fetchUserByData } from '../redux/counterSlice';

// import { API } from '../Const/urls';
// import { ActivityIndicator, MD2Colors } from 'react-native-paper';
// import BlogCard from '../components/BlogCard';



// export default SingleCategoryScreen = ({
//     route,
//     navigation,
// }) => {
//     const dispatch = useDispatch();
//     React.useEffect(() => {
//          const URL = API + 'categories&id='+route.params.item.id;
//         dispatch(fetchUserByData(URL));
        

//     }, [dispatch,route]);
//     const { posts = [] , loading, error } = useSelector(state => state.counter);
//     console.log(posts);
//     navigation.setOptions({
//         headerTitle: route.params?.item.category_name,
//     });


//     return (
//         <View>
//             {/* {!loading && posts.map((item, index) => (
//                     <BlogCard key={index} item={item} />
//                 ))} */}
//                 <ActivityIndicator animating={loading} color={MD2Colors.red800} />
//                 {(error != null) && <View><Text>{error}</Text></View>}
//         </View>
//     );
// }


import React from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { ScrollView, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import BlogCard from '../components/BlogCard';
import { fetchUserByData } from '../redux/counterSlice';
import { fetchCategories } from '../redux/categorySlice';

// import HorizontalList from '../components/HorizontalList';
import { API } from '../Const/urls';

export default SingleCategoryScreen = ({
    route,
    navigation,
    
}) => {
   
    const dispatch = useDispatch();

    // React.useEffect(() => {
    //     const URL = API + 'categories&id='+route.params.item.id;
    //     const URL2 = API + 'posts';
    //   console.log(URL);
    //     dispatch(fetchUserByData(URL));

      

    // }, [dispatch]);
    const { posts = [], loading, error } = useSelector(state => state.counter);

    return (
        // safe area view
        <SafeAreaView style={styles.page}>

            <ScrollView contentContainerStyle={styles.content}>
              
                {!loading && posts.filter(
                    (item) => item.category_id === route.params.item.id
                )?.map((item, index) => (
                    <BlogCard key={index} item={item} />
                ))}
                <ActivityIndicator animating={loading} color={MD2Colors.red800} />
                {(error != null) && <View><Text>{error}</Text></View>}
            </ScrollView>


            {/* </View> */}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        marginTop: 50,
    },
    container: {
        flex: 1,
    },
    content: {
        backgroundColor: '#fff',
    },
    card: {
        margin: 4,
    },
    chip: {
        margin: 4,
    },
    preference: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 8,
    },
    button: {
        borderRadius: 12,
    },
    customCardRadius: {
        borderTopLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    customCoverRadius: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 24,
    },
});
