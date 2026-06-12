interface ConfirmModalProps {
    mensaje: string
    onConfirmar: () => void
    onCancelar: () => void
}

export default function ConfirmModal({ mensaje, onConfirmar, onCancelar }: ConfirmModalProps) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-sm p-6">
                <p className="text-gray-700 text-sm mb-6">{mensaje}</p>
                <div className="flex justify-end gap-3">
                    <button
                        onClick={onCancelar}
                        className="px-4 py-2 text-sm text-black-600 hover:bg-gray-300 cursor-pointer bg-gray-200 rounded-md"
                    >
                        No, volver
                    </button>
                    <button
                        onClick={onConfirmar}
                        className="px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 cursor-pointer"
                    >
                        Sí, cancelar orden
                    </button>
                </div>
            </div>
        </div>
    )
}