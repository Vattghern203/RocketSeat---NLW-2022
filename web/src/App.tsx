import { GameBanner } from './components/GameBanner'

import './styles/main.css'

import * as Dialog from '@radix-ui/react-dialog' 

import logoImgs from './assets/logo.svg'
import { CreateAdBanner } from './components/CreateAdBanner'
import { useEffect, useState } from 'react'
import { GameController } from 'phosphor-react'
import { Input } from './components/Form/Input'

interface Game {
  id: string;
  title: string;
  bannerUrl: string
  _count: {
    ads: number;
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() =>{
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, [])

  return (

  <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>

    <img src={logoImgs} alt="nlw logo" />

    <h1 className='text-6xl text-white font-black my-20'>Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.</h1>

    <div className='grid grid-cols-6 gap-6 mt-16'>

      {games.map(game => {
        return (
          <GameBanner
            key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title} 
            adsCount={game._count.ads}
          />
        )
      })}

    </div>

    <Dialog.Root>

      <CreateAdBanner />

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25">

          <Dialog.Title className="text-4xl font-black">
            Publique um anúncio
          </Dialog.Title>
            <form className='mt-8'>

              <div className='flex flex-col gap-2'>
                <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                <Input 
                id='game' 
                placeholder='selecione o game que deseja jogar...'
                className='bg-zinc-900 py-3 px-3 rounded text-sm placeholder:text-zinc-500' />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input id="name" type="text" placeholder='Como te chamam dentro do game?' />
              </div>

              <div className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                  <Input type="number" id="yearsPlaying" placeholder='Tudo bem ser ZERO'/>
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="discord">Qual o seu discord?</label>
                  <Input type="text" id="discord" placeholder='User#0000' />
                </div>
              </div>

              <div className='flex gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="weekDays">Quando costuma jogar?</label>

                  <div className='grid grid-cols-4 gap-2'>
                    <button 
                    title='Domingo'
                    className='w-8 h-8 round bg-zinc-900'

                    >
                      D
                    </button>

                    <button 
                    title='Segunda'
                    className='w-8 h-8 round bg-zinc-900'
                    >
                      S
                    </button>

                    <button 
                    title='Terça'
 
                    className='w-8 h-8 round bg-zinc-900'>
                      T
                    </button>

                    <button 
                    title='Quarta'

                    className='w-8 h-8 round bg-zinc-900'>
                      Q
                    </button>
                      
                    <button 
                    title='Quinta'

                    className='w-8 h-8 round bg-zinc-900 '>
                      Q
                    </button>

                    <button 
                    title='Sexta'
 
                    className='w-8 h-8 round bg-zinc-900'>
                      S
                    </button>

                    <button 
                    title='Sábado'

                    className='w-8 h-8 round bg-zinc-900'>
                      S
                    </button>
                  </div>
                </div>
                <div className='flex flex-col gap-2 flex-1'>
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <div className='grid grid-cols-2 gap-2'>
                    <Input type="time" id="hourStart" placeholder='De'/>
                    <Input type="time" id="hourEnd" placeholder='Até'/>
                  </div>
                </div>
              </div>

              <div className='mt-2 flex gap-2 text-sm'>
                <Input type="checkbox" id="useVoiceChannel" />
                Costumo me conectar ao chat de voz
              </div>

              <footer className='mt-4 flex justify-end gap-4'>
                <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>
                  Cancelar
                </Dialog.Close>
                <button 
                type="submit"
                className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                >
                  <GameController size={24}/>
                  Encontrar Duo
                  </button>
              </footer>

            </form>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </div>
  )
}

export default App
