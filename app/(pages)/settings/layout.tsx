export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <section>{children}</section>
    </div>
  );
}
