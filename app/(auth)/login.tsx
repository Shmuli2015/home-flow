import GradientBackground from "@/components/GradientBackground"
import Input from "@/components/Input";
import { StyleSheet, Text, View, Dimensions } from "react-native"

const { height } = Dimensions.get('window');

const Login = () => {
    return (
        <GradientBackground>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Welcome Back</Text>
                    <Text style={styles.subtitle}>Log in to manage your household expenses.</Text>
                </View>
            </View>
        </GradientBackground>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    textContainer: {
        alignItems: 'center',
        marginTop: height * 0.25,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'light',
        textAlign: 'center',
    },
});