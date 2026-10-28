import { useSelector } from '@tanstack/react-form'

import { Input } from '#/components/ui/input'
import { Label } from '#/components/ui/label'
import { FieldError } from '#/components/form/field-error'
import { useFieldContext } from '#/components/form/form-context'
import type { ComponentProps } from 'react'

interface FormInputFieldProps {
  label: string
  type?: ComponentProps<typeof Input>['type']
  autoComplete?: ComponentProps<typeof Input>['autoComplete']
}

export function FormInputField({
  label,
  type,
  autoComplete,
}: FormInputFieldProps) {
  const field = useFieldContext<string>()
  const errors = useSelector(field.store, (state) => state.meta.errors)

  return (
    <div className="space-y-2">
      <Label htmlFor={field.name}>{label}</Label>
      <Input
        id={field.name}
        name={field.name}
        type={type}
        autoComplete={autoComplete}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(event) => field.handleChange(event.target.value)}
      />
      <FieldError messages={errors} />
    </div>
  )
}
