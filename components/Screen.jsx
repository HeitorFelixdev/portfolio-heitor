import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "@/config";

// Container padrão das telas: fundo escuro, rolagem, carregamento e pull-to-refresh.
export default function Screen({ titulo, subtitulo, query, children }) {
  const insets = useSafeAreaInsets();
  const carregando = query?.isLoading;

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={{
        paddingTop: insets.top + 16,
        paddingBottom: 32,
        paddingHorizontal: 16,
      }}
      refreshControl={
        query ? (
          <RefreshControl
            refreshing={query.isRefetching}
            onRefresh={query.refetch}
            tintColor={theme.primary}
          />
        ) : undefined
      }
    >
      {titulo ? (
        <View style={styles.header}>
          <Text style={styles.titulo}>{titulo}</Text>
          {subtitulo ? <Text style={styles.sub}>{subtitulo}</Text> : null}
        </View>
      ) : null}
      {carregando ? (
        <ActivityIndicator color={theme.primary} style={{ marginTop: 48 }} />
      ) : (
        children
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.bg },
  header: { marginBottom: 20 },
  titulo: { color: theme.text, fontSize: 30, fontWeight: "800" },
  sub: { color: theme.textDim, fontSize: 15, marginTop: 4 },
});
