// src/components/OrdemServicoForm.tsx

import { useState } from 'react'
import type { OrdemServicoFormData, OrdemServicoFormProps } from '../types/ordemServico'

const FORM_VAZIO: OrdemServicoFormData = {
  cliente: '',
  dataAplicacao: '',
  cultura: '',
  area: '',
  aeronave: '',
  piloto: '',
  observacoes: '',
}

function OrdemServicoForm({
  mostrarCabecalho = true,
  mensagemSucesso = 'Ordem de Serviço gravada com sucesso!',
  onGravar,
  exibirAvisoObrigatorios = true,
}: OrdemServicoFormProps) {
  const [form, setForm] = useState<OrdemServicoFormData>(FORM_VAZIO)
  const [gravado, setGravado] = useState(false)
  const [erros, setErros] = useState<Partial<OrdemServicoFormData>>({})

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (erros[name as keyof OrdemServicoFormData]) {
      setErros((prev) => ({ ...prev, [name]: '' }))
    }
  }

  function validar(): boolean {
    const novosErros: Partial<OrdemServicoFormData> = {}
    if (!form.cliente.trim())    novosErros.cliente       = 'Informe o cliente.'
    if (!form.dataAplicacao)     novosErros.dataAplicacao = 'Informe a data de aplicação.'
    if (!form.cultura.trim())    novosErros.cultura       = 'Informe a cultura.'
    if (!form.area.trim())       novosErros.area          = 'Informe a área.'
    if (!form.aeronave.trim())   novosErros.aeronave      = 'Informe a aeronave.'
    if (!form.piloto.trim())     novosErros.piloto        = 'Informe o piloto.'
    setErros(novosErros)
    return Object.keys(novosErros).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validar()) return
    onGravar?.(form)
    setGravado(true)
    setForm(FORM_VAZIO)
  }

  function handleNova() {
    setGravado(false)
    setErros({})
  }

  if (gravado) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="card shadow border-top border-success border-3 p-4">
              <i className="bi bi-check-circle-fill text-success fs-1 mb-3"></i>
              <h4 className="fw-bold text-success mb-2">{mensagemSucesso}</h4>
              <p className="text-secondary mb-4">Os dados foram registrados no sistema.</p>
              <button className="btn btn-primary" onClick={handleNova}>
                <i className="bi bi-plus-circle me-2"></i>Nova Ordem de Serviço
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">

          {mostrarCabecalho && (
            <div className="mb-4">
              <div className="d-flex align-items-center gap-2 mb-1">
                <i className="bi bi-layout-text-sidebar-reverse text-primary fs-4"></i>
                <span className="badge bg-primary-subtle text-primary">Cadastro</span>
              </div>
              <h2 className="fw-bold text-dark">Cadastro de Ordens de Serviço</h2>
              <p className="text-secondary">
                Preencha os campos abaixo para registrar uma nova Ordem de Serviço.
              </p>
            </div>
          )}

          <div className="card shadow border-top border-primary border-3">
            <div className="card-body p-4">

              {exibirAvisoObrigatorios && (
                <div className="alert alert-info d-flex align-items-center gap-2 py-2 mb-4" role="alert">
                  <i className="bi bi-info-circle-fill"></i>
                  <small>Campos marcados com <span className="text-danger fw-bold">*</span> são obrigatórios.</small>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>

                <div className="row g-3 mb-3">
                  <div className="col-md-8">
                    <label htmlFor="cliente" className="form-label fw-semibold">
                      Cliente <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text" id="cliente" name="cliente"
                      className={`form-control ${erros.cliente ? 'is-invalid' : ''}`}
                      placeholder="Nome do cliente ou empresa"
                      value={form.cliente} onChange={handleChange}
                    />
                    {erros.cliente && <div className="invalid-feedback">{erros.cliente}</div>}
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="dataAplicacao" className="form-label fw-semibold">
                      Data da Aplicação <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date" id="dataAplicacao" name="dataAplicacao"
                      className={`form-control ${erros.dataAplicacao ? 'is-invalid' : ''}`}
                      value={form.dataAplicacao} onChange={handleChange}
                    />
                    {erros.dataAplicacao && <div className="invalid-feedback">{erros.dataAplicacao}</div>}
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="cultura" className="form-label fw-semibold">
                      Cultura <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text" id="cultura" name="cultura"
                      className={`form-control ${erros.cultura ? 'is-invalid' : ''}`}
                      placeholder="Ex: Soja, Milho, Café..."
                      value={form.cultura} onChange={handleChange}
                    />
                    {erros.cultura && <div className="invalid-feedback">{erros.cultura}</div>}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="area" className="form-label fw-semibold">
                      Área (ha) <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input
                        type="number" id="area" name="area"
                        className={`form-control ${erros.area ? 'is-invalid' : ''}`}
                        placeholder="0,00" min="0" step="0.01"
                        value={form.area} onChange={handleChange}
                      />
                      <span className="input-group-text">ha</span>
                      {erros.area && <div className="invalid-feedback">{erros.area}</div>}
                    </div>
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="aeronave" className="form-label fw-semibold">
                      Aeronave <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text" id="aeronave" name="aeronave"
                      className={`form-control ${erros.aeronave ? 'is-invalid' : ''}`}
                      placeholder="Modelo / prefixo do drone"
                      value={form.aeronave} onChange={handleChange}
                    />
                    {erros.aeronave && <div className="invalid-feedback">{erros.aeronave}</div>}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="piloto" className="form-label fw-semibold">
                      Piloto <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text" id="piloto" name="piloto"
                      className={`form-control ${erros.piloto ? 'is-invalid' : ''}`}
                      placeholder="Nome do piloto responsável"
                      value={form.piloto} onChange={handleChange}
                    />
                    {erros.piloto && <div className="invalid-feedback">{erros.piloto}</div>}
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="observacoes" className="form-label fw-semibold">
                    Observações
                  </label>
                  <textarea
                    id="observacoes" name="observacoes"
                    className="form-control" rows={3}
                    placeholder="Informações adicionais sobre a ordem de serviço..."
                    value={form.observacoes} onChange={handleChange}
                  />
                </div>

                <div className="d-flex gap-2 justify-content-end">
                  <button
                    type="button" className="btn btn-outline-secondary"
                    onClick={() => { setForm(FORM_VAZIO); setErros({}) }}
                  >
                    <i className="bi bi-x-circle me-1"></i>Limpar
                  </button>
                  <button type="submit" className="btn btn-primary fw-semibold px-4">
                    <i className="bi bi-floppy me-2"></i>Gravar Ordem de Serviço
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrdemServicoForm