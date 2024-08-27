"use client"

import { useState, useEffect } from 'react'
import { PlayCircle, PauseCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

export default function LatestRelease() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1))
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <section className="py-12 sm:py-16 px-4">
      <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Latest Release</h3>
      <Card className="max-w-sm sm:max-w-md mx-auto bg-purple-800">
        <CardContent className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h4 className="text-lg sm:text-xl font-semibold">Stellar Rhythms</h4>
              <p className="text-sm opacity-70">Cosmic Harmony</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <PauseCircle className="h-6 w-6 sm:h-8 sm:w-8" />
              ) : (
                <PlayCircle className="h-6 w-6 sm:h-8 sm:w-8" />
              )}
            </Button>
          </div>
          <Slider
            value={[progress]}
            max={100}
            step={1}
            className="mb-2"
          />
          <div className="flex justify-between text-sm opacity-70">
            <span>0:00</span>
            <span>3:45</span>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
