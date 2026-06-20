import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

type FormFieldProps = {
  id: string
  label: string
  description?: string
  error?: string
  children: React.ReactNode
}

export function FormField({
  id,
  label,
  description,
  error,
  children,
}: FormFieldProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
      </Label>
      {children}
      {description ? (
        <p className="text-sm leading-6 text-foreground-secondary">{description}</p>
      ) : null}
      {error ? (
        <p className="text-sm text-destructive">{error}</p>
      ) : null}
    </div>
  )
}
