export function FieldError({ messages }: { messages: Array<unknown> }) {
  const message = messages
    .map((item) =>
      typeof item === 'string' ? item : (item as { message: string }).message,
    )
    .filter(Boolean)[0]

  if (!message) return null

  return <p className="text-sm text-destructive">{message}</p>
}
