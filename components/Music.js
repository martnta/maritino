import { Button } from "@/components/ui/button"
import { MdMusicNote, MdPlayCircleFilled } from 'react-icons/md'

export default function Music() {
  const tracks = [
    { id: 1, name: "Seaside Serenade", album: "Coastal Rhythms" },
    { id: 2, name: "Mountain Echo", album: "Alpine Melodies" },
    { id: 3, name: "Urban Pulse", album: "City Beats" },
    { id: 4, name: "Starry Night", album: "Cosmic Tunes" },
  ]

  return (
    <section id="music" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800 dark:text-white">Latest Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.map((track) => (
            <div key={track.id} className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 flex items-center space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <MdMusicNote className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{track.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">{track.album}</p>
                </div>
                <Button variant="ghost" size="icon" className="text-primary hover:text-primary-dark hover:bg-primary/10">
                  <MdPlayCircleFilled className="h-6 w-6" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}