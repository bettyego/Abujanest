export default function Button({ children, variant = 'primary', size = 'md', className = '', onClick, type = 'button' }) {
  const variants = {
    primary: 'bg-[#0f2d22] text-[#f7f1e7] hover:bg-[#123c2d]',
    secondary: 'bg-[#b88a43] text-white hover:bg-[#a97d38]',
    ghost: 'border border-[#0f2d22]/20 bg-white/70 text-[#0f2d22] hover:bg-white',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-3 text-sm',
    lg: 'px-6 py-3.5 text-sm',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-[0.14em] transition-all duration-200 hover:-translate-y-0.5 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}
