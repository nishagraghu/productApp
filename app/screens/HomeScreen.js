import { Text, View, Appearance, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import BlogCard from '../components/BlogCard';
import { useSelector, useDispatch } from 'react-redux';
import {fetchUserByData} from '../../counterSlice';

// HorizontalList
import HorizontalList from '../components/HorizontalList';
// import FetchAll from '../utils/FetchAll';
import { API} from '../Const/urls';

export default HomeScreen = () => {
    // const toggleTheme = () => {
    //   Appearance.setColorScheme(Appearance.getColorScheme() === 'dark' ? 'light' : 'dark');
    // };
    const data = [
        {
            id: 1,
            title: 'ss',
            image: 'https://picsum.photos/700',
        },
        {
            id: 2,
            title: 'ss',
            image: 'https://picsum.photos/700',

        }, {
            id: 3,
            title: 'ss',
            image: 'https://picsum.photos/700',

        },
        {
            id: 4,
            title: 'ss',
            image: 'https://picsum.photos/700',
        }
    ];
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchUserByData(API + 'posts'));
        
    }, [dispatch]);
    const { posts, loading, error } = useSelector(state => state.counter);
 
    return (
        // safe area view
        <SafeAreaView style={styles.page}>
                <ScrollView contentContainerStyle={styles.content}>

            {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
                <HorizontalList style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }} data={data} />

                {loading &&posts.map((item, index) => (
                    <BlogCard key={index}  item={item} />
                ))}
                
                   
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
