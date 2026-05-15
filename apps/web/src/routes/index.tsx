import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/')({
  component: () => {
    return (
      <div class="main">
        <h1 class="text-4xl bg-base-100">Tanstack Base</h1>
        <p>This repository is a <strong>starter bundle</strong> for projects using Tanstack with SolidJS.</p>
      </div>
    )
  }
}) 