"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQSectionProps {
  question: string
  answer: string
}

export default function FAQSection({ question, answer }: FAQSectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">{question}</h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6">
          <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{answer}</p>
          </div>
        </div>
      )}
    </div>
  )
}
