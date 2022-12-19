
export const validateForm = (formData, setError) => {
  let formError = false
  let firstErrorKey = ''

  const set = (key, value) => {
    if (value) formError = true
    if (value && !firstErrorKey) firstErrorKey = key

    setError((prev) => ({
      ...prev,
      [key]: value || ''
    }))
  }

  const nameRegex = /^[a-zA-Z]+$/
  if (formData.firstname === '') {
    set('firstname', 'This is required.')
  } else if (!nameRegex.test(formData.firstname)) {
    set('firstname', 'Can\'t be number or special characters')
  } else set('firstname')

  if (formData.lastname === '') {
    set('lastname', 'This is required.')
  } else if (!nameRegex.test(formData.lastname)) {
    set('lastname', 'Cant be number or special characters')
  } else set('lastname')

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (formData.email === '') {
    set('email', 'This is required.')
  } else if (!String(formData.email).toLowerCase().match(emailRegex)) {
    set('email', 'Please enter correct email')
  } else set('email')

  if (formData.company === '') {
    set('company', 'This is required.')
  } else set('company')

  if (!formData.blockchain?.length) {
    set('blockchain', 'Please select blockchain networks')
  } else set('blockchain')

  const urlRegex = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi
  if (!String(formData.website).toLowerCase().match(urlRegex)) {
    set('website', 'Please enter a valid website')
  } else set('website')

  if (formData.purpose.value === '') {
    set('purpose', 'Please select an option')
  } else set('purpose')

  if (formData.contactMethod.value === '') {
    set('contactMethod', 'Please select an option')
  } else set('contactMethod')

  const phoneRegex = /^(\+\d{1,3})?\s?\d{10}$/
  if (['telegram', 'phone'].includes(formData.contactMethod.value)) {
    if (!formData.phone || !formData.phone.match(phoneRegex)) {
      set('phone', 'Please enter a valid phone number')
    } else set('phone')
  }

  if (formData.role.value === '') {
    set('role', 'Please select role')
  } else set('role')

  if (formData.message === '') {
    set('message', 'This is required.')
  } else set('message')

  return { validated: !formError, firstErrorKey }
}
