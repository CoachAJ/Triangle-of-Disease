import { ReactNode } from 'react'

interface InfoCardProps {
  title: string
  icon?: ReactNode
  color?: 'blue' | 'orange' | 'yellow' | 'default'
  children: ReactNode
  className?: string
}

const InfoCard = ({
  title,
  icon,
  color = 'default',
  children,
  className = '',
}: InfoCardProps) => {
  // Define color schemes based on the color prop
  const colorSchemes = {
    blue: {
      header: 'bg-health-blue text-white',
      border: 'border-health-blue',
      icon: 'bg-blue-sky text-white',
    },
    orange: {
      header: 'bg-glorious-sunset text-white',
      border: 'border-glorious-sunset',
      icon: 'bg-glorious-sunset text-white',
    },
    yellow: {
      header: 'bg-tangy-yellow text-gray-800',
      border: 'border-tangy-yellow',
      icon: 'bg-tangy-yellow text-gray-800',
    },
    default: {
      header: 'bg-gray-100 text-gray-800',
      border: 'border-gray-200',
      icon: 'bg-gray-200 text-gray-800',
    },
  }

  const scheme = colorSchemes[color]

  return (
    <div className={`card border-2 ${scheme.border} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${className}`}>
      <div className={`-mx-6 -mt-6 mb-6 px-6 py-5 flex items-center ${scheme.header} shadow-md`}>
        {icon && (
          <div className={`mr-4 p-3 rounded-full ${scheme.icon} shadow-lg text-2xl`}>
            {icon}
          </div>
        )}
        <h3 className="font-proxima text-2xl font-bold">{title}</h3>
      </div>
      <div className="text-base leading-relaxed text-gray-700">{children}</div>
    </div>
  )
}

export default InfoCard
