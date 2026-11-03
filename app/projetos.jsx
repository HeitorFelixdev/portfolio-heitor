import { Alert, Linking, Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import Screen from "@/components/Screen";
import Card from "@/components/Card";
import Tag from "@/components/Tag";
import { getProjetos } from "@/api";
import { theme } from "@/config";

export default function Projetos() {
  const q = useQuery({ queryKey: ["projetos"], queryFn: getProjetos });
  const itens = q.data?.itens ?? [];

  const abrir = (url) =>
    Linking.openURL(url).catch(() =>
      Alert.alert("Não foi possível abrir o link"),
    );

  return (
    <Screen titulo="Projetos" subtitulo="O que já construí" query={q}>
      {itens.map((p, i) => (
        <Card key={p.objectId ?? i}>
          <Text style={styles.titulo}>{p.titulo}</Text>
          <Text style={styles.desc}>{p.descricao}</Text>
          <View style={styles.tags}>
            {(p.tecnologias ?? []).map((t) => (
              <Tag key={t} cor={theme.accent}>
                {t}
              </Tag>
            ))}
          </View>
          {p.link ? (
            <Pressable onPress={() => abrir(p.link)} style={styles.link}>
              <Ionicons name="open-outline" size={16} color={theme.primary} />
              <Text style={styles.linkTxt}>Ver projeto</Text>
            </Pressable>
          ) : null}
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  titulo: { color: theme.text, fontSize: 18, fontWeight: "800" },
  desc: { color: theme.text, fontSize: 14, lineHeight: 21, marginTop: 6 },
  tags: { flexDirection: "row", flexWrap: "wrap", marginTop: 6 },
  link: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 14 },
  linkTxt: { color: theme.primary, fontWeight: "700", fontSize: 14 },
});
