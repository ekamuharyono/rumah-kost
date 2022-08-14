import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

import { IoPersonOutline } from 'react-icons/io5'

const Modal = (props) => {

  const router = useRouter()

  const perpanjang = async () => {
    await axios({
      method: 'put',
      url: '/api/client/perpanjangKontrak',
      data: {
        nomorKartu: props.nomorKartu
      },
      responseType: 'json'
    })
      .then(response => {
        alert(response.data.message)
        router.push('/')
      })
  }

  const berhenti = async () => {
    await axios({
      method: 'put',
      url: '/api/client/berhentiKontrak',
      data: {
        nomorKartu: props.nomorKartu
      },
      responseType: 'json'
    })
      .then(response => {
        alert(response.data.message)
        router.push('/')
      })
  }

  const aktifkan = async () => {
    await axios({
      method: 'put',
      url: '/api/client/aktifkanKartu',
      data: {
        nomorKartu: props.nomorKartu
      },
      responseType: 'json'
    })
      .then(response => {
        alert(response.data.message)
        router.push('/')
      })
  }

  const hapus = async () => {
    if (confirm(`Anda Yakin Ingin Menghapus Data ${props.namaLengkap}?`)) {
      await axios({
        method: 'put',
        url: '/api/client/hapusKartu',
        data: {
          nomorKartu: props.nomorKartu
        },
        responseType: 'json'
      })
        .then(response => {
          alert(response.data.message)
          router.push('/')
        })
    }
  }

  return (
    <div>
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"><IoPersonOutline /></div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      {props.namaLengkap}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {props.nomorKartu}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={props.activeModalBox}
                  type="button"
                  className="my-1 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={hapus}
                  type="button"
                  className="my-1 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Hapus
                </button>
                <button
                  onClick={berhenti}
                  type="button"
                  className="my-1 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-500 text-base font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Berhenti
                </button>
                <button
                  onClick={perpanjang}
                  type="button"
                  className="my-1 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Perpanjang
                </button>
                <button
                  onClick={aktifkan}
                  type="button"
                  className="my-1 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Aktifkan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;