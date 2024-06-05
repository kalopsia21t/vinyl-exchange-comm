import Link from "next/link";

export default function Navigation() {
  const links = [
    { label: "Home", href: "/" },
    {
      label: "Places",
      href: "/places",
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "Exchange",
      href: "/exchange",
    },
    {
      label: "Log in",
      href: "/login",
    },
  ];
  return (
    <>
      {links.map((link) => (
        <Link href={link.href} className="mr-5">
          {link.label}
        </Link>
      ))}
    </>
  );
}
