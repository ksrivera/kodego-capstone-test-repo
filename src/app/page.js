import Image from 'next/image'

export default function Home() {
  return (
    <main className="main p-24  bg-neutral-50">
        <section id="hero" class="d-flex justify-content-center align-items-center">
    <div class="container float-xl-left position-relative" data-aos="zoom-in" data-aos-delay="100">
      <h1 class="fw-bolder hero-text">How Are You Feeling Today?</h1>
      <h2>Book an Appointment Now!</h2>
     
      <button type="button" class="btn rounded-4 "><a href="#appointment" class="text-decoration-none ">Click Here</a></button>
      
    
    </div>
  </section>

    </main>
  )
}
