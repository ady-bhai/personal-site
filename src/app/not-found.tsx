import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-12 text-center">
      <p className="mb-4">Page not found.</p>
      <p>
        <Link href="/" className="hyperlink">
          Back home
        </Link>
      </p>
    </div>
  );
}
