import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { logger } from './Logger.js'
import { AxiosError } from 'axios'

const colorConfig = {
  confirmButtonColor: 'var(--bs-primary)',
  cancelButtonColor: 'var(--bs-secondary)',
  background: 'var(--bs-tertiary-bg)',
  color: 'var(--bs-body-color)'
}

/**
   * @param {import('axios').AxiosError | Error | String } error An Error Object.
   * @param { String } eventTrigger Queryable trigger
   */
function _error(error, eventTrigger = '') {
  logger.error(eventTrigger, error)
  /**
   * @type {import('sweetalert2').SweetAlertOptions}
   */
  const config = {
    ...colorConfig,
    title: 'Error!',
    icon: "error",
    iconColor: 'var(--bs-danger-text-emphasis)',
    text: 'Uh-oh',
    position: 'top-right',
    timer: 1000 * 5,
    toast: true,
    showConfirmButton: false,
    color: 'var(--bs-danger-text-emphasis)',
    background: 'var(--bs-danger-bg-subtle)'
  }


  if (error instanceof AxiosError) {
    const { response } = error
    config.text = 'An error occurred'
    config.title += (' ' + response.status.toString())
    if (response.data) {
      config.html = typeof response.data == 'string' ? response.data : response.data.message
    }
  } else if (error instanceof Error) {
    config.text = error.message
  } else {
    config.text = error
  }

  return config

}

export default class Pop {
  /**
 *
 * @param {string} title The title text.
 * @param {string} text The body text.
 * @param {string} confirmButtonText The text of your confirm button.
 * @param {'success' | 'error' | 'info' | 'warning' | 'question'} icon Pop icon
 *
 * {@link https://sweetalert2.github.io/#configuration|Check out Sweet Alerts}
 */
  static async confirm(title = 'Are you sure?', text = "You won't be able to revert this!", confirmButtonText = 'Yes', icon = 'warning') {
    try {
      const res = await Swal.fire({
        ...colorConfig,
        title,
        text,
        icon,
        confirmButtonText,
        showCancelButton: true,
        reverseButtons: true
      })
      if (res.isConfirmed) {
        return true
      }
      return false
    } catch (error) {
      logger.error('CONFIRMATION', error)
      return false
    }
  }

  /**
 *
 * @param {string} title The title text
 * @param {'success' | 'error' | 'info' | 'warning' | 'question'} icon
 * @param {'top' | 'top-start' | 'top-end' | 'center' | 'center-start' | 'center-end' | 'bottom' | 'bottom-start' | 'bottom-end'} position
 * @param {number} timer Time in milliseconds.
 * @param {boolean} progressBar Show progress bar or not respectively.
 * -----------------------------------
 * {@link https://sweetalert2.github.io/#configuration|Check out Sweet Alerts}
 */
  static toast(title = 'Warning!', icon = 'warning', position = 'top-end', timer = 3000, progressBar = true) {
    Swal.fire({
      ...colorConfig,
      title: title || 'Warning!',
      icon,
      position,
      timer,
      timerProgressBar: progressBar,
      toast: true,
      showConfirmButton: false,
    })
  }



  /**
   * @param { string } message The message to display. If not provided, will display a generic message.
   */
  static success(message = 'Success!') {
    this.toast(message, 'success')
  }

  /**
   * @param {import('axios').AxiosError | Error | String } error An Error Object.
   * @param { String } eventTrigger Queryable trigger
   */
  static error(error, eventTrigger = '') {
    const config = _error(error, eventTrigger)
    Swal.fire(config)
  }

  /**
  * @param {import('axios').AxiosError | Error | String } error An Error Object.
  * @param { String } eventTrigger Queryable trigger
  */
  static meow(error, eventTrigger = '') {
    const config = _error(error, eventTrigger)

    if (error instanceof AxiosError) {
      const { response } = error
      const statuscode = response.status.toString()
      config.imageUrl = `https://http.cat/${statuscode}`
      config.imageAlt = 'Picture of a bad cat'
      config.footer = `<a href="https://http.cat/status/${statuscode}" target="_blank" style="color: #000">Meow!</a>`
      config.position = 'center'
      delete config.icon
    }

    Swal.fire(config)
  }

}
