import { StyleSheet, Text, View, Image ,Linking  } from 'react-native';
import React from 'react';
import { List, MD3Colors } from 'react-native-paper';



export default SettingsScreen = () => {
    const handleEmailClick = () => {
        const email = 'nishag619@gmail.com';
        const subject = 'Subject of the email'; 
        const body = 'Body of the email'; 
    
        const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    
        // Open the email link
        Linking.openURL(mailtoLink);
      };
      const handlePhoneCall = () => {
        const phoneNumber = 'tel:8867460746';
        Linking.openURL(phoneNumber);
      };
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >

            <Image source={require('../../assets/icon.png')} style={styles.image} />
            <View>
                <Text style={styles.blog}  >Google is a multinational technology company specializing in internet-related services and products. It's a leading search engine, offers online advertising, cloud computing, software, and hardware.</Text>
                <List.Section style={styles.Listblog}>
                    <List.Subheader>
                        Contact us
                    </List.Subheader>
                    <List.Item 
                    testID='emailListItem'
                    title="nishag619@gmail.com" left={() => <List.Icon icon="email" />}         onPress={handleEmailClick}  />
                    <List.Item
                        title="8867460746"
                        testID='phoneListItem'
                        left={() => <List.Icon color={MD3Colors.tertiary70} icon="phone" />}
                        onPress={handlePhoneCall}
                    />
                    {/* show 3 icons in  one line */}
                    <View style={styles.iconContainer}>
                        <List.Icon  icon="facebook" />
                        <List.Icon icon="twitter" />
                        <List.Icon icon="instagram" />
           
                   </View>

                </List.Section>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        marginBottom: 12,
    },
    blog: {
        fontSize: 18,
        textAlign: 'justify',
        marginHorizontal: 24,
    },
    Listblog: {
        marginHorizontal: 24,
    },
    iconContainer: {
        flexDirection: 'row', // Align items horizontally
        justifyContent: 'space-around', // Space evenly
        marginTop: 20,
      },
});
