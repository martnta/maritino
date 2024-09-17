import { Button } from "@/components/ui/button"
import { IoCalendar } from 'react-icons/io5'

export default function UpcomingShows() {
  const shows = [
    { id: 1, name: "Summer Fest", venue: "Central Park, New York", date: "July 15, 2024" },
    { id: 2, name: "Acoustic Night", venue: "The Basement, Nashville", date: "August 3, 2024" },
    { id: 3, name: "Folk & Roots Festival", venue: "Golden Gate Park, San Francisco", date: "September 10, 2024" },
  ]

  return (
    <section id="shows" className="py-12 px-4 bg-muted">
    <div className="container mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Upcoming Shows</h2>
      <div className="space-y-4">
        {shows.map((show) => (
          <div key={show.id} className="bg-card rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <IoCalendar className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">{show.name}</h3>
                <p className="text-sm text-muted-foreground">{show.venue}</p>
                <p className="text-sm text-muted-foreground">{show.date}</p>
              </div>
            </div>
            <Button className="w-full sm:w-auto">Get Tickets</Button>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}