import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { NAV_LINKS } from "@/lib/data";

const SOCIALS = [
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-14">
      <Container>
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-xs">
            <Link href="#top" className="font-serif text-lg font-semibold text-white">
              The Aesthetic
              <span className="text-gold"> Acquisition Co.</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/40">
              Premium social media management and Meta advertising for medical spas
              that want a consistently full consultation calendar.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/50 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/30 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} The Aesthetic Acquisition Co. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-gold">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
