export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <span>
          © {new Date().getFullYear()} Nicolas Paquette. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
