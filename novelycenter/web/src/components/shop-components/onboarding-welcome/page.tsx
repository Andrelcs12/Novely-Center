import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface OnboardingStepProps {
  title: string
  description: string
  imageSrc: string
  step: number // 0, 1, 2
  onNext: () => void
  onBack: () => void
  isLastStep?: boolean
}

const OnboardingStep = ({ 
  title, description, imageSrc, step, onNext, onBack, isLastStep 
}: OnboardingStepProps) => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-white md:px-20 md:py-16">
      
      {/* Imagem */}
      <div className="  flex justify-center bg-black/10">
        <Image 
          src={imageSrc} 
          alt={title} 
          width={500} 
          height={100} 
          className="w-full h-auto object-contain"
          priority 
        />
      </div>

      {/* Conteúdo Central */}
      <div className="w-full  flex flex-col items-center px-6">
        
        {/* Indicadores de Progresso (Dots) */}
        <div className="flex gap-3 items-center ">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className={`transition-all duration-300 rounded-full ${
                step === i ? 'h-3 w-8 bg-blue-700' : 'h-3 w-3 bg-gray-300'
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-2">
          <h1 className="text-2xl md:text-3xl  text-gray-900 font-bold">
            {title}
          </h1>
          <p className="text-gray-500 mt-4 text-base md:text-lg">
            {description}
          </p>
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="w-full max-w-md flex gap-3 px-6 mt-2 mb-8">
        
        {step > 0 && (
          <button
            onClick={onBack}
            className="w-full cursor-pointer flex items-center justify-center border-gray-300 border-2 py-4 bg-transparent text-gray-500 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all"
          >
            <ChevronLeft />
            Voltar
          </button>
        )}

        <button
          onClick={onNext}
          className="w-full flex items-center justify-center cursor-pointer py-4 bg-blue-700 text-white rounded-xl font-bold text-lg hover:bg-blue-600 duration-200 active:scale-95"
        >
          {isLastStep ? 'Iniciar' : 'Próximo'}

          <ChevronRight />
        </button>

        
      </div>
    </div>
  )
}

export default OnboardingStep