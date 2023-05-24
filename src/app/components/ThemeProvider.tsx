"use client";

import { createTheme, NextUIProvider } from "@nextui-org/react";

const defaultTheme = createTheme({
  type: "light",
});

export default function ThemeProvider(
  { children }: { children: React.ReactNode },
) {
  return (
    <NextUIProvider theme={defaultTheme}>
      {children}
    </NextUIProvider>
  );
}
