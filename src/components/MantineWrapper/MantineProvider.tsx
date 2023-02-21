import {
  MantineProvider as MMantineProvider,
  MantineProviderProps,
} from "@mantine/core";
import type { ReactNode } from "react";

type Props = MantineProviderProps & { children: ReactNode };

export default function MantineProvider({ children, ...props }: Props) {
  return (
    <MMantineProvider
      theme={{
        loader: "bars",
        transitionTimingFunction: "ease-in",
        colors: {
          p: [
            "#004643",
            "#abd1c6",
            "#f9bc60",
            "#e16162",
            "#e8e4e6",
            "#fffffe",
            "#001e1d",
            "#0f3433",
          ],
        },
      }}
      {...props}
    >
      {children}
    </MMantineProvider>
  );
}
