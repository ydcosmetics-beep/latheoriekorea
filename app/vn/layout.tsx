import HqChrome from "../_hq/HqChrome";
import Analytics from "../_hq/Analytics";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HqChrome>
      {children}
      <Analytics />
    </HqChrome>
  );
}
