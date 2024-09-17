import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-white">Stay Updated</h2>
          <p className="mb-6 text-center text-gray-600 dark:text-gray-300">Subscribe to our newsletter for the latest news and tour dates.</p>
          <form className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow" 
            />
            <Button type="submit" className="w-full sm:w-auto">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}