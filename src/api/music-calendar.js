import fetch from '@/api'

export async function getCalendar(params) {
  const url = '/calendar'
  return fetch.music({
    url,
    params
  })
}