interface Props {
    onClick: () => void
    texto: string
    disabled?: boolean
    className?: string
}

export function Button({ onClick, texto, disabled = false, className }: Props) {
    return(
        <button 
        onClick={onClick}
        disabled={disabled}
        className={`px-4 py-2 bg-blue-600 text-sm rounded-md hover:bg-blue-700 cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 ${className}`}>{ texto }</button>
    )
}

export default Button