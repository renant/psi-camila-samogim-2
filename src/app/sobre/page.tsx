import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa';
import profile from '../../../public/profile.jpg';

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

export default function Sobre() {
  return (
    <div className="mt-16 sm:mt-32 mb-16">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={profile}
              width={400}
              height={400}
              alt=""
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-pink-400 sm:text-5xl">
            Eu sou Camila Samogim, prazer!
          </h1>
          <div className="mt-6 space-y-7 text-base text-black-600">
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
  );
}