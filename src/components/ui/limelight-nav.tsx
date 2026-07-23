import type { LucideIcon } from 'lucide-react';
import { useLayoutEffect, useRef, useState } from 'react';

export interface LimelightNavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export interface LimelightNavProps {
  items: LimelightNavItem[];
  ariaLabel?: string;
  className?: string;
}

interface HighlightPosition {
  left: number;
  width: number;
}

export function LimelightNav({
  items,
  ariaLabel = 'Navegación principal',
  className = '',
}: LimelightNavProps) {
  const [highlight, setHighlight] = useState<HighlightPosition | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
  const activeIndex = items.findIndex(
    (item) => currentPath === item.href || currentPath.startsWith(`${item.href}/`),
  );

  useLayoutEffect(() => {
    let animationFrame = 0;

    const measure = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const nav = navRef.current;
        const activeItem = activeIndex < 0 ? null : itemRefs.current[activeIndex];
        if (!nav || !activeItem) {
          setHighlight(null);
          return;
        }

        const navRect = nav.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        setHighlight({ left: itemRect.left - navRect.left, width: itemRect.width });
      });
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    if (navRef.current) resizeObserver.observe(navRef.current);
    itemRefs.current.forEach((item) => {
      if (item) resizeObserver.observe(item);
    });
    window.addEventListener('resize', measure);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [activeIndex, items.length]);

  return (
    <nav
      ref={navRef}
      aria-label={ariaLabel}
      className={`relative flex items-center rounded-xl border border-white/8 bg-brand-ink/60 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${className}`}
    >
      {highlight && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-1 top-1 rounded-lg border border-brand-aqua/20 bg-brand-aqua/8 shadow-[0_0_24px_rgba(35,182,181,0.08)] transition-[width,transform] duration-300 ease-out motion-reduce:transition-none"
          style={{ width: highlight.width, transform: `translate3d(${highlight.left}px, 0, 0)` }}
        >
          <span className="absolute left-1/2 top-[-5px] h-px w-7 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-aqua to-transparent shadow-[0_0_10px_rgba(35,182,181,0.9)]" />
          <span className="absolute left-1/2 top-0 h-6 w-12 -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(35,182,181,0.18),transparent_70%)]" />
        </div>
      )}

      {items.map((item, index) => {
        const Icon = item.icon;
        const isActive = activeIndex === index;

        return (
          <a
            key={item.href}
            ref={(node) => { itemRefs.current[index] = node; }}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
            aria-label={item.label}
            className={`relative z-10 flex min-h-10 items-center justify-center gap-2 rounded-lg px-3 text-xs font-semibold transition-colors duration-200 motion-reduce:transition-none lg:px-4 ${
              isActive ? 'text-brand-sand' : 'text-brand-mist hover:text-brand-sand'
            }`}
          >
            <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
            <span className="hidden whitespace-nowrap lg:inline">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
