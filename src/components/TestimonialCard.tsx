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
    <div className="card card-hover h-full flex flex-col">
      <div className="mb-4 text-blue-sky">
        <FaQuoteLeft size={24} />
      </div>
      <p className="italic text-gray-700 mb-4 flex-grow">{quote}</p>
      <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
        {imageSrc && (
          <div className="mr-3 w-12 h-12 rounded-full overflow-hidden">
            <img
              src={imageSrc}
              alt={author}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-800">{author}</p>
          {condition && <p className="text-sm text-gray-600">{condition}</p>}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
