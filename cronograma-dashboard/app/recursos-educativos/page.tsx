import Link from "next/link"
import { ArrowLeft, LibraryBig } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function RecursosEducativosPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 px-4 py-16 text-white">
      <section className="w-full max-w-xl text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg border border-violet-400/40 bg-violet-500/15">
          <LibraryBig className="h-8 w-8 text-violet-200" />
        </div>
        <h1 className="text-3xl font-bold sm:text-4xl">
          Centro de recursos Educativos
        </h1>
        <p className="mt-4 text-sm text-gray-300">
          Esta seccion esta lista como placeholder para integracion futura.
        </p>
        <Button
          asChild
          className="mt-8 bg-violet-500 text-white hover:bg-violet-400"
        >
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </Button>
      </section>
    </main>
  )
}
