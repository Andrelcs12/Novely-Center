import { Store, MapPin, Hash, Building, Tag, ChevronLeft, CheckCircle } from 'lucide-react'

export default function Step2Store({ formData, onChange, onBack, onFinish }: any) {
  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Sua Loja</h2>
        <p className="text-gray-500">Onde seus clientes te encontrarão</p>
      </div>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Nome e Categoria */}
          <div className="relative col-span-1 md:col-span-2">
            <Store className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Nome da Loja"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={formData.shop_name}
              onChange={(e) => onChange({ shop_name: e.target.value })}
            />
          </div>

          <div className="relative col-span-1 md:col-span-2">
             <Tag className="absolute left-3 top-3.5 text-gray-400" size={18} />
             <select 
               className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none text-gray-600"
               value={formData.shop_categoria}
               onChange={(e) => onChange({ shop_categoria: e.target.value })}
             >
               <option value="">Selecione a Categoria</option>
               <option value="barbearia">Barbearia</option>
               <option value="salao">Salão de Beleza</option>
             </select>
          </div>

          <div className="relative col-span-1 md:col-span-2">
            <textarea
              placeholder="Descrição curta da loja..."
              rows={2}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={formData.shop_description}
              onChange={(e) => onChange({ shop_description: e.target.value })}
            />
          </div>

          {/* Localização (LOC) */}
          <div className="relative">
            <MapPin className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="CEP"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={formData.shop_cep}
              onChange={(e) => onChange({ shop_cep: e.target.value })}
            />
          </div>
          <div className="relative">
            <Building className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Cidade"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={formData.shop_cidade}
              onChange={(e) => onChange({ shop_cidade: e.target.value })}
            />
          </div>

          {/* Endereço Detalhado */}
          <div className="relative col-span-1 md:col-span-2">
            <input
              type="text"
              placeholder="Rua / Logradouro"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={formData.shop_rua}
              onChange={(e) => onChange({ shop_rua: e.target.value })}
            />
          </div>

          <div className="relative">
            <Hash className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Número"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={formData.shop_numero}
              onChange={(e) => onChange({ shop_numero: e.target.value })}
            />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Bairro"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={formData.shop_bairro}
              onChange={(e) => onChange({ shop_bairro: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <button
          onClick={onBack}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-gray-100 text-gray-600 rounded-xl font-semibold hover:bg-gray-200 transition-all"
        >
          <ChevronLeft size={20} /> Voltar
        </button>
        <button
          onClick={onFinish}
          className="flex-2 cursor-pointer flex items-center justify-center gap-2 py-4 bg-blue-700 text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-100 active:scale-95"
        >
          Finalizar Cadastro <CheckCircle size={20} />
        </button>
      </div>
    </div>
  )
}