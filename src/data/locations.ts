import type { LucideIcon } from 'lucide-react'
import { Bike, BoxSelect, Fuel, ShoppingBag, Train } from 'lucide-react'
import transitStation from '../assets/transit-station.jpg'
import deliveryHub from '../assets/delivery-hub.jpg'
import gasStation from '../assets/gas-station.jpg'
import motorcycleParking from '../assets/motorcycle-parking.jpg'
import mall from '../assets/mall.jpg'
export type LocationItem = {
  label: string
  image: string
  icon: LucideIcon
}

export const locations: LocationItem[] = [
  {
    label: 'Transit stations',
    image: transitStation,
    icon: Train,
  },
  {
    label: 'Malls',
    image: mall,
    icon: ShoppingBag,
  },
  {
    label: 'Motorcycle parking',
    image: motorcycleParking,
    icon: Bike,
  },
  {
    label: 'Delivery hubs',
    image: deliveryHub,
    icon: BoxSelect,
  },
  {
    label: 'Gas stations',
    image: gasStation,
    icon: Fuel,
  },
]
