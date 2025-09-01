import Button from "@/components/Button";
import GradientBackground from "@/components/GradientBackground";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { height } = Dimensions.get('window');

const Welcome = () => {
    return (
        <GradientBackground>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>Welcome to HomeFlow</Text>
                    <Text style={styles.subtitle}>Your personal finance companion.</Text>
                </View>
                <View style={styles.buttons}>
                    <Button title="Login" onPress={() => { }} buttonStyle={styles.loginButton} textStyle={styles.loginButtonText} />
                    <Button title="Sign Up" onPress={() => { }} buttonStyle={styles.signUpButton} textStyle={styles.signUpButtonText} />
                </View>
            </View>
        </GradientBackground>
    )
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        marginTop: height * 0.2,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        maxWidth: 200,
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#a0a0a0',
        textAlign: 'center',
    },
    buttons: {
        alignItems: 'center',
        gap: 20,
        marginBottom: height * 0.15,
    },
    loginButton: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '80%',
        padding: 15,
        borderRadius: 25,
    },
    loginButtonText: {
        color: '#1E3A8A',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    signUpButton: {
        backgroundColor: 'transparent',
        width: '80%',
        padding: 15,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#fff',
    },
    signUpButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});