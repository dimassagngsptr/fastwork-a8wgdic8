import SendMessage from "../../components/module/send-message";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <SendMessage />
    </>
  );
}
