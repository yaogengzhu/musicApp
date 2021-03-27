import list from 'china-location/dist/location.json'
import ChinaLocation from 'china-location'

const location = new ChinaLocation(list)

export function getAddress(newProvince, newCity, newDistrict) {

  console.log(location, 'location')

  console.log(location.changeProvince(newProvince))
  return location.getCurrentAddress()
}