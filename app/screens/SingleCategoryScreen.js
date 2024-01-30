import React from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { ScrollView, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import BlogCard from '../components/BlogCard';

export default SingleCategoryScreen = ({route}) => {
    const { posts   } = useSelector(state => state.counter);
    return (
        <SafeAreaView style={styles.page}>
            <ScrollView contentContainerStyle={styles.content}>
                {  posts.filter(
                    (item) => item.category_id === route.params.item.id
                )?.map((item, index) => (
                    <BlogCard 
                  
                    key={index} item={item} />
                ))} 

                
            </ScrollView>
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
