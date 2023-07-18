import { FaInstagram, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa';
import LastPosts from './components/LastPosts';
import Galery from './components/image-galery';
import './globals.css';


function SocialLink({ href, children, icon: Icon }: any) {
  return (
    <li className='mb-4'>
      <a className="flex flex-row items-end text-pink-500 hover:text-pink-300" href={href}>
        <Icon className='text-2xl ' />
        <p className='ml-4 font-bold'>{children}</p>
      </a>
    </li>
  )
}

export default function Page() {
  return (
    <>
      <div className="mb-16">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20 flex flex-row justify-center items-center">
            <div className="max-w-xs px-2.5 lg:max-w-md md:w-96">
              <video autoPlay muted loop className='aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800'>
                <source src="/video.mp4" />
              </video>
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-pink-400 sm:text-5xl">
              Eu sou Camila Samogim, Psicóloga Infantil, prazer!
            </h1>
            <div className="mt-6 space-y-7 text-base text-black-600 text-justify">
              <p>
                Sou formada em Psicologia pelo Anchieta, em Jundiaí. Durante a minha graduação, percebi minha paixão pelo trabalho com crianças e decidi me especializar nessa área. Atualmente, estou realizando uma Pós-graduação em Análise do Comportamento aplicada ao Transtorno do Espectro Autista e Deficiência pela CBI of Miami, com o objetivo de aprimorar ainda mais meu conhecimento e habilidades para ajudar as crianças com necessidades especiais.
              </p>
              <p>
                Acredito que cada criança é única e merece ser tratada de maneira individualizada, respeitando suas necessidades e particularidades. Por isso, meu trabalho é baseado em uma abordagem humanizada e centrada na criança, buscando sempre compreender suas emoções e pensamentos para poder ajudá-las da melhor forma possível.
              </p>
              <p>
                Trabalho com crianças desde o início da minha carreira, utilizando técnicas como a terapia comportamental para ajudá-las a desenvolver habilidades sociais, emocionais e cognitivas. Além disso, busco sempre orientar as famílias e responsáveis sobre como lidar com as dificuldades enfrentadas pelas crianças e como ajudá-las a superá-las.
              </p>
              <p>
                Meu objetivo é oferecer um atendimento de qualidade e efetivo, que ajude as crianças a alcançarem seu potencial máximo e viverem uma vida mais plena e feliz. Entre em contato comigo para saber mais sobre o meu trabalho e como posso ajudar você e sua família. Estou sempre pronta para atender às suas necessidades e auxiliar no desenvolvimento saudável de suas crianças.
              </p>

            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://api.whatsapp.com/send?phone=5511914175676" icon={FaWhatsapp}>
                Entre em contato comigo
              </SocialLink>
              <SocialLink href="https://www.instagram.com/psicamilasamogim/" icon={FaInstagram}>
                Me acompanhe no Instagram
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/camila-samogim-740928163/" icon={FaLinkedin}>
                Veja meu perfil profissional
              </SocialLink>
              <SocialLink
                href={`mailto:camila.samogim@hotmail.com?subject=Contato%20pelo%20site&body=Ol%C3%A1%2C%20Camila%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20marcar%20uma%20consulta`}
                icon={FaMailBulk}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                Se preferir mande um e-mail
              </SocialLink>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className='prose prose-sm max-w-none md:px-10 mb-4 md:mb-10'>
          <h2 className='text-center text-pink-400'>Minhas últimas publicações</h2>
        </div>
        <LastPosts />
      </div>

      <div className="flex flex-col text-base text-black-600 items-center justify-center mt-4 md:mt-10">
        <div className='prose prose-sm max-w-none md:px-10'>
          <h2 className='text-center text-pink-400'>Confira de perto meu espaço</h2>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center  mt-4 md:mt-10 px-4">

          <div className="prose prose-md flex flex-col text-justify">
            <p className='mb-0'>Meu espaço foi pensado e planejado com muito carinho para acolher todas as famílias!</p>
            <p className='mb-0'>O consultório fica localizado no Edifício Golden Office, na cidade de Jundiaí/SP.</p>
            <p className='mb-0'>A sala é equipada com materiais psicopedagogicos, brinquedos, livros, e diversos outros recursos que são utilizados em nossos atendimentos!</p>
            <p className='mb-0'>O espaço possui uma recepção com cantinho do café, para que as famílias possam esperar em um local aconchegante!</p>
            <p className='mb-0'>Também possuímos banheiro e uma pequena copa, utilizada também como recurso de algumas terapias!</p>
            <p className='mb-0'>Venha conhecer o espaço e tomar um café comigo!</p>

          </div>

          <div className='prose prose-sm max-w-none mt-5 md:mt-0 md:w-1/2 md:ml-4'>
            <Galery />
          </div>




        </div>


        <div className='mt-5 md:mt-10 px-14 w-full'>
          <h2 className='text-2xl leading-loose text-center text-pink-400'>Perguntas frequentes</h2>
          <div>
            <div className='border-b  md:pb-2 border-pink-500 flex flex-col md:flex-row md:justify-between md:items-center mt-5 md:mt-10 pb-8'>
              <h3 className='text-pink-500 m-0 mb-2 md:mb-0 font-semibold'>O que é Psicologia Infanto-Juvenil?</h3>
              <p className='m-0 max-w-2xl text-justify'>A Psicologia Infanto-Juvenil estuda sobre emoções, cognição e comportamentos de crianças e adolescentes. Os Psicólogos utilizam técnicas e recursos lúdicos para promover bem-estar e desenvolvimento saudável para seus clientes.</p>
            </div>
            <div className='border-b  md:pb-2 border-pink-500 flex flex-col md:flex-row md:justify-between md:items-center mt-5 md:mt-10 pb-8'>
              <h3 className='text-pink-500 m-0 mb-2 md:mb-0 font-semibold'>Por que a Psicologia Infanto-Juvenil é importante?</h3>
              <p className='m-0 max-w-2xl text-justify'>A Psicologia Infanto-Juvenil é fundamental para que as crianças e adolescentes de desenvolvam de forma saudável, a fim de que, na vida adulta, sejam socialmente habilidosos e capazes de criar estratégias de resolução de problemas. Oferece suporte emocional, orientação e recursos para lidar com desafios. Melhora autoestima, habilidades sociais e desempenho acadêmico.</p>
            </div>
            <div className='border-b  md:pb-2 border-pink-500 flex flex-col md:flex-row md:justify-between md:items-center mt-5 md:mt-10 pb-8'>
              <h3 className='text-pink-500 m-0 mb-2 md:mb-0 font-semibold'>Quanto tempo dura a terapia infanto-juvenil?</h3>
              <p className='m-0 max-w-2xl text-justify'>O tempo da terapia infanto-juvenil varia conforme as necessidades de cada criança ou adolescente. O progresso é avaliado pelo psicólogo, assim como a alta terapêutica, sendo a mesma realizada de forma gradativa. As sessões são contínuas, e geralmente ocorrem uma vez por semana.</p>
            </div>
            <div className='border-b  md:pb-2 border-pink-500 flex flex-col md:flex-row md:justify-between md:items-center mt-5 md:mt-10 pb-8'>
              <h3 className='text-pink-500 m-0 mb-2 md:mb-0 font-semibold'>Qual é a idade ideal para iniciar a terapia com crianças?</h3>
              <p className='m-0 max-w-2xl text-justify'>Não há uma idade específica para iniciar a terapia com crianças, pois cada caso é único. A decisão de buscar ajuda profissional depende dos sintomas e dificuldades que a criança está enfrentando. Algumas crianças podem se beneficiar da terapia desde a primeira infância, enquanto outras podem iniciar mais tarde, quando começam a enfrentar desafios específicos. Lembrando que o processo de psicoeducação e orientação de pais é inerente à psicoterapia infantil, especialmente na primeira infância.</p>
            </div>
            <div className='border-b  md:pb-2 border-pink-500 flex flex-col md:flex-row md:justify-between md:items-center mt-5 md:mt-10 pb-8'>
              <h3 className='text-pink-500 m-0 mb-2 md:mb-0 font-semibold'>Como a terapia pode ser adaptada às necessidades da criança?</h3>
              <p className='m-0 max-w-2xl text-justify'>A terapia se adapta às necessidades da criança com abordagens e técnicas flexíveis. Cada criança é única e tem demandas próprias. O terapeuta avalia e ajusta as intervenções com base nas necessidades específicas, buscando um ambiente acolhedor e estimulante.</p>
            </div>
            <div className='border-b  md:pb-2 border-pink-500 flex flex-col md:flex-row md:justify-between md:items-center mt-5 md:mt-10 pb-8'>
              <h3 className='text-pink-500 m-0 mb-2 md:mb-0 font-semibold'>Por que o envolvimento dos pais é importante no processo terapêutico?</h3>
              <p className='m-0 max-w-2xl text-justify'>A participação dos pais na terapia é crucial, pois ajuda a entender as necessidades emocionais da criança, desenvolver estratégias para desafios e fortalecer os vínculos familiares.</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col mt-10 w-[500px] justify-center items-center'>
          <div className='flex flex-col justify-end flex-1'>
            <h3 className="text-3xl font-bold text-pink-800 md:text-4xl mb-0 ">Saiba como posso te ajudar</h3>
            <p className="text-pink-500 m-0">Entre em contato agora mesmo</p>


          </div>
          <a
            href="https://api.whatsapp.com/send?phone=5511914175676"
            type="button"
            className="mt-5  border border-pink-500 bg-pink-500 px-4 text-white text-center rounded-md py-2 transition duration-500 ease select-none hover:bg-pink-600 focus:outline-none focus:shadow-outline"
          >
            FALE COMIGO!
          </a>
        </div>

      </div>


    </>
  )
}

