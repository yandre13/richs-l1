import Head from 'next/head'

export default function Home() {
  return (
    <>
      <header>
        <div className="w-full h-0 overflow-hidden relative pb-[64.20%] sm:pb-[60.20%] md:pb-[49.58%] xl:pb-[49.58%]">
          <img
            src="/2/Cabecera.png"
            alt="portada"
            className="absolute top-0 w-full h-full object-cover"
          />
          <div className="container absolute h-full w-full top-0 flex flex-col justify-center">
            <div className="w-[90%] max-w-xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl text-white leading-none font-black">
                ¡CELEBRA ESTE
                <span className="block text-4xl sm:text-6xl lg:text-7xl">
                  HALLOWEEN
                </span>
                {`JUNTO CON RICH'S!`}
              </h1>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section
          className="container py-8 lg:py-16 my-4
				grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-14"
        >
          <article className="lg:px-6">
            <img
              src="/2/BTC_BG_2.png"
              alt="Productos"
              className="w-full object-cover"
            />
            <h2 className="text-[28px] leading-tight sm:text-4xl lg:text-5xl text-[#D21145] font-black my-2 lg:my-6">
              ¡SÚMATE A NUESTRA COMUNIDAD!
            </h2>
            <p className="text-lg lg:text-xl leading-snug">
              {`Déjanos tus datos y descarga el recetario completo 
							de Halloween con las últimas novedades y consejos 
							de nuestros chefs, para hacer de `}
              <span className="font-bold">{`Rich's tu mejor 
							aliado en la cocina`}</span>
            </p>
          </article>
          <article>FORM</article>
        </section>
        <section className="container pt-4 pb-12 my-4">
          <h2 className="text-2xl leading-none sm:text-3xl lg:text-5xl font-bold text-center">{`¡DESCUBRE CON RICH'S UN MUNDO`}</h2>
          <h3 className="text-sec text-3xl leading-tight sm:text-5xl lg:text-7xl text-[#D21145] lg:leading-tight text-center">
            de infinitas posibilidades!
          </h3>
          <ul className="flex justify-between my-10 pb-6">
            <li className="text-[#6F7EAC] text-2xl font-semibold">
              <span className="text-3xl text-[#D21145] mr-2">•</span>Productos
              de excelente calidad
            </li>
            <li className="text-[#6F7EAC] text-2xl font-semibold">
              <span className="text-3xl text-[#D21145] mr-2">•</span>Fórmulas
              innovadoras
            </li>
            <li className="text-[#6F7EAC] text-2xl font-semibold">
              <span className="text-3xl text-[#D21145] mr-2">•</span>Amplia
              variedad de productos
            </li>
          </ul>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:px-8">
            <div>
              <img
                src="/2/foto_1.png"
                alt="Hallowen"
                className="w-full object-cover"
              />
            </div>
            <div>
              <img
                src="/2/foto_2.png"
                alt="Hallowen"
                className="w-full object-cover"
              />
            </div>
            <div>
              <img
                src="/2/foto_3.png"
                alt="Hallowen"
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="s">
            <a
              href="#"
              className="block w-[90%] max-w-[340px] lg:w-auto lg:max-w-[620px] bg-gradient-to-b from-[#E98030] to-[#D72036]
								text-white text-xl lg:text-4xl font-bold text-center mx-auto
								rounded-3xl py-3 px-4 lg:py-4 lg:pb-6 lg:px-6
								shadow-inner-richs-xl"
            >
              ¡CONOCE NUESTROS PRODUCTOS!
            </a>
          </div>
        </section>
        <section className="lg:container py-4 lg:py-8 my-4">
          <div className="w-[80%] lg:w-full mx-auto border-b-2 border-[#F60845]"></div>
          <article className="my-6 lg:my-8">
            <img
              src="/live.png"
              alt="Clase en vivo"
              className="w-full object-cover"
            />
          </article>
          <div className="w-[80%] lg:w-full mx-auto border-b-2 border-[#F60845]"></div>
        </section>
        <section className="py-0 lg:py-8 my-4">
          <article>
            <img
              src="/banner_footer.png"
              alt="DESCUBRÍ TODO LO QUE PODÉS CREAR CON RICH’S"
              className="w-full object-cover"
            />
          </article>
        </section>
        <section className="container pt-4 pb-12 my-4">
          <h2 className="text-sec text-5xl leading-none sm:text-6xl lg:text-7xl text-[#F60845] text-center">{`Encontrá tu punto rich's más cercano`}</h2>
          <h3 className="text-[22px] leading-tight sm:text-3xl lg:text-[32px] text-[#F60845] md:font-bold lg:leading-snug text-center mt-6 lg:my-2">
            y conseguí todo lo que necesitás para sorprender a mamá en su día.
          </h3>
          <p className="text-base leading-snug lg:text-xl text-center mt-6">
            Descubrí todo lo que podés crear con nuestra amplia y versátil
            variedad de productos <br />
          </p>
          <p className="text-base leading-snug lg:text-xl font-bold text-center mt-2 lg:mt-0 mb-8">
            ¿Te animás a preparar los postres más deliciosos?
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:justify-self-end lg:px-4">
              <a
                href="#"
                className="block w-[90%] max-w-[340px] lg:w-auto lg:max-w-xl bg-gradient-to-b from-[#FF6D10] to-[#FB1425]
								text-white text-xl lg:text-2xl font-bold text-center mx-auto
								rounded-xl py-3 px-4 lg:py-4 lg:px-10"
              >
                NUESTROS PRODUCTOS
              </a>
            </div>
            <div className="lg:justify-self-start lg:px-4">
              <a
                href="#"
                className="block w-[90%] max-w-[340px] lg:w-auto lg:max-w-xl bg-gradient-to-b from-[#FF6D10] to-[#FB1425]
								text-white text-xl lg:text-2xl font-bold text-center mx-auto
							rounded-xl py-3 px-4 lg:py-4 lg:px-5"
              >
                ¡DESCUBRÍ DÓNDE COMPRAR!
              </a>
            </div>
          </div>
        </section>
        <footer className="bg-[#F30844] text-white text-center py-12">
          <section className="flex justify-center">
            <div className="px-4">
              <a href="#" target="_blank" rel="noreferrer">
                <img
                  src="/fb.png"
                  width="50"
                  alt="Facebook"
                  className="w-[35px] lg:w-[50px]"
                />
              </a>
            </div>
            <div className="px-4">
              <a href="#" target="_blank" rel="noreferrer">
                <img
                  src="/ig.png"
                  width="50"
                  alt="Instagram"
                  className="w-[35px] lg:w-[50px]"
                />
              </a>
            </div>
          </section>
          <h3 className="text-xl lg:text-[28px] font-black my-8">{`Rich's Product Corporation | www.richsargentina.com.ar`}</h3>
          <small className="text-sm lg:text-base my-4 block">
            Click aquí para eliminar la suscripción
          </small>
          <small className="text-sm lg:text-base">
            Para encontrar más información e inspiración ingresá a{' '}
            <a
              href="https://www.richsargentina.com.ar"
              target="_blank"
              rel="noreferrer"
            >
              www.richsargentina.com.ar
            </a>
          </small>
        </footer>
      </main>
    </>
  )
}
