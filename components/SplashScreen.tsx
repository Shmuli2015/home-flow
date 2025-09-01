import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import GradientBackground from './GradientBackground';

const SplashScreen = () => {
    return (
        <GradientBackground>
            <View style={styles.container}>
                <Text style={styles.title}>HomeFlow</Text>
                <Text style={styles.subtitle}>Manage Your Finances with Ease</Text>
                <ActivityIndicator size="large" color="#fff" style={styles.indicator} />
            </View>
        </GradientBackground>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        color: '#fff',
    },
    indicator: {
        marginTop: 20,
    },
});
