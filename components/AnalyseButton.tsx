"use client"
import { useFormStatus } from "react-dom"

const AnalyseButton = () => {
  const {pending} = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium">
      {pending ? "Analyzing..." : "Analyze"}
    </button>
  )
}

export default AnalyseButton