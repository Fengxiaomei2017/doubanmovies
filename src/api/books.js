import jsonp from '@/common/js/jsonp.js'
import {commonParms, options} from './config.js'

export function getBooksNotReal () {
  const url = 'https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items'

  const data = Object.assign({}, commonParms, {
    count: 18,
    loc_id: 0
  })

  return jsonp(url, data, options)
}

export function getBooksReal () {
  const url = 'https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items'

  const data = Object.assign({}, commonParms, {
    count: 18,
    loc_id: 0
  })

  return jsonp(url, data, options)
}

export function getBuyBooks () {
  const url = 'https://m.douban.com/rexxar/api/v2/subject_collection/market_product_book_mobile_web/items'

  const data = Object.assign({}, commonParms, {
    count: 20,
    loc_id: 0
  })

  return jsonp(url, data, options)
}
