import qs from 'qs'
import { service, serviceJson} from 'utils/api'

function request(url, method) {
  return function(params) {
    return service[method](url, qs.stringify(params, { arrayFormat: 'brackets' }))
      .then(res => {
        const { data } = res
        return data
      })
      .catch(err => {
        console.error(err)
      })
  }
}
function requestJson(url, method) {
  return function(params) {
    return serviceJson[method](url, params)
      .then(res => {
        const { data } = res
        return data
      })
      .catch(err => {
        console.error(err)
      })
  }
}

export const get = url => request(url, 'get')
export const post = url => request(url, 'post')
export const postJson = url => requestJson(url, 'post')