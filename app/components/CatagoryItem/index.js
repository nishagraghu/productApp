import * as React from 'react';
import {
    Avatar, Button, Card, Text, Chip,
} from 'react-native-paper';
import { ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    Card: {
        backgroundColor: '#e9edf5',
         marginHorizontal: 5,
        width: 130,


        // paddingRight: -10,
    },
    image: {
        padding: 20,
    },
    group: {
        // marginLeft: 10,
        paddingLeft: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        width: 100,

        backgroundColor: '#f5cea6',
        color: '#ed7b09',
    },
    off: {

        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        width: 150,

        backgroundColor: '#f5cea6',
        color: '#ed7b09',
    },

});

function CatagoryItem() {
    return (
        <Card style={styles.Card}>
            <Card.Content>

                <Text variant="bodySmall">Card title</Text>

            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.image} />

        </Card>
    );
}

export default CatagoryItem;
