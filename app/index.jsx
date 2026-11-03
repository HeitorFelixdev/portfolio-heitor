import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useQuery } from "@tanstack/react-query";
import Screen from "@/components/Screen";
import Card from "@/components/Card";
import Tag from "@/components/Tag";
import ContactButtons from "@/components/ContactButtons";
import { getPerfil } from "@/api";
import { theme } from "@/config";

function iniciais(nome = "") {
  const p = nome.split(" ").filter((x) => x.length > 2);
  return ((p[0]?.[0] ?? "") + (p[p.length - 1]?.[0] ?? "")).toUpperCase();
}

export default function Home() {
  const perfilQ = useQuery({ queryKey: ["perfil"], queryFn: getPerfil });
  const perfil = perfilQ.data?.dados;

  return (
    <Screen query={perfilQ}>
      <View style={styles.hero}>
        <View style={styles.avatar}>
          <Text style={styles.avatarTxt}>{iniciais(perfil?.nome)}</Text>
        </View>
        <Text style={styles.nome}>{perfil?.nome}</Text>
        <Text style={styles.titulo}>{perfil?.titulo}</Text>
        <Text style={styles.local}>📍 {perfil?.localizacao}</Text>
      </View>

      <Text style={styles.secao}>Fale comigo</Text>
      <ContactButtons perfil={perfil} />

      <Text style={[styles.secao, { marginTop: 24 }]}>Perfil</Text>
      <Card>
        <Text style={styles.corpo}>{perfil?.resumo}</Text>
      </Card>

      <Text style={styles.secao}>Destaques</Text>
      <View style={styles.tags}>
        {["Excel avançado", "SQL Server", "Java", "Scrum", "React Native"].map(
          (t) => (
            <Tag key={t}>{t}</Tag>
          ),
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: { alignItems: "center", marginBottom: 28, marginTop: 8 },
  avatar: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: theme.primaryDim,
    borderWidth: 2,
    borderColor: theme.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  avatarTxt: { color: theme.primary, fontSize: 38, fontWeight: "800" },
  nome: { color: theme.text, fontSize: 26, fontWeight: "800", textAlign: "center" },
  titulo: { color: theme.primary, fontSize: 16, fontWeight: "600", marginTop: 4 },
  local: { color: theme.textDim, fontSize: 14, marginTop: 6 },
  secao: {
    color: theme.textDim,
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 10,
  },
  corpo: { color: theme.text, fontSize: 15, lineHeight: 23 },
  tags: { flexDirection: "row", flexWrap: "wrap" },
});
