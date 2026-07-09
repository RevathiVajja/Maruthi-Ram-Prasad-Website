import { InputHTMLAttributes } from "react";
import { useField } from "formik";
import { cn } from "@/lib/utils";

interface TextInputFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "name"> {
  name: string;
  label?: string;
  helperText?: string;
}

export const TextInputField = ({
  name,
  label,
  helperText,
  className,
  onChange,
  ...props
}: TextInputFieldProps) => {
  const [{ onChange: onFieldChange, ...field }, meta] = useField(name);

  const hasError = meta.touched && !!meta.error;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-semibold text-foreground"
        >
          {label}
          {props.required && <span className="ml-0.5 text-destructive">*</span>}
        </label>
      )}

      <input
        id={name}
        {...field}
        {...props}
        onChange={(e) => {
          onFieldChange(e);
          onChange?.(e);
        }}
        className={cn(
          // Base
          "w-full rounded-lg border px-3 py-3 text-md text-foreground outline-none transition-all placeholder:text-muted-foreground",
          // Number — hide spinners
          "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          // Default border + focus
          "border-input bg-background focus:border-ring focus:ring-2 focus:ring-ring/30",
          // Error state
          hasError && "border-destructive focus:border-destructive focus:ring-destructive/30",
          // Disabled state
          "disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground",
          className
        )}
      />

      {/* Error or helper text */}
      {hasError ? (
        <p className="text-xs text-destructive font-medium">{meta.error}</p>
      ) : helperText ? (
        <p className="text-xs text-muted-foreground">{helperText}</p>
      ) : null}
    </div>
  );
};