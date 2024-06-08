import Navigation from "@/Components/Navigation";
import Header from "./Header";
import { useRouter } from "next/router";
import Toggle from "./ToggleMode";

export default function Layout({ children, theme, handleToggleTheme }) {
  const router = useRouter();
  const indexPage = router.pathname === "/" ? true : false;

  return (
    <>
      {indexPage ? null : <Header />}
      {children}
      {indexPage ? null : <Navigation />}
      {indexPage ? null : (
        <Toggle theme={theme} handleToggleTheme={handleToggleTheme} />
      )}
    </>
  );
}
