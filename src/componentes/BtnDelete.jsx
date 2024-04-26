'use client'
// router de next
import { useRouter } from "next/navigation"
//sweetalert2
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const uri = 'http://localhost:3000/api/student'

const BtnDelete = ({ id }) => {
const router = useRouter()
  const MySwal = withReactContent(Swal)

  const deleteDocument = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        const response = await fetch(`${uri}/${id}`,{
          method: 'DELETE'
        })
        if(response.ok){
          router.refresh()
        }
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  return (
    <button onClick={deleteDocument} className='inline-flex items-center px-4 py-2 text-sm  font-medium text-center text-white bg-red-400   hover:bg-red-600 focus:ring-4 focus:outline-none'>
      Delete
    </button>
  )
}

export default BtnDelete