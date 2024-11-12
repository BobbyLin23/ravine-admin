import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="text-red-500 bg-blue-500 h-screen w-screen">Hello</div>
}
