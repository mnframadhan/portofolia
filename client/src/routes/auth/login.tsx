import { Button } from '@/components/ui/my-button'
import { MyInput } from '@/components/ui/my-input'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/login')({
  component: Login
})

export function Login () {

  return(
    <section id='login' className='flex items-center justify-center'>

      <div className='flex flex-col gap-4 p-8 md:p-18 md:max-w-[600px] font-main'>

        <div>
          <span className='text-purple-600'>Portofolia.id</span>
          <h1 className='text-xl font-extrabold'>Masuk Akun Portofolia.id</h1>
        </div>

        <form>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-4'>
              <MyInput label='Username atau Email' type='text'/>
              <MyInput label='Password' type='text' />
            </div>
            <div className='flex flex-col gap-2'>
              <span>Belum punya akun? <Link to='/auth/register' className='text-purple-600 hover:underline decoration-dashed'>Daftar</Link></span>
              <div>
                <Button title='Masuk' customGradient='bg-gradient-to-tl from-purple-900 to-purple-600' textColor='text-white' textWeight='font-semibold'></Button>
              </div>
            </div>
          </div>
        </form>

        <div>

        </div>
        

      </div>

    </section>
    
  )

}
