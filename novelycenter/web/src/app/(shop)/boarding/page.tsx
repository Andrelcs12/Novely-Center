"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation' // Importe o router
import { Rocket, Settings2, BarChart3 } from 'lucide-react'
import OnboardingStep from '@/components/shop-components/onboarding-welcome/page'

const OnboardingPage = () => {
  const [step, setStep] = useState(0)
  const router = useRouter() // Inicialize o roteador

  const stepsData = [
    {
      title: "Organize sua empresa em minutos",
      description: "Aproveite a aplicação para realizar os atendimentos do seu serviço com agilidade.",
      imageSrc: "/shop/image.png",
    },
    {
      title: "Gerencie seus serviços facilmente",
      description: "Adicione, edite ou remova serviços com apenas alguns cliques no seu painel.",
      imageSrc: "/shop/image.png",
    },
    {
      title: "Visualize seus atendimentos",
      description: "Tenha um painel completo com horários e clientes de forma organizada.",
      imageSrc: "/shop/image.png",
    }
  ]

  const handleNext = () => {
    if (step < stepsData.length - 1) {
      setStep(step + 1)
    } else {
      // LINK FINAL: Quando chegar no último passo e clicar em "Iniciar"
      router.push('/register') // Altere para a rota de destino desejada
    }
  }

  const handleBack = () => setStep((prev) => Math.max(prev - 1, 0))

  return (
    <OnboardingStep
      {...stepsData[step]}
      step={step}
      onNext={handleNext}
      onBack={handleBack}
      isLastStep={step === stepsData.length - 1}
    />
  )
}

export default OnboardingPage