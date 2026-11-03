import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useQuery } from "@tanstack/react-query";
import Screen from "@/components/Screen";
import Card from "@/components/Card";
import { getExperiencias } from "@/api";
import { theme } from "@/config";

export default function Profissional() {
  const q = useQuery({ queryKey: ["experiencias"], queryFn: getExperiencias });
  const itens = q.data?.itens ?? [];

  return (
    <Screen
      titulo="Experiência Profissional"
      subtitulo="Onde já atuei"
      query={q}
    >
      {itens.map((e, i) => (
        <Card key={e.objectId ?? i}>
          <Text style={styles.periodo}>{e.periodo}</Text>
          <Text style={styles.cargo}>{e.cargo}</Text>
          <Text style={styles.empresa}>
            {e.empresa}
            {e.setor ? ` · ${e.setor}` : ""}
          </Text>
          <View style={{ marginTop: 10 }}>
            {(e.atividades ?? []).map((a, j) => (
              <View key={j} style={styles.linha}>
                <Text style={styles.ponto}>•</Text>
                <Text style={styles.atividade}>{a}</Text>
              </View>
            ))}
          </View>
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  periodo: { color: theme.accent, fontSize: 13, fontWeight: "700" },
  cargo: { color: theme.text, fontSize: 19, fontWeight: "800", marginTop: 4 },
  empresa: { color: theme.primary, fontSize: 15, fontWeight: "600", marginTop: 2 },
  linha: { flexDirection: "row", marginBottom: 8 },
  ponto: { color: theme.primary, marginRight: 8, fontSize: 15 },
  atividade: { flex: 1, color: theme.text, fontSize: 14, lineHeight: 21 },
});
