import SettingsHeader from "@/app/components/Headers/SettingsHeader";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SettingsHeader />
      <section>{children}</section>
    </div>
  );
}
