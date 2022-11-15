import styles from "../styles/Layout.module.css"

export default function Layout({ children }: any) {
  return (
    <div className={`${styles.layoutBackground}  "mx-auto h-screen" flex`}>
      {/* <Image
        src="/images/festival.jpg"
        layout="fill"
        className="-z-10 opacity-70 "
        objectFit="cover"
      /> */}
      <div className="grid m-auto bg-slate-50 md:h-3/4 md:w-3/5 md:rounded-md lg:grid-cols-3 2xl:grid-cols-2">
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
