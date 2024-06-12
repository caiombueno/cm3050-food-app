
import { StyleSheet, Text, View, Image } from 'react-native';

export const RestaurantCard = props => {
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

const styles = StyleSheet.create({
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