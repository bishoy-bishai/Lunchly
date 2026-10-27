import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/restaurants/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/restaurants/$id"!</div>
}
