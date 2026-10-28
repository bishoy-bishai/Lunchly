import { createFormHook } from '@tanstack/react-form'

import { FormInputField } from '#/components/form/form-input-field'
import { SubmitButton } from '#/components/form/submit-button'
import { fieldContext, formContext } from '#/components/form/form-context'

export const { useAppForm, withForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: { FormInputField },
  formComponents: { SubmitButton },
})
