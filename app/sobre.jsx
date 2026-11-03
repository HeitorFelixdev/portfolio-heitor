import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useQuery } from "@tanstack/react-query";
import Screen from "@/components/Screen";
import Card from "@/components/Card";
import Tag from "@/components/Tag";
import { getHabilidades, getPerfil } from "@/api";
import { B4A_CONFIGURADO, theme } from "@/config";

const TECNOLOGIAS = [
  ["React Native + Expo", "Base do aplicativo (SDK 58)."],
  ["Expo Router", "Navegação por abas baseada em arquivos da pasta app/."],
  ["Back4App (Parse REST)", "Back-end: nome, formações, experiências, projetos e habilidades."],
  ["axios", "Chamadas HTTP à API REST do Back4App."],
  ["@tanstack/react-query", "Cache, loading e atualização por pull-to-refresh."],
  ["react-native-paper", "Tema escuro (Material Design 3) e componentes de texto."],
  ["@expo/vector-icons", "Ícones das abas e dos botões de contato."],
  ["Linking (react-native)", "Abre WhatsApp, e-mail e LinkedIn a partir dos botões."],
  ["expo-status-bar / safe-area-context", "Barra de status clara e áreas seguras."],
  ["expo-updates + EAS Update", "Publicação over-the-air para o Expo Go."],
];

export default function Sobre() {
  const perfilQ = useQuery({ queryKey: ["perfil"], queryFn: getPerfil });
  const habQ = useQuery({ queryKey: ["habilidades"], queryFn: getHabilidades });
  const habilidades = habQ.data?.itens ?? [];
  const origem = perfilQ.data?.origem;

  return (
    <Screen titulo="Sobre" subtitulo="Como este app foi feito" query={perfilQ}>
      <Text style={styles.secao}>Funcionalidade extra</Text>
      <Card style={{ borderColor: theme.primary }}>
        <Text style={styles.destaque}>Contato rápido</Text>
        <Text style={styles.corpo}>
          Na tela Início, três botões abrem direto o WhatsApp (já com mensagem
          pronta), o app de e-mail e o perfil do LinkedIn.
        </Text>
      </Card>

      <Text style={styles.secao}>Tecnologias e módulos</Text>
      <Card>
        {TECNOLOGIAS.map(([nome, uso], i) => (
          <View key={nome} style={[styles.item, i > 0 && styles.sep]}>
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.uso}>{uso}</Text>
          </View>
        ))}
      </Card>

      <Text style={styles.secao}>Origem dos dados</Text>
      <Card>
        <Text style={styles.corpo}>
          {origem === "back4app"
            ? "Conteúdo carregado do Back4App."
            : B4A_CONFIGURADO
              ? "Back4App sem resposta: exibindo dados locais de reserva."
              : "Back4App ainda não configurado: exibindo dados locais."}
        </Text>
      </Card>

      <Text style={styles.secao}>Minhas habilidades</Text>
      {habilidades.map((h, i) => (
        <Card key={h.objectId ?? i}>
          <Text style={styles.nome}>{h.categoria}</Text>
          <View style={styles.tags}>
            {(h.itens ?? []).map((t) => (
              <Tag key={t}>{t.length > 38 ? t.slice(0, 36) + "…" : t}</Tag>
            ))}
          </View>
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  secao: {
    color: theme.textDim,
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 10,
    marginTop: 6,
  },
  destaque: { color: theme.primary, fontSize: 18, fontWeight: "800" },
  corpo: { color: theme.text, fontSize: 14, lineHeight: 21, marginTop: 4 },
  item: { paddingVertical: 8 },
  sep: { borderTopWidth: 1, borderTopColor: theme.border },
  nome: { color: theme.text, fontSize: 15, fontWeight: "700" },
  uso: { color: theme.textDim, fontSize: 13, marginTop: 2, lineHeight: 19 },
  tags: { flexDirection: "row", flexWrap: "wrap", marginTop: 4 },
});
