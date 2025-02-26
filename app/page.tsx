import AgentPulse from "@/components/AgentPulse";
import YoutubeVideoForm from "@/components/YoutubeVideoForm";

import { Brain, MessageSquare, Image as ImageIcon, Sparkles, Video } from "lucide-react";

const steps = [
  {
    title: "1. Connect Your Content",
    description: "Share your YouTube video URL and let your agent get to work.",
    icon: Video
  },
  {
    title: "2. AI Agent Analysis",
    description: "Your personal agent analyzes every aspect of your content.",
    icon: Brain
  },
  {
    title: "3. Recieve Intelligence",
    description: "Get actionable insights and strategic recommendations",
    icon: MessageSquare
  },
]

const features = [
  {
    title: "AI Analysis",
    description: "Get deep insights into your video content with our advanced AI analysis. Understand viewer engagement and content quality.",
    icon: Brain,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Smart Transcription",
    description: "Get accurate transcriptions of your videos. perfect for creating subtitles, blog posts, or repurposing content.",
    icon: MessageSquare,
    iconBg: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    title: "Thumbnail Generation",
    description: "Generate eye-catching thumbnails using AI. Boost your click-through rates with compelling visuals.",
    icon: ImageIcon,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    title: "Title Generation",
    description: "Create attention-grabbing, SEO-optimized titles for your videos using AI. Maximize views with titles that resonate with your audience.",
    icon: MessageSquare,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600"
  },
  {
    title: "Shot Script",
    description: "Get detailed, step-by-step instructions to recreate viral videos. Learn shooting techniques, angles, and editing tips from successful content.",
    icon: Video,
    iconBg: "bg-red-100",
    iconColor: "text-red-600"
  },
  {
    title: "Discuss with Your AI Agent",
    description: "Engage in deep conversations about your content strategy, brainstorm ideas, and unlock new creative possibilities with your AI agent companion.",
    icon: Sparkles,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600"
  },

]

export default function Home() {
  return (
    <div className="min-h-screen">
         {/* Hero Section */}
         <section className="py-20 bg-gradient-to-b from-white to-gray-50"> 
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-10 text-center mb-12 justify-center">
              <AgentPulse size="large" color="blue"/>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Meet Your Personal{" "} <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">AI Content Agent</span></h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Transform your video content with AI-powered analysis, transcription and insights. Get Started in seconds.
              </p>

              {/* YoutubeVideoForm */}
              <YoutubeVideoForm />

            </div>
          </div>
         </section>

         {/* Features Section */}

         <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Powerful Features for Content Creators</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Features */}
              {features.map(({icon, title, description, iconBg, iconColor}) => {
                const Icon = icon;
                return (
                  <div key={title} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${iconBg}`}>
                        <Icon className={`w-6 h-6 ${iconColor}`}/>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                  </div>
                )
              })}
            </div>
          </div>
         </section>

         {/* How it works Section */}

         <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Your AI Agent In 3 Simple Steps </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map(({title, description, icon}) => {
                const Icon = icon;
                return (
                  <div key={title} className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white"/>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                  </div>
                )
              })}
            </div>
          </div>
         </section>

         {/* Footer Section */}

         <footer className="py-20 px-4 md:px-0 bg-gradient-to-r from-blue-600 to-blue-400">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Read to Meet Your AI Content Agent?
            </h2>
            <p className="text-xl text-blue-50">
              Join creators leveraging AI to unlock content insights
            </p>
          </div>
         </footer>

    </div>
  );
}
