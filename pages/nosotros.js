import Image from 'next/image'
import Layout from '@/components/layout'
import styles from '../styles/nosotros.module.css'
export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description='Sobre nosotros, guitarCO, tienda de música'
    >
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            src='/img/nosotros.jpg'
            alt='Imagen sobre nostros'
            width={1000}
            height={800}
          />
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              inventore cupiditate corporis voluptatum aliquam repellat tenetur
              veniam impedit, delectus nam, eum earum repellendus, architecto
              aut ab laudantium qui? Optio, nam. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Dolore inventore cupiditate corporis
              vo.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              inventore cupiditate corporis voluptatum aliquam repellat tenetur
              veniam impedit, delectus nam, eum earum repellendus, architecto
              aut ab laudantium qui? Optio, nam.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
