import { forwardRef } from "react"

// 입력 컴포넌트
type InputProps = {
  className?: string // 추가적인 클래스 이름
  type?: string // 기본값은 "text"로 설정할 수 있음
} & React.InputHTMLAttributes<HTMLInputElement> // 기본 input 속성들을 포함

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      className={`flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

// 텍스트 영역 컴포넌트
type TextareaProps = {
  className?: string // 추가적인 클래스 이름
} & React.TextareaHTMLAttributes<HTMLTextAreaElement> // 기본 textarea 속성들을 포함

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={`flex min-h-[150px] w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"
