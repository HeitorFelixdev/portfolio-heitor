import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { MD3DarkTheme, PaperProvider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "@/config";

const queryClient = new QueryClient();

const paperTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: theme.primary,
    background: theme.bg,
    surface: theme.surface,
    onSurface: theme.text,
    onBackground: theme.text,
  },
};

const aba = (titulo, icone, iconeAtivo) => ({
  title: titulo,
  tabBarIcon: ({ focused, color, size }) => (
    <Ionicons name={focused ? iconeAtivo : icone} size={size} color={color} />
  ),
});

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={paperTheme}>
        <StatusBar style="light" />
        <Tabs
          screenOptions={{
            headerShown: false,
            sceneStyle: { backgroundColor: theme.bg },
            tabBarActiveTintColor: theme.primary,
            tabBarInactiveTintColor: theme.textDim,
            tabBarStyle: {
              backgroundColor: theme.surface,
              borderTopColor: theme.border,
            },
            tabBarLabelStyle: { fontSize: 11, fontWeight: "600" },
          }}
        >
          <Tabs.Screen name="index" options={aba("Início", "home-outline", "home")} />
          <Tabs.Screen
            name="academica"
            options={aba("Acadêmica", "school-outline", "school")}
          />
          <Tabs.Screen
            name="profissional"
            options={aba("Profissional", "briefcase-outline", "briefcase")}
          />
          <Tabs.Screen
            name="projetos"
            options={aba("Projetos", "code-slash-outline", "code-slash")}
          />
          <Tabs.Screen
            name="sobre"
            options={aba("Sobre", "information-circle-outline", "information-circle")}
          />
        </Tabs>
      </PaperProvider>
    </QueryClientProvider>
  );
}
