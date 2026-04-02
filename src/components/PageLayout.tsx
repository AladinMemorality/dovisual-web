import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="pt-[57px]">{children}</main>
      <Footer />
    </>
  );
}
