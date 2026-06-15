import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="container-custom py-20">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold">Akshara Graphics</h3>
            <p className="mt-4 text-[var(--color-text-muted)]">
              Printing &amp; Stationery, Since 2000.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Products</h4>
            <ul className="space-y-3 mt-4 text-[var(--color-text-muted)]">
              <li>Paper Envelopes</li>
              <li>Notebooks &amp; Diaries</li>
              <li>Stickers &amp; Labels</li>
              <li>Calendars &amp; Badges</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-3 mt-4 text-[var(--color-text-muted)]">
              <li><a href="#about" className="hover:text-[var(--color-accent)]">About</a></li>
              <li><a href="#portfolio" className="hover:text-[var(--color-accent)]">Portfolio</a></li>
              <li><a href="#gallery" className="hover:text-[var(--color-accent)]">Gallery</a></li>
              <li><a href="#contact" className="hover:text-[var(--color-accent)]">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-3 mt-4 text-[var(--color-text-muted)]">
              <li>
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="hover:text-[var(--color-accent)]">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[var(--color-accent)]">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>{siteConfig.address.addressLocality}, {siteConfig.address.addressRegion}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-border)] text-sm text-[var(--color-text-muted)] flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Akshara Graphics. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS &amp; Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
