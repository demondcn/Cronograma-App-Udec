import Link from "next/link"
import { BookOpenCheck, Dumbbell, GraduationCap, Monitor } from "lucide-react"

import { Button } from "@/components/ui/button"

const navigationItems = [
  {
    label: "Cgca",
    href: "/cgca",
    icon: GraduationCap,
    className:
      "border-cyan-400/40 bg-cyan-500/15 text-cyan-50 hover:bg-cyan-400/25 hover:border-cyan-300",
  },
  {
    label: "Centros de Computo",
    href: "/centros-computo",
    icon: Monitor,
    className:
      "border-emerald-400/50 bg-emerald-500/20 text-emerald-50 hover:bg-emerald-400/30 hover:border-emerald-300",
  },
  {
    label: "Recursos Deportivos",
    href: "/recursos-deportivos",
    icon: Dumbbell,
    className:
      "border-orange-400/50 bg-orange-500/20 text-orange-50 hover:bg-orange-400/30 hover:border-amber-300",
  },
]

export function AcademicSupportPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-950 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-violet-400" />
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-violet-400 via-emerald-400 to-cyan-400" />
      <div className="absolute left-0 top-0 h-40 w-40 border-l border-t border-cyan-400/40" />
      <div className="absolute bottom-0 right-0 h-40 w-40 border-b border-r border-emerald-400/40" />

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-emerald-400/40 bg-emerald-500/15 shadow-lg shadow-emerald-500/20">
          <BookOpenCheck className="h-10 w-10 text-emerald-200" />
        </div>

        <h1 className="max-w-5xl text-4xl font-black tracking-normal text-white sm:text-5xl lg:text-7xl">
          Apoyo AcademicoSoftSoacha
        </h1>

        <div className="mt-12 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          {navigationItems.map((item) => {
            const Icon = item.icon

            return (
              <Button
                key={item.href}
                asChild
                variant="outline"
                className={`h-24 rounded-lg px-5 text-base font-bold shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 sm:h-28 sm:text-lg ${item.className}`}
              >
                <Link
                  href={item.href}
                  className="flex w-full flex-col items-center justify-center gap-3 whitespace-normal text-center leading-tight"
                >
                  <Icon className="h-7 w-7" />
                  <span>{item.label}</span>
                </Link>
              </Button>
            )
          })}
        </div>
      </section>
    </main>
  )
}
