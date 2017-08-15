import jsonp from '@/common/js/jsonp.js'
import {commonParms, options} from './config.js'

export function getHotMoviesList () {
  const url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items'

  const data = Object.assign({}, commonParms, {
    count: 18,
    _: 1502005584596
  })

  return jsonp(url, data, options)
}

export function getFreeMoviesList () {
  const url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items'

  const data = Object.assign({}, commonParms, {
    count: 18,
    _: 1502005584597
  })
  return jsonp(url, data, options)
}

export function getNewMoviesList () {
  const url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items'

  const data = Object.assign({}, commonParms, {
    count: 18,
    _: 1502005584598
  })
  return jsonp(url, data, options)
}

export function getMoviesList (list) {
  let map = []
  list.forEach((item) => {
    map.push({
      id: item.id,
      title: item.title,
      picUrl: item.cover.url,
      rating: item.rating
    })
  })
  return map
}

export function getBuyBooksList (list) {
  let map = []
  list.forEach((item) => {
    map.push({
      id: item.id,
      title: item.title,
      price: item.price
    })
  })
  return map
}

export function getName (list) {
  let name = list.name
  return name
}
