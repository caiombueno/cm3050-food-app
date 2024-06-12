
import { ScrollView, StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { RestaurantCard } from './RestaurantCard';
import { getRestaurantData } from '../hooks/getRestaurantData';


export const HomeScreen = ({ navigation }) => {
    const { restaurantsData, loading, error } = getRestaurantData();

    return (
        <SafeAreaView style={styles.safeAreaView}>
            {
                (loading) ?
                    <LoadingIndicator /> :
                    (error) ?
                        <ErrorView>{error.message}</ErrorView> :
                        // successful state
                        <RestaurantList restaurantsData={restaurantsData} navigation={navigation} />
            }
        </SafeAreaView>
    );
};

const LoadingIndicator = () => <ActivityIndicator style={styles.loadingIndicator} />;

const ErrorView = props => <View style={styles.errorView}>
    <Text>{props.children}</Text>
</View>;


const RestaurantList = (props) => {
    const { restaurantsData, navigation } = props;

    const restaurantCells = restaurantsData.map((restaurant, index) => (
        <RestaurantCell
            key={index}
            title={restaurant.title}
            tagline={restaurant.tagline}
            eta={restaurant.eta}
            imgUri={restaurant.imgUri}
            action={() => navigation.navigate('Menu',
                {
                    items: restaurant.menuItems
                })} />
    ));

    return (
        <ScrollView>
            <TableView>
                <Section hideSeparator={true} separatorTintColor="#ccc">
                    {restaurantCells}
                </Section>
            </TableView>
        </ScrollView>
    );
};

const RestaurantCell = props =>
    <Cell
        {...props}
        contentContainerStyle={styles.restaurantCell}
        highlightUnderlayColor={'#ccc'}
        cellContentView={<RestaurantCard {...props} />}
        onPress={props.action}
    />;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    restaurantCell: {
        height: 290,
        backgroundColor: 'transparent',
    },
});