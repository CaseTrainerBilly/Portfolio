import Image from 'next/image'

export default function About() {
    return (
      <section id="about" className="container mx-auto px-4 py-16 h-full flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="https://picsum.photos/seed/profile/400/400" alt="Your Name" width={400} height={400} className="rounded-full shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-xl text-gray-700">
              Your intro goes here. Describe your background, experience, and what you're passionate about in software engineering.
            </p>
          </div>
        </div>
      </section>
    )
}