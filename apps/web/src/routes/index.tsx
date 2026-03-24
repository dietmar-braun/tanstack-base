import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/')({
  component: () => <h1 class="text-4xl bg-yellow-100">Home</h1>
}) 