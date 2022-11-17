import styles from "../styles/Layout.module.css"
import Image from "next/image"

export default function Layout({ children }: any) {
  return (
    <div className={`mx-auto flex h-screen`}>
      <Image
        src="/images/festival.jpg"
        layout="fill"
        className="hidden opacity-100 -z-10 lg:block"
        objectFit="cover"
      />
      <div className="grid h-screen m-auto bg-slate-50 md:h-3/4 md:w-3/5 md:rounded-md lg:grid-cols-3 2xl:grid-cols-2">
        <div className={styles.imgStyle}>
          <div className={styles.cartoonImg}></div>
          <div className={styles.cloud_one}></div>
        </div>
        <div className="z-0 flex flex-col mx-1 justify-evenly bg-gradient-to-r from-blue-50 to-indigo-50 md:mx-0 lg:col-span-2 2xl:col-span-1">
          <div className="p-10 text-center">{children}</div>
        </div>
      </div>
    </div>
  )
}
