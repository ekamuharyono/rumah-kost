import { toast } from 'react-toastify'

const styleNotify = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,

}

export const notifyError = (message) => {
  toast.error(message, styleNotify);
}

export const notifySuccess = (message) => {
  toast.success(message, styleNotify);
}

export const notifyInfo = (message) => {
  toast.info(message, styleNotify);
}

export const notifyWarning = (message) => {
  toast.warning(message, styleNotify);
}