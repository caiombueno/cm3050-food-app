import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Image } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { useState, useEffect } from 'react';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// HomeScreen.js

const HomeScreen = ({ navigation }) => {
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

// RestaurantCard.js

const RestaurantCard = props => {
  const title = props.title;
  const tagline = props.tagline;
  const eta = props.eta;
  const imgUri = props.imgUri;

  return (
    <View style={styles.restaurantCard}>
      <RestaurantCardImage imgUri={imgUri} />
      <RestaurantCardContent title={title} tagline={tagline} eta={eta} />
    </View>
  );
}

const RestaurantCardImage = props =>
  <Image
    source={props.imgUri}
    style={styles.restaurantCardImage}
    resizeMode='cover'
  />;


const RestaurantCardContent = props => {
  const title = props.title;
  const tagline = props.tagline;
  const eta = props.eta;

  return (
    <View style={styles.restaurantCardContent}>
      <RestaurantCardEta eta={eta} />
      <TitleText>{title}</TitleText>
      <TaglineText>{tagline}</TaglineText>
    </View>
  );
}

const RestaurantCardEta = props => {
  const eta = props.eta;
  const formattedEta = eta + '\nmins';
  return (
    <View style={styles.etaView}>
      <EtaText>{formattedEta}</EtaText>
    </View>
  );
}

const TitleText = props => <Text style={styles.titleText}>{props.children}</Text>;

const TaglineText = props => <Text style={styles.taglineText}>{props.children}</Text>;

const EtaText = props => <Text style={styles.etaText}>{props.children}</Text>;

// getRestaurantData.js

export const getRestaurantData = () => {
  [restaurantsData, setRestaurantsData] = useState([]);
  [loading, setLoading] = useState(true);
  [error, setError] = useState(null);


  // simulate a network request
  useEffect(() => {
    try {

      setTimeout(() => {

        setRestaurantsData([
          {
            title: "Joe's Gelato",
            tagline: "Desert, Ice cream, £££",
            eta: "10-30",
            imgUri: require('./assets/images/restaurants/restaurant-1.jpg'),
            menuItems: [
              {
                title: "Gelato",
                contents: [
                  { title: "Vanilla" },
                  { title: "Chocolate" },
                  { title: "Mint" }
                ]
              },
              {
                title: "Coffee",
                contents: [
                  { title: "Flat white" },
                  { title: "Latte" },
                  { title: "Caffè Americano" }
                ]
              }
            ],
          },
          {
            title: "Mama's Pizzeria",
            tagline: "Pizza, Italian, ££",
            eta: "15-25",
            imgUri: require('./assets/images/restaurants/restaurant-2.jpg'),
            menuItems: [
              {
                title: "Pizzas",
                contents: [
                  { title: "Margherita" },
                  { title: "Pepperoni" },
                  { title: "Four Cheese" }
                ]
              },
              {
                title: "Pasta",
                contents: [
                  { title: "Spaghetti Carbonara" },
                  { title: "Lasagna" },
                  { title: "Penne Arrabiata" }
                ]
              }
            ]
          },
          {
            title: "Sushi World",
            tagline: "Japanese, Sushi, £££",
            eta: "20-35",
            imgUri: require('./assets/images/restaurants/restaurant-3.jpg'),
            menuItems: [
              {
                title: "Sushi Rolls",
                contents: [
                  { title: "California Roll" },
                  { title: "Spicy Tuna Roll" },
                  { title: "Dragon Roll" }
                ]
              },
              {
                title: "Sashimi",
                contents: [
                  { title: "Salmon Sashimi" },
                  { title: "Tuna Sashimi" },
                  { title: "Yellowtail Sashimi" }
                ]
              }
            ]
          },
          {
            title: "Taco Fiesta",
            tagline: "Mexican, Tacos, £",
            eta: "10-20",
            imgUri: require('./assets/images/restaurants/restaurant-4.jpg'),
            menuItems: [
              {
                title: "Tacos",
                contents: [
                  { title: "Chicken Taco" },
                  { title: "Beef Taco" },
                  { title: "Veggie Taco" }
                ]
              },
              {
                title: "Beverages",
                contents: [
                  { title: "Horchata" },
                  { title: "Margarita" },
                  { title: "Mexican Coke" }
                ]
              }
            ]
          },
          {
            title: "Burger Heaven",
            tagline: "Burgers, American, ££",
            eta: "25-40",
            imgUri: require('./assets/images/restaurants/restaurant-5.jpg'),
            menuItems: [
              {
                title: "Burgers",
                contents: [
                  { title: "Cheeseburger" },
                  { title: "Bacon Burger" },
                  { title: "Veggie Burger" }
                ]
              },
              {
                title: "Sides",
                contents: [
                  { title: "Fries" },
                  { title: "Onion Rings" },
                  { title: "Coleslaw" }
                ]
              }
            ]
          },
          {
            title: "Curry Palace",
            tagline: "Indian, Curry, £££",
            eta: "30-45",
            imgUri: require('./assets/images/restaurants/restaurant-6.jpg'),
            menuItems: [
              {
                title: "Curries",
                contents: [
                  { title: "Chicken Tikka Masala" },
                  { title: "Lamb Vindaloo" },
                  { title: "Paneer Butter Masala" }
                ]
              },
              {
                title: "Breads",
                contents: [
                  { title: "Naan" },
                  { title: "Garlic Naan" },
                  { title: "Roti" }
                ]
              }
            ]
          },
          {
            title: "Green Bowl",
            tagline: "Salads, Healthy, ££",
            eta: "15-20",
            imgUri: require('./assets/images/restaurants/restaurant-7.jpg'),
            menuItems: [
              {
                title: "Salads",
                contents: [
                  { title: "Caesar Salad" },
                  { title: "Greek Salad" },
                  { title: "Cobb Salad" }
                ]
              },
              {
                title: "Smoothies",
                contents: [
                  { title: "Berry Blast" },
                  { title: "Green Detox" },
                  { title: "Mango Tango" }
                ]
              }
            ]
          },
          {
            title: "Noodle House",
            tagline: "Chinese, Noodles, ££",
            eta: "20-30",
            imgUri: require('./assets/images/restaurants/restaurant-8.jpg'),
            menuItems: [
              {
                title: "Noodles",
                contents: [
                  { title: "Chow Mein" },
                  { title: "Lo Mein" },
                  { title: "Singapore Noodles" }
                ]
              },
              {
                title: "Dumplings",
                contents: [
                  { title: "Pork Dumplings" },
                  { title: "Chicken Dumplings" },
                  { title: "Veggie Dumplings" }
                ]
              }
            ]
          },
          {
            title: "Steak Factory",
            tagline: "Steak, American, £££",
            eta: "40-60",
            imgUri: require('./assets/images/restaurants/restaurant-9.jpg'),
            menuItems: [
              {
                title: "Steaks",
                contents: [
                  { title: "Ribeye" },
                  { title: "T-bone" },
                  { title: "Filet Mignon" }
                ]
              },
              {
                title: "Sides",
                contents: [
                  { title: "Mashed Potatoes" },
                  { title: "Grilled Asparagus" },
                  { title: "Baked Potato" }
                ]
              }
            ]
          },
          {
            title: "Vegan Delight",
            tagline: "Vegan, Organic, ££",
            eta: "15-25",
            imgUri: require('./assets/images/restaurants/restaurant-10.jpg'),
            menuItems: [
              {
                title: "Bowls",
                contents: [
                  { title: "Quinoa Bowl" },
                  { title: "Tofu Bowl" },
                  { title: "Chickpea Bowl" }
                ]
              },
              {
                title: "Drinks",
                contents: [
                  { title: "Kombucha" },
                  { title: "Fresh Juice" },
                  { title: "Herbal Tea" }
                ]
              }
            ]
          },

        ]);
        setLoading(false);
      }, 3000);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, []);



  return { restaurantsData, loading, error };
};

// MenuScreen.js

const MenuScreen = ({ route }) => {
  const items = route.params.items;

  const createCells = contents =>
    contents.map((content, index) => (
      <Cell key={index} title={content.title} />
    ));

  const createSections = items =>
    items.map((item, index) => (
      <Section key={index} header={item.title}>
        {createCells(item.contents)}
      </Section>
    ));


  const sections = createSections(items);

  return (
    <ScrollView>
      <TableView>
        {sections}
      </TableView>
    </ScrollView>
  );
};




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
  restaurantCard: {
    flex: 1,
    flexDirection: 'column',
  },
  restaurantCardImage: {
    flex: 2,
    height: '100%',
    width: '100%',
    borderRadius: 8,
  },
  restaurantCardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start'
  },
  etaView: {
    backgroundColor: 'white',
    height: '60%',
    paddingHorizontal: 20,
    borderRadius: '50%',
    position: 'absolute',
    right: '5%',
    bottom: '65%',
    justifyContent: 'center',
  },
  etaText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  titleText: {
    color: 'black',
    marginVertical: '2%',
    fontSize: 22,
    fontWeight: 'bold'
  },
  taglineText: {
    color: 'black',
    fontSize: 12,
    opacity: 0.7,
    marginBottom: '5%'
  },
});