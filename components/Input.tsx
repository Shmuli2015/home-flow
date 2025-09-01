import { StyleSheet, TextInput, TextInputProps } from "react-native";

const Input = (props: TextInputProps) => {
    return (
        <TextInput {...props} style={styles.input} />
    )
}

export default Input;

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        padding: 10,
    },
});