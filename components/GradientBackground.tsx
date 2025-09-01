import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientBackground = ({ children }: { children: React.ReactNode }) => {
    return (
        <LinearGradient
            colors={['#1E3A8A', '#60A5FA']}
            style={styles.container}
        >
            {children}
        </LinearGradient>
    )
}

export default GradientBackground;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});