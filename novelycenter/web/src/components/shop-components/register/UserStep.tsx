import { User, Phone, Mail, Lock, CreditCard, ChevronRight } from 'lucide-react'

export default function Step1Access({ formData, onChange, onNext }: any) {
  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Crie sua conta</h2>
        <p className="text-gray-500">Dados de acesso ao painel administrativo</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* Nome */}
        <div className="relative col-span-1 md:col-span-2">
          <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Nome completo"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            value={formData.host_name}
            onChange={(e) => onChange({ host_name: e.target.value })}
          />
        </div>

        {/* E-mail */}
        <div className="relative col-span-1 md:col-span-2">
          <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input
            type="email"
            placeholder="E-mail profissional"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            value={formData.host_email}
            onChange={(e) => onChange({ host_email: e.target.value })}
          />
        </div>

        {/* CPF/CNPJ e Telefone */}
        <div className="relative">
          <CreditCard className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="CPF ou CNPJ"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            value={formData.host_cnpj_cpf}
            onChange={(e) => onChange({ host_cnpj_cpf: e.target.value })}
          />
        </div>
        <div className="relative">
          <Phone className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="WhatsApp"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            value={formData.host_phone}
            onChange={(e) => onChange({ host_phone: e.target.value })}
          />
        </div>

        {/* Senhas */}
        <div className="relative">
          <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input
            type="password"
            placeholder="Sua senha"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            value={formData.host_password}
            onChange={(e) => onChange({ host_password: e.target.value })}
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input
            type="password"
            placeholder="Confirme a senha"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            value={formData.host_confirm_password}
            onChange={(e) => onChange({ host_confirm_password: e.target.value })}
          />
        </div>
      </div>

      <div className="flex items-center gap-2 py-2">
        <input 
          type="checkbox" 
          id="terms" 
          className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-gray-300"
          checked={formData.terms}
          onChange={(e) => onChange({ terms: e.target.checked })}
        />
        <label htmlFor="terms" className="text-sm text-gray-600">
          Aceito os <span className="text-blue-700 font-semibold underline cursor-pointer">termos de uso</span>
        </label>
      </div>

      <button
        onClick={onNext}
        className="w-full cursor-pointer flex items-center justify-center gap-2 py-4 bg-blue-700 text-white rounded-xl font-bold hover:bg-blue-600 transition-all active:scale-95"
      >
        Dados da Empresa <ChevronRight size={20} />
      </button>
    </div>
  )
}