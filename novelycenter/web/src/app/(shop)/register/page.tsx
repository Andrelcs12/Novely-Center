"use client"
import Step2Store from '@/components/shop-components/register/StoreStep'
import Step1Access from '@/components/shop-components/register/UserStep'
import { useState, useEffect } from 'react'
import OnboardingPage from '../boarding/page'

export default function RegisterWizard() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    host_name: '', host_phone: '', host_email: '',
    host_password: '', host_confirm_password: '',
    host_cnpj_cpf: '', terms: false,
    shop_name: '', shop_description: '',
    shop_cep: '', shop_estado: '', shop_cidade: '',
    shop_rua: '', shop_numero: '', shop_bairro: '',
    shop_categoria: ''
  })

  // --- LÓGICA DE MÁSCARAS (CORRIGIDA) ---
  const applyMask = (name: string, value: string) => {
    let v = value.replace(/\D/g, '') // Remove tudo que não é número

    if (name === 'host_cnpj_cpf') {
      if (v.length <= 11) { // CPF: 000.000.000-00
        v = v.replace(/(\d{3})(\d)/, '$1.$2')
        v = v.replace(/(\d{3})(\d)/, '$1.$2')
        v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      } else { // CNPJ: 00.000.000/0000-00
        v = v.slice(0, 14) // Limita a 14 números
        v = v.replace(/^(\d{2})(\d)/, '$1.$2')
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
        v = v.replace(/\.(\d{3})(\d)/, '.$1/$2')
        v = v.replace(/(\d{4})(\d)/, '$1-$2')
      }
    }

    if (name === 'host_phone') {
      v = v.slice(0, 11) // Limita a 11 números
      v = v.replace(/^(\d{2})(\d)/g, '($1) $2')
      v = v.replace(/(\d)(\d{4})$/, '$1-$2')
    }

    if (name === 'shop_cep') {
      v = v.slice(0, 8) // Limita a 8 números
      v = v.replace(/^(\d{5})(\d)/, '$1-$2')
    }

    return v
  }

  const updateFormData = (fields: any) => {
    const name = Object.keys(fields)[0]
    const value = fields[name]
    
    // Se for um campo que exige máscara, aplica. Senão, salva o valor puro.
    const maskedValue = (name === 'host_cnpj_cpf' || name === 'host_phone' || name === 'shop_cep') 
      ? applyMask(name, value) 
      : value

    setFormData(prev => ({ ...prev, [name]: maskedValue }))
  }

  // --- LÓGICA VIACEP (PREENCHIMENTO COMPLETO) ---
  useEffect(() => {
    const cepLimpo = formData.shop_cep.replace(/\D/g, '')
    
    if (cepLimpo.length === 8) {
      fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        .then(res => res.json())
        .then(data => {
          if (!data.erro) {
            setFormData(prev => ({
              ...prev,
              shop_rua: data.logradouro || '',
              shop_bairro: data.bairro || '',
              shop_cidade: data.localidade || '',
              shop_estado: data.uf || ''
            }))
          }
        })
        .catch(err => console.error("Erro ao buscar CEP", err))
    }
  }, [formData.shop_cep])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {step < 3 ? (
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {step === 1 && (
            <Step1Access
              formData={formData} 
              onChange={updateFormData} 
              onNext={() => setStep(2)} 
            />
          )}

          {step === 2 && (
            <Step2Store
              formData={formData} 
              onChange={updateFormData} 
              onBack={() => setStep(1)}
              onFinish={() => setStep(3)}
            />
          )}
        </div>
      ) : (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <OnboardingPage />
        </div>
      )}
    </div>
  )
}