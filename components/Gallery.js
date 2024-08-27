"use client"

export default function Gallery() {
  return (
    <section className="py-12 sm:py-16 px-4">
      <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Gallery</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-square bg-purple-800 rounded-lg overflow-hidden">
            <img
              src={`/placeholder.svg?height=300&width=300`}
              alt={`Gallery image ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
