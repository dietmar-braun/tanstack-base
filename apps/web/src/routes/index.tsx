import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/')({
  component: () => {
    return (
      <div class="">
        <h1 class="text-4xl bg-base-100">Home</h1>
        <p>test</p>
      </div>
    )
  }
}) 