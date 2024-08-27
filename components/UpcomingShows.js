"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function UpcomingShows() {
  const cities = ['New York', 'Los Angeles', 'London', 'Tokyo', 'Sydney', 'Berlin']

  return (
    <section className="py-12 sm:py-16 px-4 bg-purple-900">
      <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Upcoming Shows</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        {cities.map((city) => (
          <Card key={city} className="bg-purple-800">
            <CardContent className="p-4">
              <h4 className="font-semibold">{city}</h4>
              <p className="text-sm opacity-70">Coming Soon</p>
              <Button className="mt-2" variant="secondary">Get Tickets</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
