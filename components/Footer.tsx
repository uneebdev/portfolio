export default function Footer() {
  return (
    <footer className="bg-deep3 py-7 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[12px] text-muted">
          © {new Date().getFullYear()} Uneeb Ahmed. Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
