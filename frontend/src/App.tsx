import { useEffect, useState } from "react"
import type { Cliente, Conductor, CrearOrdenDTO, EditarOrdenDTO, Orden } from "./types"
import {
  obtenerOrdenes,
  crearOrden,
  editarOrden,
  cancelarOrden,
  crearCliente,
  crearConductor,
  obtenerClientes,
  obtenerConductores,
} from "./services/api"
import OrdenTabla from "./components/OrdenTabla"
import OrdenModal from "./components/OrdenModal"
import FiltroOrdenes from "./components/FiltroOrdenes"
import ConfirmModal from "./components/ConfirmModal"
import EntidadModal from "./components/EntidadModal"
import Button from "./components/ui/Button"

export default function App() {
  const [ordenes, setOrdenes] = useState<Orden[]>([])
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [conductores, setConductores] = useState<Conductor[]>([])
  const [modalAbierto, setModalAbierto] = useState(false)
  const [ordenSeleccionada, setOrdenSeleccionada] = useState<Orden | undefined>(undefined)
  const [estadoFiltro, setEstadoFiltro] = useState("")
  const [conductorFiltro, setConductorFiltro] = useState("")
  const [error, setError] = useState("")
  const [ordenACancelar, setOrdenACancelar] = useState<number | undefined>(undefined)
  const [modalClienteAbierto, setModalClienteAbierto] = useState(false)
  const [modalConductorAbierto, setModalConductorAbierto] = useState(false)
  const [errorModal, setErrorModal] = useState("")

  async function cargarDatos() {
    const [ords, clts, conds] = await Promise.all([
      obtenerOrdenes(
        estadoFiltro || undefined,
        conductorFiltro ? parseInt(conductorFiltro) : undefined
      ),
      obtenerClientes(),
      obtenerConductores(),
    ])
    setOrdenes(ords)
    setClientes(clts)
    setConductores(conds)
  }

  useEffect(() => {
    cargarDatos()
  }, [estadoFiltro, conductorFiltro])

  const abrirModalCrear = () => {
    setOrdenSeleccionada(undefined)
    setModalAbierto(true)
  }

  function abrirModalEditar(orden: Orden) {
    setOrdenSeleccionada(orden)
    setModalAbierto(true)
  }

  function cerrarModal() {
    setOrdenSeleccionada(undefined)
    setModalAbierto(false)
    setErrorModal("")
  }

  async function handleGuardar(datos: CrearOrdenDTO | EditarOrdenDTO) {
    try {
      if (ordenSeleccionada) {
        await editarOrden(ordenSeleccionada.id, datos as EditarOrdenDTO)
      } else {
        await crearOrden(datos as CrearOrdenDTO)
      }
      setErrorModal("")
      cerrarModal()
      cargarDatos()
    } catch (e) {
      setErrorModal(e instanceof Error ? e.message : "Ocurrió un error al guardar la orden")
    }
  }

  function handleSolicitarCancelacion(id: number) {
    setOrdenACancelar(id)
  }

  async function handleConfirmarCancelacion() {
    if (!ordenACancelar) return
    try {
      await cancelarOrden(ordenACancelar)
      setOrdenACancelar(undefined)
      cargarDatos()
    } catch (e) {
      setError("Ocurrió un error al cancelar la orden")
    }
  }

  async function handleCrearCliente(nombre: string) {
    try {
      await crearCliente(nombre)
      setModalClienteAbierto(false)
      cargarDatos()
    } catch (e) {
      setError("Ocurrió un error al crear el cliente")
    }
  }

  async function handleCrearConductor(nombre: string) {
    try {
      await crearConductor(nombre)
      setModalConductorAbierto(false)
      cargarDatos()
    } catch (e) {
      setError("Ocurrió un error al crear el conductor")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 text-center">
          Gestión de órdenes de transporte
        </h1>
        <div className="flex gap-3 justify-around mt-4 mx-4">
          <Button onClick={() => setModalClienteAbierto(true)} className="text-white" texto="+ Cliente"></Button>
          <Button onClick={() => setModalConductorAbierto(true)} className="text-white" texto="+ Conductor"></Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {error && (
          <div className="mb-4 px-4 py-3 bg-red-50 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <div className="flex items-center justify-between mb-6">
          <FiltroOrdenes
            conductores={conductores}
            estadoSeleccionado={estadoFiltro}
            conductorSeleccionado={conductorFiltro}
            onEstadoChange={setEstadoFiltro}
            onConductorChange={setConductorFiltro}
          />
          <Button onClick={abrirModalCrear} className="text-white" texto="+ Nueva orden"></Button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          <OrdenTabla
            ordenes={ordenes}
            onEditar={abrirModalEditar}
            onCancelar={handleSolicitarCancelacion}
          />
        </div>
      </main>

      {ordenACancelar && (
        <ConfirmModal
          mensaje="¿Estás seguro de que deseas cancelar esta orden? Esta acción no se puede revertir."
          onConfirmar={handleConfirmarCancelacion}
          onCancelar={() => setOrdenACancelar(undefined)}
        />
      )}

      {modalAbierto && (
        <OrdenModal
          orden={ordenSeleccionada}
          clientes={clientes}
          conductores={conductores}
          error={errorModal}
          onGuardar={handleGuardar}
          onCerrar={cerrarModal}
        />
      )}

      {modalClienteAbierto && (
        <EntidadModal
          titulo="Nuevo cliente"
          placeholder="Nombre del cliente"
          onGuardar={handleCrearCliente}
          onCerrar={() => setModalClienteAbierto(false)}
        />
      )}

      {modalConductorAbierto && (
        <EntidadModal
          titulo="Nuevo conductor"
          placeholder="Nombre del conductor"
          onGuardar={handleCrearConductor}
          onCerrar={() => setModalConductorAbierto(false)}
        />
      )}

    </div>
  )
}