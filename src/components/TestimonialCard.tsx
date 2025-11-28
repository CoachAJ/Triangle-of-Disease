import { FaQuoteLeft } from 'react-icons/fa'

interface TestimonialCardProps {
  quote: string
  author: string
  condition?: string
  imageSrc?: string
}

const TestimonialCard = ({
  quote,
  author,
  condition,
  imageSrc,
}: TestimonialCardProps) => {
  return (
    <div className="card card-hover h-full flex flex-col bg-gradient-to-br from-white to-blue-50/30 border-l-4 border-blue-sky shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="mb-6 text-blue-sky relative">
        <div className="absolute -top-2 -left-2 text-6xl opacity-20">
          <FaQuoteLeft />
        </div>
        <FaQuoteLeft size={32} className="relative z-10" />
      </div>
      <p className="italic text-gray-800 text-lg mb-6 flex-grow leading-relaxed">{quote}</p>
      <div className="flex items-center mt-auto pt-6 border-t-2 border-gradient-to-r from-blue-sky to-tangy-yellow">
        {imageSrc ? (
          <div className="mr-4 w-16 h-16 rounded-full overflow-hidden ring-4 ring-blue-sky/30 shadow-md">
            <img
              src={imageSrc}
              alt={author}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="mr-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-sky to-health-blue flex items-center justify-center text-white font-bold text-2xl ring-4 ring-blue-sky/30 shadow-md">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-bold text-gray-900 text-lg">{author}</p>
          {condition && <p className="text-sm text-glorious-sunset font-semibold">{condition}</p>}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
