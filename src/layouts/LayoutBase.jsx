import { Outlet } from "react-router-dom"
import { Content } from "./components/Content"
import { FooterContent } from "./components/Footer"
import { Header } from "./components/Header"

export const LayoutBase = () => {
  return (
    <>
      <Header/>
      <Content Children={<Outlet/>}/>

    </>
  )
}