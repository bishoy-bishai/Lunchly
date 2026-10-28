import { Button } from '#/components/ui/button'
import { useFormContext } from '#/components/form/form-context'

export function SubmitButton({
  label,
  pendingLabel,
}: {
  label: string
  pendingLabel: string
}) {
  const form = useFormContext()

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? pendingLabel : label}
        </Button>
      )}
    </form.Subscribe>
  )
}
