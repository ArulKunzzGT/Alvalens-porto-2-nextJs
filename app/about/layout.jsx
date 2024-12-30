import Footer from "@/components/Footer";

export const metadata = {
	title: "Syahrul | About",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
