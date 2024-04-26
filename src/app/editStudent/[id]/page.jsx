"use client"

import Form from '@/componentes/Form'
import React from 'react'
import { useRouter } from 'next/navigation'


const uri = 'http://localhost:3000/api/student'

const getDataById = async (id) => {

  try {
    const response = await fetch(`${uri}/${id}`, { cache: "no-store" })
    if (!response.ok) {
      throw new Error("Failed to get data")
    }
    return response.json()
  } catch (error) {
    console.log("Error:", error);
  }
}

const Edit = async ({ params }) => {

  const router = useRouter()
  const id = params.id
  const { data } = await getDataById(id)
  console.log("DOCUMENTO: " + JSON.stringify(data))

  const onSubmitEdit = async (formData) => {
    const { name, age } = formData
    try {
      const response = await fetch(`${uri}/${id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name, age: age })
      })
      if (!response.ok) {
        throw new Error("Failed to Update")
      }
      router.refresh()
      router.push("/services")
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
      <div>page edit Student</div>
      <Form onSubmitForm={onSubmitEdit} formValues={data} />

    </>

  )
}

export default Edit