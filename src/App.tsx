import { useState } from 'react'
import { Heart, Sparkles, Gift, Star, Mail } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import pookieImage from './assets/pookie.png'
import './App.css'

function App() {
  const [isLetterOpen, setIsLetterOpen] = useState(false)
  const [openEnvelopes, setOpenEnvelopes] = useState<number[]>([])

  const reasons = [
    { icon: Heart, title: "Your Smile", text: "Lights up my entire world" },
    { icon: Sparkles, title: "Your Laugh", text: "Makes everything better" },
    { icon: Star, title: "Your Love", text: "Fills my heart with joy" },
    { icon: Gift, title: "Your Presence", text: "Is my greatest gift" }
  ]

  const toggleEnvelope = (index: number) => {
    if (openEnvelopes.includes(index)) {
      setOpenEnvelopes(openEnvelopes.filter(i => i !== index))
    } else {
      setOpenEnvelopes([...openEnvelopes, index])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {!isLetterOpen ? (
          // Envelope View
          <div className="flex items-center justify-center min-h-[80vh]">
            <div className="text-center">
              {/* Animated Hearts */}
              <div className="flex justify-center gap-4 mb-8">
                <Heart className="w-6 h-6 text-rose-400 fill-rose-400 animate-pulse" />
                <Sparkles className="w-6 h-6 text-pink-400 fill-pink-400" />
                <Heart className="w-6 h-6 text-rose-400 fill-rose-400 animate-pulse" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-rose-600 mb-4 font-great-vibes">
                You've Got Mail! 💌
              </h2>
              
              <p className="text-lg text-gray-600 mb-4 font-dancing">
                A special Valentine's message for
              </p>
              
              <p className="text-3xl md:text-4xl font-bold text-rose-700 mb-12 font-pacifico">
                Aishwarya ❤️
              </p>

              {/* CSS Envelope */}
              <div className="relative mb-8">
                {/* Sparkles around envelope */}
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                
                <div className="envelope-wrapper" onClick={() => setIsLetterOpen(true)}>
                  <div className="envelope">
                    <div className="envelope-flap"></div>
                    <div className="envelope-body"></div>
                    <div className="letter">
                      <div className="letter-text">
                        💕 For Aishwarya 💕<br/>
                        My Paglu<br/>
                        ❤️
                      </div>
                    </div>
                    <div className="heart-seal"></div>
                  </div>
                </div>
              </div>

              <p className="text-base text-rose-500 font-semibold font-dancing">
                ✨ Click on the envelope to open your letter ✨
              </p>

              {/* Floating Hearts */}
              <div className="flex justify-center gap-3 mt-8">
                {[...Array(5)].map((_, i) => (
                  <Heart 
                    key={i}
                    className="w-4 h-4 text-rose-300 fill-rose-300 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Letter Content View
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Header with Hearts */}
            <div className="flex justify-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-rose-400 fill-rose-400 animate-pulse" />
              <Sparkles className="w-6 h-6 text-pink-400 fill-pink-400" />
              <Heart className="w-6 h-6 text-rose-400 fill-rose-400 animate-pulse" />
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-3 text-rose-600 font-great-vibes">
              Happy Valentine's Day
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10 text-rose-700 font-pacifico">
              Aishwarya ❤️
            </h2>

            {/* Main Message Card */}
            <Card className="mb-8 bg-white/95 backdrop-blur-sm border-rose-200 border-2 shadow-xl">
              <CardContent className="pt-8 pb-8">
                {/* Pookie Image */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-rose-300 rounded-full blur-xl opacity-20"></div>
                    <img 
                      src={pookieImage}
                      alt="Pookie Love"
                      className="relative w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-rose-200 shadow-lg"
                    />
                  </div>
                </div>

                {/* Message Header */}
                <div className="text-center mb-6 max-w-3xl mx-auto">
                  <p className="text-2xl md:text-3xl text-rose-600 mb-6 font-bold font-great-vibes">
                    💌 A Special Message for You 💌
                  </p>
                  <p className="text-xl md:text-2xl text-gray-700 mb-6 font-semibold font-dancing">
                    To my dearest Pookie,
                  </p>
                  <div className="space-y-4 text-left">
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed font-dancing">
                      You make every day feel like Valentine's Day. Your smile lights up my world,
                      and your love fills my heart with endless joy.
                    </p>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed font-dancing">
                      Every moment with you is a treasure, every laugh we share is a memory I hold close to my heart.
                      You are my sunshine on cloudy days, my comfort in difficult times, and my greatest blessing.
                    </p>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed font-dancing">
                      Thank you for being my everything, my Pookie, my love, my forever Valentine.
                    </p>
                  </div>
                </div>

                {/* Love Declaration */}
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-200 mb-6">
                  <p className="text-2xl md:text-3xl font-bold text-center text-rose-700 mb-2 font-pacifico">
                    I Love You, Paglet! 💕
                  </p>
                  <p className="text-lg text-center text-gray-600 font-dancing">
                    Forever and always, you'll be my Valentine ✨
                  </p>
                </div>

                {/* Floating Hearts */}
                <div className="flex justify-center gap-2">
                  {[...Array(7)].map((_, i) => (
                    <Heart 
                      key={i}
                      className="w-5 h-5 text-rose-300 fill-rose-300 animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reasons Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {reasons.map((reason, index) => {
                const isOpen = openEnvelopes.includes(index)
                return (
                  <div 
                    key={index} 
                    className="mini-envelope-wrapper"
                    onClick={() => toggleEnvelope(index)}
                  >
                    <div className={`mini-envelope ${isOpen ? 'open' : ''}`}>
                      <div className="mini-envelope-flap"></div>
                      <div className="mini-envelope-body"></div>
                      <div className="mini-letter">
                        {!isOpen ? (
                          <div className="mini-letter-closed">
                            <reason.icon className="w-10 h-10 text-rose-400 fill-rose-400 mx-auto mb-2" />
                            <p className="text-xs text-rose-500 font-dancing font-semibold">
                              Click to open
                            </p>
                          </div>
                        ) : (
                          <div className="mini-letter-open animate-in fade-in duration-500">
                            <reason.icon className="w-10 h-10 text-rose-400 fill-rose-400 mx-auto mb-2" />
                            <h3 className="text-rose-700 font-dancing text-lg font-bold mb-2">
                              {reason.title}
                            </h3>
                            <p className="text-gray-700 text-sm font-dancing leading-tight">
                              {reason.text}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="mini-heart-seal"></div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Footer */}
            <p className="text-center text-rose-600 font-semibold text-base font-dancing">
              With all my love, today and forever 💖
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
