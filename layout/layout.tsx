import styles from "../styles/Layout.module.css"

export default function Layout({ children }: any) {
  return (
    <div className={styles.layoutBackground}>
      <div className="grid w-3/5 m-auto rounded-md h-3/4 bg-slate-50 lg:grid-cols-2">
        <div className={styles.imgStyle}>
          <div className={styles.cartoonImg}></div>
          <div className={styles.cloud_one}></div>
        </div>
        <div className="flex flex-col right justify-evenly">
          <div className="py-10 text-center">{children}</div>
        </div>
      </div>
    </div>
  )
}
