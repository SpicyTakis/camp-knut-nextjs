import { AppShell, Container, Group, Header, Text } from "@mantine/core";
import { ScriptProps } from "next/script";

export default function Layout({ children, title }: ScriptProps) {
  return (
    <AppShell
      header={
        <Header height={60}>
          <Group sx={{ height: "100%" }} px={20} position="apart">
            <Text weight={"bold"}>Header text</Text>
          </Group>
        </Header>
      }
    >
        <title>{title}</title>
        {children}
    </AppShell>
  );
}
