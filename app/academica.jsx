import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useQuery } from "@tanstack/react-query";
import Screen from "@/components/Screen";
import Card from "@/components/Card";
import Tag from "@/components/Tag";
import { getFormacoes } from "@/api";
import { theme } from "@/config";

export default function Academica() {
  const q = useQuery({ queryKey: ["formacoes"], queryFn: getFormacoes });
  const itens = q.data?.itens ?? [];

  return (
    <Screen titulo="Experiência Acadêmica" subtitulo="Formação e cursos" query={q}>
      {itens.map((f, i) => (
        <Card key={f.objectId ?? i}>
          <View style={styles.topo}>
            <Tag>{f.tipo}</Tag>
            {f.status ? (
              <Tag cor={f.status === "Cursando" ? theme.accent : theme.textDim}>
                {f.status}
              </Tag>
            ) : null}
          </View>
          <Text style={styles.curso}>{f.curso}</Text>
          <Text style={styles.inst}>{f.instituicao}</Text>
          {f.periodo ? <Text style={styles.periodo}>{f.periodo}</Text> : null}
          {f.descricao ? <Text style={styles.desc}>{f.descricao}</Text> : null}
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  topo: { flexDirection: "row", marginTop: -6, marginBottom: 8 },
  curso: { color: theme.text, fontSize: 18, fontWeight: "700" },
  inst: { color: theme.primary, fontSize: 15, fontWeight: "600", marginTop: 2 },
  periodo: { color: theme.textDim, fontSize: 13, marginTop: 4 },
  desc: { color: theme.text, fontSize: 14, lineHeight: 21, marginTop: 10 },
});
