import React from 'react'
import img_1 from '../../assets/images/new_section -1.png'
import img_2 from '../../assets/images/mission.png'

const Section = ({children}) => {
    
  return (
    <section>
        <div className="row">
            <div className="left-row">
            <div className="content">
                <Head text='The best place to start? Join us for a worship service.' />
                <Paragraph text= 'Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan taan huruf atau typesetting. Ipsum telah menjadi standar contoh tahun 1500an, saat seorang tukang cetak yang tidak dikenal men kumpulan teks dan mengacaknya untuk Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan taan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh  tahun 1500an,seorang tukang cetak yang tidak dikenal mengambil  kumpulan teks dan mengacaknya untuk' />
                <Paragraph text='Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan taan huruf atau typesetting. Ipsum telah menjadi standar contoh tahun 1500an, saat seorang tukang cetak yang tidak dikenal' />
                {children}
            </div>
            </div>

            <div className="right-row">
                <Image img={img_1} className={'img-1'} />
                <Image img={img_2} className={'img-2'} />
            </div>
        </div>
    </section>
  )
}

const Paragraph = ({text}) => <p>{text}</p> 
const Head = ({text}) => <h2>{text}</h2>
const Image = ({img, className}) => <img src={img} alt="" className={className} />

export default Section