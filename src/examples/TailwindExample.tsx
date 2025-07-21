import React from 'react';
import { motion } from 'framer-motion';

const TailwindExample: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ✨ Tailwind CSS Implementado!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Sistema de produção configurado com PostCSS
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Card 1 - Sucesso */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <i className="fas fa-check text-green-600 dark:text-green-400 text-xl"></i>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  CDN Removido
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Produção Otimizada
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Tailwind CSS agora é processado via PostCSS, eliminando o warning de produção.
            </p>
          </motion.div>

          {/* Card 2 - Performance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <i className="fas fa-rocket text-blue-600 dark:text-blue-400 text-xl"></i>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Cache Limpo
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Dependências Atualizadas
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Cache do Vite limpo, resolvendo o erro 504 de dependências desatualizadas.
            </p>
          </motion.div>

          {/* Card 3 - Dark Mode */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <i className="fas fa-palette text-purple-600 dark:text-purple-400 text-xl"></i>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Dark Mode
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Classes Configuradas
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Sistema de cores personalizado com suporte a modo escuro integrado.
            </p>
          </motion.div>
        </div>

        {/* Demonstração de Componentes Tailwind */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🎨 Componentes Personalizados
          </h2>
          
          <div className="space-y-4 mb-6">
            <button className="btn-primary">
              <i className="fas fa-download mr-2"></i>
              Botão Primário
            </button>
            
            <button className="btn-secondary ml-4">
              <i className="fas fa-info mr-2"></i>
              Botão Secundário
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Cores do Sistema
              </h3>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
                <div className="w-8 h-8 bg-green-600 rounded"></div>
                <div className="w-8 h-8 bg-red-600 rounded"></div>
                <div className="w-8 h-8 bg-yellow-500 rounded"></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Animações CSS
              </h3>
              <div className="space-x-2">
                <span className="icon-animate">🎯</span>
                <span className="fade-in">✨</span>
                <span className="fade-in-up">🚀</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Status Report */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <i className="fas fa-check-circle text-green-600 dark:text-green-400 text-2xl"></i>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-300">
                ✅ Problemas Resolvidos
              </h3>
              <ul className="mt-2 text-green-700 dark:text-green-400 space-y-1">
                <li>• Tailwind CDN removido (warning de produção eliminado)</li>
                <li>• Cache do Vite limpo (erro 504 resolvido)</li>
                <li>• PostCSS configurado corretamente</li>
                <li>• Bootstrap removido (redução de bundle)</li>
                <li>• Componentes personalizados criados</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TailwindExample;
