import React from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';
import axios from 'axios';
const SignupForm = () => {
  const [img, setImg] = useState("")
  const [functionname,setFunctionname] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const formik = useFormik({
    initialValues: {
      name: '', img: '', price: '', type: ''
    },
    onSubmit={(values, actions)=> {
  const obj = {
    name: values.name,
    price: values.price,
    type: values.type,
    img: values.img,
  }
  if (values.name === "" || values.type === "" || values.img === "" || values.price === "") {
    alert("Enter All Datas")
  } else {

    axios.post("http://localhost:4000/product", obj)
      .then(res => {
        setImg("")
        setName("")
        setPrice("")
        setType("")
      })
  }
}
  }
return (
  <form onSubmit={formik.handleSubmit}>
    <label htmlFor="email">Email Address</label>
    <input
      name="name"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.name}
      placeholder="Product Name"
    />
    <input
      name="price"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.price}
      placeholder="Product Price"

    />
    <input
      name="img"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.img}
      placeholder="Product Img"


    />
    <input
      name="type"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.type}
      placeholder="Product Category Type"

    />



    <button type="submit">Submit</button>
  </form>
);
};
export default SignupForm