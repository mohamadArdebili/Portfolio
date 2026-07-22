import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    // <section id={id} className="scroll-mt-24 py-12 sm:py-15">
    <section id={id} className="scroll-mt-24 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl animate-fade-up">
          <div className="inline-block">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
            <div className="mt-4 h-px w-full bg-accent/60" />
          </div>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
