import { ActivityIndicator, Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";

interface ButtonProps {
    title: string;
    isLoading?: boolean;
    onPress: () => void;
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const Button = ({ title, isLoading, onPress, buttonStyle, textStyle }: ButtonProps) => {
    if (isLoading) {
        return (
            <ActivityIndicator size="small" color="#fff" style={buttonStyle} />
        )
    }
    return (
        <Pressable onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{title}</Text>
        </Pressable>
    )
}

export default Button;
