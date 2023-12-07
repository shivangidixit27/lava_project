
import Link from 'next/link'
import Head from 'next/head'

function ContactThankYou() {
  
    

    return (
        <>
        <Head>
        <title>Contact Thank You</title>
        <meta name="description" content="Contact Thank You" />
        <meta name="keywords" content="Contact Thank You" />
        <link rel="icon" href="/fav_icon.png" />
       
      </Head>
      <section className="pt-56 pb-40 mb-4 bgColor">
	<div className="container thankYou mx-auto px-4 text-center"> 
				<h1 className='text-[160px] font-S700 text-[#ED1556] leading-[150px]' data-aos="fade-up">Thank <span className='text-[#222]'>You</span></h1>
				<p className="text-{#2C2C2C} text-4xl font-S600 leading-tight py-14" data-aos="fade-up">Thanks for sliding into our inbox! We’ll get <br/>back to you soon.</p>
				<Link href="/" className="btn" data-aos="fade-up" data-aos-duration='1000'>Back to homepage</Link>
			</div>
	 
</section>

       
        
        </>
    )
}

export default ContactThankYou
