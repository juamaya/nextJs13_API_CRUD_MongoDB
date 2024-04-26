"use client"

import Form from '@/componentes/Form'
import React from 'react'
import { useRouter } from 'next/navigation'

const uri = 'http://localhost:3000/api/student'

const Create = () => {

  const router = useRouter()

  const onSubmitCreate = async (formData) => {
    console.log("DATOS CAPTURADOS DEL FORMMULARIO: " + JSON.stringify(formData))
    const { name, age } = formData

    try {
      const response = await fetch(uri, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name, age: age })
      })
      if (response.ok) {
        router.refresh()
        router.push("/services")
      } else {
        throw new Error("Failed to create")
      }
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
      <div>page create Student</div>
      <Form onSubmitForm={onSubmitCreate} />
    </>

  )
}

export default Create