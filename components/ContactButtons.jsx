import { Alert, Linking, Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "@/config";

// FUNCIONALIDADE EXTRA: botões de contato rápido.
// Abre o WhatsApp (com mensagem pronta), o app de e-mail e o LinkedIn.
async function abrir(url, nome) {
  try {
    await Linking.openURL(url);
  } catch {
    Alert.alert("Não foi possível abrir", `Instale ou abra o ${nome} e tente de novo.`);
  }
}

export default function ContactButtons({ perfil }) {
  const nome = perfil?.nome?.split(" ")[0] ?? "";
  const mensagem = encodeURIComponent(
    `Olá${nome ? ", " + nome : ""}! Vi seu portfólio e gostaria de conversar.`,
  );

  const botoes = [
    perfil?.whatsapp && {
      chave: "whatsapp",
      rotulo: "WhatsApp",
      cor: "#25D366",
      icone: <FontAwesome5 name="whatsapp" size={22} color="#25D366" />,
      url: `https://wa.me/${perfil.whatsapp}?text=${mensagem}`,
    },
    perfil?.email && {
      chave: "email",
      rotulo: "E-mail",
      cor: theme.primary,
      icone: <MaterialCommunityIcons name="email-outline" size={24} color={theme.primary} />,
      url: `mailto:${perfil.email}?subject=${encodeURIComponent("Contato pelo portfólio")}`,
    },
    perfil?.linkedin && {
      chave: "linkedin",
      rotulo: "LinkedIn",
      cor: "#4DA3FF",
      icone: <FontAwesome5 name="linkedin" size={22} color="#4DA3FF" />,
      url: perfil.linkedin,
    },
  ].filter(Boolean);

  return (
    <View style={styles.row}>
      {botoes.map((b) => (
        <Pressable
          key={b.chave}
          onPress={() => abrir(b.url, b.rotulo)}
          accessibilityRole="button"
          accessibilityLabel={`Abrir ${b.rotulo}`}
          style={({ pressed }) => [
            styles.btn,
            { borderColor: b.cor, opacity: pressed ? 0.6 : 1 },
          ]}
        >
          {b.icone}
          <Text style={[styles.rotulo, { color: b.cor }]}>{b.rotulo}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 10 },
  btn: {
    flex: 1,
    alignItems: "center",
    gap: 6,
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: theme.surface,
  },
  rotulo: { fontSize: 13, fontWeight: "700" },
});
