import { createFileRoute, Outlet } from '@tanstack/react-router'
import { AuthenticationLayout } from '@ravine-admin/layouts'

export const Route = createFileRoute('/auth')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <AuthenticationLayout>
      <Outlet />
    </AuthenticationLayout>
  )
}
