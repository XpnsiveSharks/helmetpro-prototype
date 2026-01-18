import type { LucideIcon } from 'lucide-react'
import { Bike, BoxSelect, ShoppingBag, Train } from 'lucide-react'

export type LocationItem = {
  label: string
  image: string
  icon: LucideIcon
}

export const locations: LocationItem[] = [
  {
    label: 'Transit stations',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670',
    icon: Train,
  },
  {
    label: 'Malls',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670',
    icon: ShoppingBag,
  },
  {
    label: 'Motorcycle parking',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2672',
    icon: Bike,
  },
  {
    label: 'Delivery hubs',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2670',
    icon: BoxSelect,
  },
]
