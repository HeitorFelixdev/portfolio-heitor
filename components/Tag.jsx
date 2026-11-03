import { StyleSheet, Text, View } from "react-native";
import { theme } from "@/config";

export default function Tag({ children, cor = theme.primary }) {
  return (
    <View style={[styles.tag, { borderColor: cor }]}>
      <Text style={[styles.txt, { color: cor }]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 6,
    marginTop: 6,
  },
  txt: { fontSize: 12, fontWeight: "600" },
});
